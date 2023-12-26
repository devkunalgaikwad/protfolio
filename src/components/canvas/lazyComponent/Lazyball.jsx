import React from 'react';
import { Float, Decal, useTexture } from '@react-three/drei';

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color={'#fff8eb'} polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal map={decal} scale={1} position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} flatShading />
      </mesh>
    </Float>
  );
};

export default Ball;
