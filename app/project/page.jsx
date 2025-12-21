
'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Canvas } from '@react-three/fiber';
import { Stage, OrbitControls, useGLTF } from '@react-three/drei';
import ModelLogo from '@/components/ModelLogo';

gsap.registerPlugin(ScrollTrigger);

function Macbook(props) {
  const { scene } = useGLTF('/macbook.glb');
  return <primitive object={scene} {...props} />;
}

export default function ProjectPage() {

  return (
    <div style={{ height: '200vh', padding: '100px 0' }}>

      <div style={{ height: '100vh', marginTop: '200px', textAlign: 'center' }}>
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }} style={{ height: '500px', width: '100%' }}>
          <Stage environment="city" intensity={0.6}>
            <ModelLogo />
          </Stage>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </div>
  );
}
