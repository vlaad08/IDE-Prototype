import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import Cactus from './characters/Cactus';
import Jasmin from './characters/Jasmin';

const ThreeScene = ({ currentIndex }) => {
  const mountRef = useRef(null);
  const characterRefs = useRef([]);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 4.5;
    camera.position.y = 0;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 0.8);
    mainLight.position.set(5, 10, 7);
    scene.add(mainLight);

    const characters = [
      Cactus(),
      Jasmin(),
      // Add other character components like Fern(), SnakePlant() here later
    ];

    characterRefs.current = characters;

    characters.forEach((char, i) => {
      char.visible = i === currentIndex;
      scene.add(char);
    });

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (
        renderer &&
        renderer.domElement &&
        mountRef.current?.contains(renderer.domElement)
      ) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  useEffect(() => {
    characterRefs.current.forEach((char, i) => {
      char.visible = i === currentIndex;
    });
  }, [currentIndex]);

  return <div ref={mountRef} />;
};

export default ThreeScene;
