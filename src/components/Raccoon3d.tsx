"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function FatRaccoon(props: any) {
  const ref = useRef<any>();

  useFrame((state, delta) => (ref.current.rotation.y += delta));

  const result = useLoader(GLTFLoader, "/models/scene.gltf");

  return <primitive ref={ref} scale={0.04} object={result.scene} {...props} />;
}

const Raccoon3d = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <FatRaccoon position={[0, -1.5, 0]} />
      <OrbitControls />
    </Canvas>
  );
};

export default Raccoon3d;
