import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const ModeloDado = ({ rolando }) => {
  const { scene } = useGLTF("/d20.glb");
  const ref = useRef();

  useFrame(() => {
    if (rolando) {
      ref.current.rotation.x += 0.08;
      ref.current.rotation.y += 0.12;
      ref.current.rotation.z += 0.05;
    } else {
      ref.current.rotation.y += 0.005;
    }
  });

  return <primitive ref={ref} object={scene} scale={0.5} />;
};

const Dado = ({ rolando }) => {
  return (
    <div className="w-64 h-64 lg:w-96 lg:h-96 cursor-pointer">
      <Canvas camera={{ position: [0, 0, 80] }} gl={{ alpha: true }} style={{ background: "transparent" }} onCreated={({ scene }) => { scene.background = null; }} >
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <pointLight position={[-5, -5, -5]} intensity={1} color="#a855f7" />
        <ModeloDado rolando={rolando} />
      </Canvas>
    </div>
  );
};

export default Dado;
