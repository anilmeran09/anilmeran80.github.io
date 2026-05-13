import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { useRef, useEffect, Suspense } from 'react'

/* ── Camera parallax driven by mouse ── */
function CameraRig() {
  const { camera } = useThree()
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 3.5
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useFrame(() => {
    camera.position.x += (mouse.current.x - camera.position.x) * 0.035
    camera.position.y += (mouse.current.y - camera.position.y) * 0.035
    camera.lookAt(0, 0, 0)
  })

  return null
}

/* ── Hero planet: glowing sphere with three orbiting rings ── */
function Planet() {
  const group = useRef()
  const r1 = useRef()
  const r2 = useRef()
  const r3 = useRef()

  useFrame((s) => {
    const t = s.clock.getElapsedTime()
    group.current.rotation.y = t * 0.12
    r1.current.rotation.z = t * 0.45
    r2.current.rotation.z = -t * 0.28
    r3.current.rotation.x = t * 0.22
  })

  return (
    <group ref={group} position={[3.8, 0.3, 0]}>
      {/* Solid core */}
      <mesh>
        <sphereGeometry args={[1.3, 64, 64]} />
        <meshStandardMaterial color="#0d1244" emissive="#915eff" emissiveIntensity={0.45} roughness={0.7} metalness={0.3} />
      </mesh>

      {/* Wireframe shell */}
      <mesh>
        <sphereGeometry args={[1.37, 22, 22]} />
        <meshBasicMaterial color="#915eff" wireframe transparent opacity={0.16} />
      </mesh>

      {/* Ring 1 – purple */}
      <mesh ref={r1} rotation={[Math.PI / 2.3, 0, 0]}>
        <torusGeometry args={[2.05, 0.026, 16, 128]} />
        <meshStandardMaterial color="#915eff" emissive="#915eff" emissiveIntensity={4} transparent opacity={0.9} />
      </mesh>

      {/* Ring 2 – cyan */}
      <mesh ref={r2} rotation={[Math.PI / 3, 0.4, 0]}>
        <torusGeometry args={[2.55, 0.018, 16, 128]} />
        <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={4} transparent opacity={0.8} />
      </mesh>

      {/* Ring 3 – coral */}
      <mesh ref={r3} rotation={[0.35, 0, 0.6]}>
        <torusGeometry args={[2.9, 0.013, 16, 128]} />
        <meshStandardMaterial color="#ff6b6b" emissive="#ff6b6b" emissiveIntensity={3} transparent opacity={0.65} />
      </mesh>
    </group>
  )
}

/* ── Scattered floating wireframe polyhedra ── */
const SHAPES = [
  { pos: [-7, 2.5, -4], clr: '#915eff', s: 0.75, sp: 0.8 },
  { pos: [7.5, -2, -5], clr: '#00d4ff', s: 0.55, sp: 1.1 },
  { pos: [-4.5, -3.5, -2.5], clr: '#ff6b6b', s: 0.45, sp: 0.95 },
  { pos: [5.5, 4.5, -7], clr: '#915eff', s: 0.85, sp: 0.65 },
  { pos: [-9, 0.5, -9], clr: '#00d4ff', s: 1.0, sp: 0.7 },
  { pos: [2.5, -5, -4], clr: '#915eff', s: 0.6, sp: 1.05 },
  { pos: [-3, 5.5, -6], clr: '#ff6b6b', s: 0.5, sp: 0.85 },
  { pos: [9.5, 2, -9], clr: '#00d4ff', s: 0.9, sp: 0.55 },
  { pos: [-6, -4.5, -7], clr: '#915eff', s: 0.65, sp: 0.75 },
  { pos: [6, 6, -8], clr: '#ff6b6b', s: 0.7, sp: 0.9 },
]

function FloatShape({ pos, clr, s, sp }) {
  const ref = useRef()
  const off = useRef(Math.random() * Math.PI * 2)

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * sp
    ref.current.rotation.x += 0.005
    ref.current.rotation.y += 0.007
    ref.current.position.y = pos[1] + Math.sin(t + off.current) * 0.45
  })

  return (
    <mesh ref={ref} position={pos} scale={s}>
      <icosahedronGeometry args={[1, 0]} />
      <meshBasicMaterial color={clr} wireframe transparent opacity={0.11} />
    </mesh>
  )
}

/* ── Small orbiting particles ring around hero ── */
function ParticleRing() {
  const ref = useRef()
  useFrame((s) => { ref.current.rotation.z = s.clock.getElapsedTime() * 0.08 })

  const count = 80
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2
    const r = 3.4 + (Math.random() - 0.5) * 0.4
    positions[i * 3] = Math.cos(angle) * r + 3.8
    positions[i * 3 + 1] = (Math.random() - 0.5) * 0.3 + 0.3
    positions[i * 3 + 2] = Math.sin(angle) * r * 0.3
  }

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#915eff" size={0.04} transparent opacity={0.7} sizeAttenuation />
    </points>
  )
}

/* ── Main Scene ── */
function Scene() {
  return (
    <>
      <CameraRig />

      <ambientLight intensity={0.06} />
      <pointLight position={[-6, 6, 6]} color="#915eff" intensity={12} distance={25} />
      <pointLight position={[6, -6, 6]} color="#00d4ff" intensity={12} distance={25} />
      <pointLight position={[0, 6, -6]} color="#ff6b6b" intensity={5} distance={18} />

      <Stars radius={110} depth={65} count={5500} factor={5.5} saturation={0.2} fade speed={1.2} />

      <Planet />
      <ParticleRing />

      {SHAPES.map((s, i) => <FloatShape key={i} {...s} />)}
    </>
  )
}

/* ── Exported Canvas ── */
export default function ThreeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      gl={{ antialias: true, alpha: false }}
      dpr={[1, 2]}
      style={{ background: '#050816' }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  )
}
