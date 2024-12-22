// Importing React and the Three.js library for rendering a 3D starry background
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const StarCanvas = () => {
  // Ref for accessing the canvas element
  const canvasRef = useRef(null);

  useEffect(() => {
    // Renderer for rendering the 3D scene
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Creating the scene and camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Geometry and material for stars
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({ color: 0x00ffff });

    // Generating star positions
    const starVertices = [];
    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = -Math.random() * 2000;
      starVertices.push(x, y, z);
    }
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Animation loop for rendering the stars
    const animate = () => {
      requestAnimationFrame(animate);
      stars.rotation.y += 0.0005; // Slight rotation for visual effect
      renderer.render(scene, camera);
    };
    animate();

    // Handling window resizing
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onWindowResize);
    return () => window.removeEventListener('resize', onWindowResize); // Cleanup on unmount
  }, []);

  return (
    // Canvas element for Three.js rendering
    <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }} />
  );
};

export default StarCanvas;
