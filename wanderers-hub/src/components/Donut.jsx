import * as THREE from 'three';
import React, { useEffect } from "react";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Donut = () => {
    const scene = new THREE.Scene();

    useEffect(() => {
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#bg'),
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.position.setZ(30);

        const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
        const material = new THREE.MeshStandardMaterial({ color: 0xFF6347});
        const torus = new THREE.Mesh(geometry, material);
        scene.add(torus);

        const pointLight = new THREE.PointLight(0xffffff);
        pointLight.position.set(5,5,5);
        
        const ambientLight = new THREE.AmbientLight(0xffffff);
        scene.add(ambientLight)

        const controls = new OrbitControls(camera, renderer.domElement);

        function animate(){
            requestAnimationFrame(animate);
            torus.rotation.x += 0.01;
            torus.rotation.y += 0.005;
            torus.rotation.z += 0.01;
            controls.update()
            renderer.render(scene, camera);
        }
        animate();

        // Cleanup function for unmounting
        return () => {
        scene.remove(torus);
        // Clean up other resources as needed
        };

    }, []);


  return (
    <canvas id="bg" className="absolute inset-0 w-full h-full"></canvas>
  )
}

export default Donut