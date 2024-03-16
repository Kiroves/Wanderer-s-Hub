import * as THREE from 'three';
import React, { useEffect, useRef } from "react";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const RaccoonLogin = () => {
  const scene = new THREE.Scene();
  const modelRef = useRef(null);
  const modelLoaded = useRef(false);
  const axis = new THREE.Vector3(1, 5, 1).normalize();
  const camera = useRef(null);
  const renderer = useRef(null);
  var left = true;

  useEffect(() => {
    const vw = window.innerWidth * 0.01;
    const vh = window.innerHeight * 0.01;

    // Create camera
    camera.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.current.rotation.x = -Math.PI / vw * 1.5;
    camera.current.rotation.z = 0;
    camera.current.position.set(4 * vw, 3 * vh, 8 * vh); // Adjust coefficients as needed

    // Create renderer
    renderer.current = new THREE.WebGLRenderer({
      canvas: document.querySelector('#login-bg'),
    });
    renderer.current.setPixelRatio(window.devicePixelRatio);
    renderer.current.setSize(window.innerWidth, window.innerHeight);

    const loader = new GLTFLoader();
    loader.load('/low_poly_raccoon.glb', gltf => {
      if (!modelLoaded.current) {
        const raccoon = gltf.scene;
        raccoon.scale.set(5, 5, 5);
        raccoon.rotateOnAxis(axis, -2);
        scene.add(raccoon);
        modelRef.current = raccoon;
        modelLoaded.current = true;

        // Adjust camera position based on raccoon's position
        const boundingBox = new THREE.Box3().setFromObject(raccoon);
        const center = boundingBox.getCenter(new THREE.Vector3());
        const size = boundingBox.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const fov = camera.current.fov * (Math.PI / 180);
        let cameraZ = Math.abs((maxDim / 4) * Math.tan(fov * 2));
        camera.current.position.set(center.x + 10, center.y, center.z + cameraZ * 2); // Adjust z-coordinate here
      }
    });

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1000);
    scene.add(pointLight);
    pointLight.position.set(-3 * vw, 3 * vh, -4 * vh);

    const bg = new THREE.TextureLoader().load('/racbg.png');
    scene.background = bg;

    function handleResize() {
      const vw = window.innerWidth * 0.01;
      const vh = window.innerHeight * 0.01;
      camera.current.aspect = window.innerWidth / window.innerHeight;
      camera.current.updateProjectionMatrix();
      renderer.current.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('resize', handleResize);

    function animate() {
      requestAnimationFrame(animate);
      if (modelRef.current) {
        if (left < 200) {
          modelRef.current.rotateOnAxis(axis, 0.005);
          left += 1;
        }
        else if (left < 400) {
          modelRef.current.rotateOnAxis(axis, -0.005);
          left += 1;
        }
        else {
          left = 0;
        }
      }
      renderer.current.render(scene, camera.current);
    }
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  return (
    <canvas id="login-bg" className="absolute inset-0 w-full h-full"></canvas>
  )
}

export default RaccoonLogin;
