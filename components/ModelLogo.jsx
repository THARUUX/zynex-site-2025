'use client';

import React, { useRef, useLayoutEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Environment } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

export default function ModelLogo() {
  const gltfLogo = useGLTF('/logo.glb');

  const groupRef = useRef();
  const modelLogoRef = useRef();
  const light1 = useRef();
  const light2 = useRef();

  const { camera } = useThree();

  /* ------------------ INITIAL SETUP + GSAP ------------------ */
  useLayoutEffect(() => {
    if (!modelLogoRef.current) return;

    // Initial transform
    modelLogoRef.current.position.set(0, -0.2, 4);
    modelLogoRef.current.rotation.set(0, 0, 0);
    modelLogoRef.current.scale.set(1, 1, 1);

    camera.position.set(0, 0, 5);

    // APPLY METALLIC MATERIAL
    modelLogoRef.current.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;

      // Metallic look
      child.material.metalness = 0.1;     // FULL metal
      child.material.roughness = 1;  // Lower = shinier
      child.material.envMapIntensity = 1.5;

      // Optional: force standard material
    //   child.material = new THREE.MeshStandardMaterial({
    //     color: "#AE00FF",
    //     metalness: 1,
    //     roughness: 0.15
    //   });
    }
  });

    // GSAP ANIMATION
    const tl = gsap.timeline({
      defaults: { ease: 'power1.inOut' },
    });

    tl.to(modelLogoRef.current.position, {
      y: 0.05,
      z: 0,
      x: -0.6,
      duration: 4,
    }, 0);

    tl.to(modelLogoRef.current.rotation, {
      x: Math.PI * 0.5,
      duration: 4,
    }, 0);

  }, [camera]);

  /* ------------------ LIGHT ANIMATION ------------------ */
  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (light1.current) {
      light1.current.position.x = Math.sin(t * 0.5) * 2;
      light1.current.position.z = Math.cos(t * 0.5) * 2;
    }

    if (light2.current) {
      light2.current.position.x = Math.sin(t * 0.3 + 2) * 2;
      light2.current.position.y = Math.cos(t * 0.3) * 2;
    }
  });

  /* ------------------ MOUSE PARALLAX ------------------ */
  useFrame((state) => {
    if (!groupRef.current) return;

    const x = state.pointer.x;
    const y = state.pointer.y;

    groupRef.current.rotation.x += ((-y * 0.2) - groupRef.current.rotation.x) * 0.01;
    groupRef.current.rotation.y += ((x * 0.2) - groupRef.current.rotation.y) * 0.01;
  });

  return (
    <>
      {/* ENVIRONMENT MAP (REQUIRED FOR METAL) */}
      {/* <Environment preset="city" /> */}

      <group ref={groupRef}>
        {/* ACCENT LIGHTS */}
        <pointLight
          ref={light1}
          color="#AE00FF"
          intensity={10}
          position={[2, -1, 10]}
          distance={100}
          decay={2}
        />

        <pointLight
          ref={light2}
          color="#4000FF"
          intensity={1}
          position={[-2, 0, 20]}
          distance={100}
          decay={1}
        />

        {/* LOGO MODEL */}
        <primitive object={gltfLogo.scene} ref={modelLogoRef} />
      </group>
    </>
  );
}
