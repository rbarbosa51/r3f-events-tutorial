import { Canvas } from "@react-three/fiber"
function App() {
  return (
    <div className='App'>
      {/* Create the Canvas with a Camera at 0,0,3 */}
      <Canvas camera={[0,0,3]}>

      </Canvas>
    </div>
  )
}
export default App
