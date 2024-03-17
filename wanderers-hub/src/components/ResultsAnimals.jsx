import * as THREE from 'three';
import React, { useEffect, useRef } from "react";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ResultsAnimals = () => {
    const scene = new THREE.Scene();
    const modelRaccoon = useRef(null);
    const modelLoadedRaccoon = useRef(false);
    const modelCamel = useRef(null);
    const modelLoadedCamel = useRef(false);
    const modelBaboon = useRef(null);
    const modelLoadedBaboon = useRef(false);
    const modelPBear = useRef(null);
    const modelLoadedPBear = useRef(false);
  
      useEffect(() => {
          const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
          const renderer = new THREE.WebGLRenderer({
          canvas: document.querySelector('#results-bg'),
          });
          renderer.setPixelRatio(window.devicePixelRatio);
          renderer.setSize(window.innerWidth, window.innerHeight);
          const vw = window.innerWidth * 0.01;
          const vh = window.innerHeight * 0.01;
          camera.rotation.x = -Math.PI/vw
          camera.rotation.y = -Math.PI/vw

          camera.position.set(4 * vw, 4 * vh, 8 * vh); // // Adjust coefficients as needed
  
          const loader = new GLTFLoader();
          const controls = new OrbitControls(camera, renderer.domElement);
         //raccoon
          loader.load('/low_poly_raccoon.glb', gltf => {
            if (!modelLoadedRaccoon.current) {
              const raccoon = gltf.scene;
              raccoon.scale.set(8, 8, 8);
              raccoon.position.set(30, 15, 0);
              raccoon.rotation.y -= Math.PI/2
              scene.add(raccoon);
              modelRaccoon.current = raccoon;
              modelLoadedRaccoon.current = true;
            }
          });
          
          //camel
          loader.load('/low_poly_camel.glb', gltf => {
            if (!modelLoadedCamel.current) {
              const camel = gltf.scene;
              camel.scale.set(0.75, 0.75, 0.75);
              camel.position.set(60, 20, 5);
              camel.rotation.x += Math.PI/32
              camel.rotation.y -= Math.PI + 0.5
              camel.rotation.z -= Math.PI/32
              scene.add(camel);
              modelCamel.current = camel;
              modelLoadedCamel.current = true;
            }
          });

          //baboon
          loader.load('/low_poly_baboon.glb', gltf => {
            if (!modelLoadedBaboon.current) {
              const baboon = gltf.scene;
              baboon.scale.set(1.5, 1.5, 1.5);
              baboon.position.set(65, 0, 7.5);
              baboon.rotation.x -= Math.PI/64
              baboon.rotation.y += Math.PI/1.25
              baboon.rotation.z -= Math.PI/32
              scene.add(baboon);
              modelBaboon.current = baboon;
              modelLoadedBaboon.current = true;
            }
          });

          //polar bear
          loader.load('/low-poly_polarbear.glb', gltf => {
            if (!modelLoadedPBear.current) {
              const pbear = gltf.scene;
              pbear.scale.set(35, 35, 35);
              pbear.position.set(30, -17, -15);
              pbear.rotation.y -= Math.PI/2
              pbear.rotation.x -= Math.PI/16
              scene.add(pbear);
              modelPBear.current = pbear;
              modelLoadedPBear.current = true;

            }
          });

          const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light
          scene.add(ambientLight);
          const pointLight = new THREE.PointLight(0xffffff, 7500);
          const lightHelper = new THREE.PointLightHelper(pointLight);
          //const gridHelper = new THREE.GridHelper(200, 50);
          scene.add(pointLight, lightHelper);
          pointLight.position.set(50 , 50 , 30);
        
         // const axesHelper = new THREE.AxesHelper(10); // Length of each axis
          //scene.add(axesHelper);
          const bg = new THREE.TextureLoader().load('/transparentbg.png');
          scene.background = bg;
          function animate() {
            requestAnimationFrame(animate);
            //controls.update();
        
            const time = performance.now() / 1000; 
        
            const phaseRaccoon = 0;
            const phaseCamel = 0.5;
            const phaseBaboon = 0.75;
            const phasePBear = 1;
        
            const bounceHeight = 0.02; 
            const speed = 2; 
            const raccoonY = Math.sin(time * speed + phaseRaccoon) * bounceHeight;
            const camelY = Math.sin(time * speed + phaseCamel) * bounceHeight;
            const baboonY = Math.sin(time * speed + phaseBaboon) * bounceHeight;
            const pBearY = Math.sin(time * speed + phasePBear) * bounceHeight;
        
            if (modelRaccoon.current) {
                modelRaccoon.current.position.y = raccoonY +modelRaccoon.current.position.y;
            }
            if (modelCamel.current) {
                modelCamel.current.position.y = camelY +modelCamel.current.position.y;
            }
            if (modelBaboon.current) {
                modelBaboon.current.position.y = baboonY +modelBaboon.current.position.y;
            }
            if (modelPBear.current) {
                modelPBear.current.position.y = pBearY +modelPBear.current.position.y;
            }
        
            renderer.render(scene, camera);
        }
        
        
        
          animate();
  
          return () => {
          };
  
      }, []);
  
    return (
      <canvas id="results-bg" className="absolute inset-0 w-full h-full"></canvas>
    )
}

export default ResultsAnimals