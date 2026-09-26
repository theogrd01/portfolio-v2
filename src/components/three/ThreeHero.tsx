"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Mesh, Group, Points } from "three";
import {
  IcosahedronGeometry,
  MeshStandardMaterial,
  SphereGeometry,
  RingGeometry,
  MeshBasicMaterial,
  DoubleSide,
  Group as ThreeGroup,
} from "three";

const ACCENT = "#d34e24";
const GLOW = "#e8b53a";
const INK = "#191a20";
const PAPER = "#ecebe4";

function Planet() {
  const group = useRef<ThreeGroup>(null);
  const { pointer } = useThree();

  const geo = useMemo(() => new IcosahedronGeometry(1, 1), []);
  const mat = useMemo(
    () =>
      new MeshStandardMaterial({
        color: PAPER,
        flatShading: true,
        roughness: 0.55,
        metalness: 0.05,
      }),
    []
  );

  const ringGeo = useMemo(() => new RingGeometry(1.55, 1.85, 64), []);
  const ringMat = useMemo(
    () =>
      new MeshBasicMaterial({
        color: ACCENT,
        side: DoubleSide,
        transparent: true,
        opacity: 0.9,
      }),
    []
  );

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    g.rotation.y += delta * 0.18;
    // subtle tilt toward the cursor
    g.rotation.x += (pointer.y * 0.25 - g.rotation.x) * 0.05;
    g.rotation.z += (pointer.x * 0.15 - g.rotation.z) * 0.05;
  });

  return (
    <group ref={group} rotation={[0.42, 0, -0.12]}>
      <mesh geometry={geo} material={mat} />
      <mesh geometry={ringGeo} material={ringMat} rotation={[Math.PI / 2.15, 0, 0]} />
    </group>
  );
}

function Moons({ moonA, moonB }: { moonA: string; moonB: string }) {
  const group = useRef<ThreeGroup>(null);
  const moonGeo = useMemo(() => new IcosahedronGeometry(0.12, 0), []);
  const moonMatA = useMemo(
    () => new MeshStandardMaterial({ color: moonA, flatShading: true, roughness: 0.4 }),
    [moonA]
  );
  const moonMatB = useMemo(
    () => new MeshStandardMaterial({ color: moonB, flatShading: true, roughness: 0.6 }),
    [moonB]
  );

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.32;
  });

  return (
    <group ref={group} rotation={[0.3, 0, 0.2]}>
      <mesh geometry={moonGeo} material={moonMatA} position={[2.35, 0.5, 0.4]} />
      <mesh geometry={moonGeo} material={moonMatB} position={[-2.1, -0.7, -0.5]} scale={0.8} />
    </group>
  );
}

function Dust() {
  const ref = useRef<Points>(null);
  const positions = useMemo(() => {
    const n = 220;
    const arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 9;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 6;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.03;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#9a9aa0" sizeAttenuation transparent opacity={0.8} />
    </points>
  );
}

function ThemeBridge({ onReady }: { onReady: (v: { moonA: string; moonB: string }) => void }) {
  useEffect(() => {
    const s = getComputedStyle(document.documentElement);
    onReady({
      moonA: s.getPropertyValue("--color-glow").trim() || "#e8b53a",
      moonB: s.getPropertyValue("--color-ink").trim() || "#191a20",
    });
  }, [onReady]);
  return null;
}

function SceneContent({ themeColors }: { themeColors: { moonA: string; moonB: string } }) {
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 5, 3]} intensity={1.15} color="#fff6e8" />
      <directionalLight position={[-5, -2, -3]} intensity={0.5} color={ACCENT} />
      <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.7}>
        <Planet />
      </Float>
      <Moons moonA={themeColors.moonA} moonB={themeColors.moonB} />
      <Dust />
      <Stars radius={55} depth={30} count={1100} factor={3.2} saturation={0} fade speed={0.6} />
    </>
  );
}

export function ThreeHero() {
  const [enabled, setEnabled] = useState(false);
  const [themeColors, setThemeColors] = useState({ moonA: GLOW, moonB: INK });
  const canvasWrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof WebGL2RenderingContext === "undefined") return;
    setEnabled(true);
  }, []);

  if (!enabled) {
    return (
      <div
        ref={canvasWrap}
        className="relative flex h-[420px] items-center justify-center sm:h-[520px]"
        aria-hidden="true"
      >
        <div className="h-40 w-40 rotate-45 border-2 border-accent" />
        <div className="absolute h-64 w-64 rounded-full border border-line" />
        <div className="absolute h-96 w-96 rounded-full border border-line/60" />
      </div>
    );
  }

  return (
    <div className="relative h-[420px] sm:h-[520px]" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0.4, 5.2], fov: 42 }}
        dpr={[1, 1.8]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ThemeBridge onReady={setThemeColors} />
        <SceneContent themeColors={themeColors} />
      </Canvas>
    </div>
  );
}
