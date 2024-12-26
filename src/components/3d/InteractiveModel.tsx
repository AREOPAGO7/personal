import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Model Component
const Model: React.FC<{ path: string }> = ({ path }) => {
  const gltf = useGLTF(path); // Load the 3D model
  const ref = useRef<THREE.Group>(null); // Reference to the model

  // Animation variables
  let time = 0;

  // Animate the model: spin and move up/down with reduced height
  useFrame(() => {
    if (ref.current) {
      time += 0.005; // Increment time
      ref.current.rotation.y += 0.01; // Continuous spin
      ref.current.position.y = Math.sin(time) * 0.15; // Reduced vertical oscillation
    }
  });

  return <primitive ref={ref} object={gltf.scene} scale={[1.2, 1.2, 1.2]} />;
};

// Main Viewer Component
const InteractiveModel: React.FC = () => {
  return (
    <div style={{ height: '120px' ,width: '45%' , marginTop: '45px', marginRight: '10px'}}>
       <Canvas
        camera={{
          position: [2, 0, 3], // Move the camera closer to the model
          fov: 20, // Narrow field of view to make the model appear larger
        }}
        style={{ width: '100%', height: '100%' }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />

        {/* Animated Model */}
        <Model path="/blue_ufo.glb" />

        {/* Camera Controls */}
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default InteractiveModel;
