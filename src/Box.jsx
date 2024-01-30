// Add these imports
import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Box(props) {
  // The ref will be used to get a reference to the mesh
  const ref = useRef();
  // The hovered and clicked states will be used
  // to modify the behaviour of the cube when either hovered
  // or clicked
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  //useFrame is react-three-fiber's animation framework
  // it abstracts the HTML Canvas requestAnimationFrame
  useFrame((state, delta) => {
    //if clicked begin animation
    if (clicked) {
      ref.current.rotation.y += delta;
      ref.current.rotation.x += delta;
      //Move up and down --> slowed down by a factor of 2
      ref.current.position.y = Math.sin(state.clock.getElapsedTime()) / 2;
    }
  });
  return (
    <mesh
      //This is the reference
      ref={ref}
      {...props}
      // The scale of the cube will increase or decrease based on
      // Weather it is hovered or no
      scale={hovered ? [1.5, 1.5, 1.5] : [1.0, 1.0, 1.0]}
      // It toggles the hovered state
      onPointerOver={() => setHovered(!hovered)}
      onPointerOut={() => setHovered(!hovered)}
      //When the cube is clicked, the animation begins
      onClick={() => setClicked(!clicked)}
    >
      <boxGeometry args={[1, 1, 1]} />
      {/* Modified basic material to add a wireframe -
          Wireframe allows you to better visualize the animation
      */}
      <meshBasicMaterial color={0xff0000} wireframe />
    </mesh>
  );
}
