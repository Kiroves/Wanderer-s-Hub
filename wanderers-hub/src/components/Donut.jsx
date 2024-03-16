import * as THREE from 'three';
import React, { useEffect } from "react";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

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

        const loader = new GLTFLoader();
        //const controls = new OrbitControls(camera, renderer.domElement);
        loader.load('/low_poly_raccoon.glb', gltf => {
            const model = gltf.scene;
            model.scale.set(5, 5, 5);
            model.position.set(-30, 10, -15);
            model.rotation.y = -Math.PI/1.5
            model.rotation.x = Math.PI/10
            scene.add(model);
        });

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light
        scene.add(ambientLight);

        const bg = new THREE.TextureLoader().load('/racbg.png');
        scene.background = bg;
        function animate(){
            requestAnimationFrame(animate);
            //controls.update()
            renderer.render(scene, camera);
        }
        animate();

        return () => {
        };

    }, []);


  return (
    <canvas id="bg" className="absolute inset-0 w-full h-full bg-transparent"></canvas>
  )
}

export default Donut