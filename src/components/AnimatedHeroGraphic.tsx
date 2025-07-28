import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const WireframeShape = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x += 0.003;
    }
    if (sphereRef.current) {
      sphereRef.current.rotation.y -= 0.004;
      sphereRef.current.rotation.z += 0.002;
    }
  });

  return (
    <group>
      {/* Main wireframe torus */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <torusGeometry args={[1.2, 0.4, 16, 32]} />
        <meshBasicMaterial 
          color="#0D6EFD" 
          wireframe={true} 
          transparent={true}
          opacity={0.8}
        />
      </mesh>

      {/* Inner wireframe sphere */}
      <mesh ref={sphereRef} position={[0, 0, 0]}>
        <sphereGeometry args={[0.6, 16, 16]} />
        <meshBasicMaterial 
          color="#ffffff" 
          wireframe={true} 
          transparent={true}
          opacity={0.6}
        />
      </mesh>

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <Sphere
          key={i}
          args={[0.02]}
          position={[
            Math.sin(i * 0.5) * 2,
            Math.cos(i * 0.7) * 1.5,
            Math.sin(i * 0.3) * 1.5
          ]}
        >
          <meshBasicMaterial 
            color="#0D6EFD" 
            transparent={true}
            opacity={0.7}
          />
        </Sphere>
      ))}
    </group>
  );
};

const DataStreams = () => {
  const streamRefs = useRef<THREE.Group[]>([]);

  useFrame((state) => {
    streamRefs.current.forEach((stream, i) => {
      if (stream) {
        stream.rotation.y += 0.002 * (i + 1);
        stream.position.y = Math.sin(state.clock.elapsedTime + i) * 0.2;
      }
    });
  });

  return (
    <group>
      {Array.from({ length: 6 }).map((_, i) => (
        <group 
          key={i}
          ref={(el) => el && (streamRefs.current[i] = el)}
          position={[
            Math.cos((i / 6) * Math.PI * 2) * 1.8,
            0,
            Math.sin((i / 6) * Math.PI * 2) * 1.8
          ]}
          rotation={[0, (i / 6) * Math.PI * 2, 0]}
        >
          <mesh>
            <cylinderGeometry args={[0.01, 0.01, 0.8]} />
            <meshBasicMaterial 
              color="#ffffff" 
              transparent={true}
              opacity={0.4}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
};

export const AnimatedHeroGraphic = () => {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[2, 2, 2]} intensity={0.8} color="#0D6EFD" />
        <pointLight position={[-2, -2, -2]} intensity={0.5} color="#ffffff" />
        
        <WireframeShape />
        <DataStreams />
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};