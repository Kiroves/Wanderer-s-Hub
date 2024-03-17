import * as THREE from 'three';
import React, { useEffect, useRef } from "react";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const RaccoonLogin = () => {
  const scene = new THREE.Scene();
  const modelRef = useRef(null);
  const modelLoaded = useRef(false);
  const axis = new THREE.Vector3(1,5,1).normalize();
  var left = true;
    useEffect(() => {
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#login-bg'),
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        const vw = window.innerWidth * 0.01;
        const vh = window.innerHeight * 0.01;
        camera.rotation.x = -Math.PI/vw*1.5
        camera.rotation.z = 0
        camera.position.set(4 * vw, 3 * vh, 8 * vh); // Adjust coefficients as needed

        const loader = new GLTFLoader();
       // const controls = new OrbitControls(camera, renderer.domElement);
        loader.load('/low_poly_raccoon.glb', gltf => {
          if (!modelLoaded.current) {
            const raccoon = gltf.scene;
            raccoon.scale.set(4, 5, 5);
            raccoon.position.set(2, 15, 10);
            raccoon.rotateOnAxis(axis, -2);
            scene.add(raccoon);
            modelRef.current = raccoon;
            modelLoaded.current = true;
          }
        });

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light
        scene.add(ambientLight);
        const pointLight = new THREE.PointLight(0xffffff, 1000);
        //const lightHelper = new THREE.PointLightHelper(pointLight);
        //const gridHelper = new THREE.GridHelper(200, 50);
        scene.add(pointLight);
        pointLight.position.set(-1.5 * vw, 6 * vh, -1 * vh);

       // const axesHelper = new THREE.AxesHelper(10); // Length of each axis
        //scene.add(axesHelper);
        const bg = new THREE.TextureLoader().load('/transparentbg.png');
        scene.background = bg;
        function animate(){
            requestAnimationFrame(animate);
          //  controls.update()
           if (modelRef.current) {
            if(left < 200){
              modelRef.current.rotateOnAxis(axis, 0.005);
              left += 1;
            }
            else if(left < 400){
              modelRef.current.rotateOnAxis(axis, -0.005);
              left += 1;
            }
            else{
              left = 0;
            }
           }

            renderer.render(scene, camera);
        }
        animate();

        return () => {
        };

    }, []);


  return (
    <canvas id="login-bg" className="absolute inset-0 w-full h-full"></canvas>
  )
}

export default RaccoonLogin