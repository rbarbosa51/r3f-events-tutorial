import { Canvas } from "@react-three/fiber";
import Box from "./Box";
import Sphere from "./Sphere";
function App() {
  return (
    <div className="App">
      <Canvas camera={[0, 0, 3]}>
        <Box position={[-2, 0, 0]} />
        <Sphere position={[2, 0, 0]} />
      </Canvas>
    </div>
  );
}
export default App;
