import { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { AsciiRenderer } from '@react-three/drei'
import { lerp } from 'three/src/math/MathUtils'

export default function Model() {
  return (
    <Canvas className="canvas">
      <color attach="background" args={['black']} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Torusknot />
      <AsciiRenderer fgColor="white" bgColor="transparent"  resolution={0.20}/>
    </Canvas>
  )
}

function Torusknot(props) {
  const ref = useRef()
  const viewport = useThree((state) => state.viewport)
  useFrame((state, delta) => {
     ref.current.rotation.x += delta / 2
    // ref.current.rotation.x = lerp(ref.current.rotation.x, state.mouse.x + delta / 2 , delta * 2)
    ref.current.rotation.y = lerp(ref.current.rotation.y, state.mouse.x + delta / 2, delta * 2)
    
  })
  return (
    <mesh scale={Math.min(viewport.width, viewport.height) / 5} {...props} ref={ref}>
      <torusKnotGeometry args={[1, 0.2, 128, 32]} />
      <meshStandardMaterial color="red" />
    </mesh>
  )
}
