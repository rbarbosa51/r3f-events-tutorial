export default function Sphere(props) {
  return (
    <mesh {...props}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshBasicMaterial color={0x00ff00} />
    </mesh>
  );
}
