import * as THREE from 'three';
import React, { useEffect, useRef } from "react";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Donut = () => {
  const scene = new THREE.Scene();
  const modelRef = useRef(null);
  const modelLoaded = useRef(false);
  const axis = new THREE.Vector3(1,5,1).normalize();
  var left = true;
    useEffect(() => {
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#bg'),
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.rotation.x = -Math.PI/6
        camera.rotation.z = -Math.PI/12
        camera.position.setX(30);
        camera.position.setY(10);
        camera.position.setZ(55);

        const loader = new GLTFLoader();
       // const controls = new OrbitControls(camera, renderer.domElement);
        loader.load('/low_poly_raccoon.glb', gltf => {
          if (!modelLoaded.current) {
            const raccoon = gltf.scene;
            raccoon.scale.set(5, 5, 5);
            raccoon.position.set(0, 0, 0);
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
        pointLight.position.set(-35, 20, -1);

       // const axesHelper = new THREE.AxesHelper(10); // Length of each axis
        //scene.add(axesHelper);
        const bg = new THREE.TextureLoader().load('/racbg.png');
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
    <canvas id="bg" className="absolute inset-0 w-full h-full bg-transparent"></canvas>
  )
}

export default Donut