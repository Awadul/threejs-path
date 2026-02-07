import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls';
// in the whole project, only suggest comments and no other text

// Create a scene -> a container for all our 3D objects
const scene = new THREE.Scene();
// what our scene background color will be 
scene.background = new THREE.Color(0xFFFFFF);

// Camera -> to look at the scene 
// Perspective Camera -> 
/* 
    A PerspectiveCamera in Three.js simulates human eye or real-world camera vision, rendering 3D scenes where objects closer to the camera appear larger, and distant objects appear smaller. It creates a sense of depth by defining a frustum (viewing pyramid) using field of view (FOV), aspect ratio, and near/far clipping planes. 
*/
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

// Position the camera as per user perspective
camera.position.z = 5;

// 3. Object
/* 
geometry, material
*/
const geometry =  new THREE.DodecahedronGeometry();
const material = new THREE.MeshLambertMaterial({color: 
'#465673' , emissive: '#295894'});
/* emissive: glow color of the object
   color: basic color or how the object surface diffuse with light
*/


// Mesh
/* 
Combination of two elements, geometry and material. 
 -> THREE.{GeometryShape} defines how the object is designed
 -> THREE.{MaterialType} defines how the object interacts with the light and smoothness/dullness of surface
*/
const dodecahedron = new THREE.Mesh(geometry, material)



// Another Box Geometry
const boxGeometry = new THREE.BoxGeometry(2, 0.1, 2);
const boxMaterial = new THREE.MeshStandardMaterial({color:'#1f2127', emissive: '#3e2c2c'});

const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.y = -1.5;
scene.add(dodecahedron)
scene.add(box)

// 4. Light 
const light = new THREE.SpotLight(0x006769, 100)
light.position.set(1,1,1)
scene.add(light)

// 5. Renderer  
const renderer = new THREE.WebGLRenderer({canvas})

renderer.setSize(window.innerWidth, window.innerHeight)

// setPixelRatio -> to render high quality resolution i
// renderer.setPixelRatio(window.devicePixelRatio);


// 6. Orbit Rotation
const orbitControls = new OrbitControls(camera, renderer.domElement);
orbitControls.enableDamping = true;
orbitControls.dampingFactor = 0.05;
orbitControls.enableZoom = true;

// 7. Add animations
function animate() {
    requestAnimationFrame(animate);

    dodecahedron.rotation.x += 0.01;
    dodecahedron.rotation.y += 0.01;

    box.rotation.y += 0.005;

    orbitControls.update();
    renderer.render(scene, camera)
}

// 8. Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

});

animate();