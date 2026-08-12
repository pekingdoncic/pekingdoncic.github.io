import { Suspense, useEffect, useMemo, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, useAnimations, useGLTF } from '@react-three/drei';
import { Box3, Vector3 } from 'three';
import { clone } from 'three/examples/jsm/utils/SkeletonUtils.js';
import type { Group } from 'three';

const MODEL_URL = `${import.meta.env.BASE_URL}avatar.glb`;

function Model() {
  const groupRef = useRef<Group>(null);
  const { scene: sourceScene, animations } = useGLTF(MODEL_URL);
  const scene = useMemo(() => clone(sourceScene), [sourceScene]);
  const { actions } = useAnimations(animations || [], groupRef);

  useEffect(() => {
    const idle = actions['Idle'];
    if (idle) {
      idle.reset().play();
    }
    return () => {
      idle?.stop();
    };
  }, [actions]);

  const transform = useMemo(() => {
    // Keep the original model untouched and frame a natural upper-body crop.
    // Showing some shoulders preserves the character's intended proportions
    // instead of turning the navbar avatar into an extreme face close-up.
    const box = new Box3().setFromObject(scene);
    const size = box.getSize(new Vector3());
    const center = box.getCenter(new Vector3());
    const visibleHeight = size.y * 0.72;
    const focusCenter = center.clone();
    focusCenter.y = box.max.y - visibleHeight / 2;
    const s = 1.55 / visibleHeight;
    return {
      scale: s,
      // The parent group applies the scale, so the centering offset must stay
      // in model-space coordinates (scaling it here would offset it twice).
      offset: [-focusCenter.x, -focusCenter.y, -focusCenter.z] as const,
    };
  }, [scene]);

  return (
    <Float speed={1.4} rotationIntensity={0.025} floatIntensity={0.04}>
      <group ref={groupRef} scale={transform.scale}>
        <group position={transform.offset}>
          <primitive object={scene} />
        </group>
      </group>
    </Float>
  );
}

export default function Avatar3D() {
  return (
    <Canvas
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 2]}
      camera={{ position: [0, 0, 3.2], fov: 31 }}
      style={{ background: 'transparent', pointerEvents: 'none' }}
    >
      <ambientLight intensity={0.95} />
      <directionalLight position={[3, 4, 5]} intensity={1.35} />
      <directionalLight position={[-2, 1, 3]} intensity={0.45} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload(MODEL_URL);
