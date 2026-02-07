import {Canvas, useFrame} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import { useRef } from 'react';

const RotatingCube = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1,1,1]} />
      <meshLambertMaterial color={'#468585'} emissive={'#468585'} />
    </mesh>
  )
};


const App = () => {
  
  return (<>
    {/* <div> hello world</div> */}
    {/* @Canvas only renders the three js elements and not any inline elmeents like text */}
    <Canvas style={ {width:"100vw", height:"100vh", display: 'flex', justifyContent: 'center', alignItems: 'center'} }>

      {/* Camera -> 
      new Three.OrbitControls(camera, renderer.domElement)
       */}
      
      <OrbitControls enableZoom enablePan enableRotate />

      {/* Light */}
      <directionalLight position={[1,1,1]} intensity={10} color={0x9CDB46} />

      <color attach='background' args={['#F0F0F0']} />
      
      <RotatingCube />
    </Canvas>
  </>)

};

export default App;