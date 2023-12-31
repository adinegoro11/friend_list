import * as THREE from 'three';

import TWEEN from 'three/addons/libs/tween.module.js';
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';

const table = [
    'Gita', '32', 'F', 1, 1,
    'Anggi', '28', 'F', 18, 1,
    'Bagus', '25', 'M', 1, 2,
    'Dini', '40', 'F', 2, 2,
    'Andi', '25', 'M', 13, 2,
    'Cinta', '10', 'F', 14, 2,
    'Narji', '24', 'M', 15, 2,
    'Onad', '43', 'M', 16, 2,
    'Fitri', '21', 'F', 17, 2,
    'Nindi', '38', 'F', 18, 2,
    'Nada', '27', 'F', 1, 3,
    'Messi', '36', 'M', 2, 3,
    'Adul', '45', 'M', 13, 3,
    'Sinta', '30', 'F', 14, 3,
    'Parto', '50', 'F', 15, 3,
    'Sinta', '27', 'F', 16, 3,
    'Clara', '14', 'F', 17, 3,
    'Ares', '10', 'M', 18, 3,
    'Kiky', '38', 'F', 1, 4,
    'Carla', '20', 'F', 2, 4,
    'Sony', '33', 'M', 3, 4,
    'Tina', '25', 'F', 4, 4,
    'Vina', '47', 'F', 5, 4,
    'Novan', '34', 'F', 6, 4,
    'Munir', '23', 'F', 7, 4,
    'Febri', '37', 'F', 8, 4,
    'Indri', '24', 'F', 9, 4,
    'Indra', '25', 'M', 10, 4,
    'Adam', '31', 'M', 11, 4,
    'Idris', '21', 'M', 12, 4,
    'Yunus', '45', 'M', 13, 4,
    'Yahya', '32', 'M', 14, 4,
    'Asti', '45', 'F', 15, 4,
    'Wati', '50', 'F', 16, 4,
    'Iwan', '65', 'M', 17, 4,
    'Sri', '63', 'F', 18, 4,
    'Nur', '66', 'F', 1, 5,
    'Eni', '44', 'F', 2, 5,
    'Yusuf', '33', 'M', 3, 5,
    'Zein', '22', 'M', 4, 5,
    'Nuri', '37', 'M', 5, 5,
    'Mail', '41', 'M', 6, 5,
    'Tuti', '42', 'F', 7, 5,
    'Rudi', '55', 'M', 8, 5,
    'Ratna', '34', 'F', 9, 5,
    'Ranti', '45', 'F', 10, 5,
    'Agus', '65', 'M', 11, 5,
    'Septi', '22', 'F', 12, 5,
    'Intan', '21', 'F', 13, 5,
    'Wendi', '36', 'M', 14, 5,
    'Sudin', '58', 'M', 15, 5,
    'Ari', '56', 'M', 16, 5,
    'Rian', '32', 'M', 17, 5,
    'Mita', '37', 'F', 18, 5,
    'Winda', '54', 'F', 1, 6,
    'Bahar', '55', 'M', 2, 6,
    'Latif', '43', 'M', 4, 9,
    'Gus', '31', 'M', 5, 9,
    'Ipin', '39', 'M', 6, 9,
    'Rendy', '30', 'M', 7, 9,
    'Rinda', '31', 'F', 8, 9,
    'Neneng', '22', 'F', 9, 9,
    'Esti', '21', 'F', 10, 9,
    'Gayuh', '45', 'M', 11, 9,
    'Bayu', '66', 'M', 12, 9,
    'Deni', '44', 'M', 13, 9,
    'Husni', '32', 'M', 14, 9,
    'Erwin', '42', 'M', 15, 9,
    'Mika', '34', 'F', 16, 9,
    'Agnes', '52', 'F', 17, 9,
    'Disa', '32', 'F', 18, 9,
    'Nurul', '32', 'F', 4, 6,
    'Ani', '43', 'F', 5, 6,
    'Putri', '43', 'F', 6, 6,
    'Ratih', '32', 'F', 7, 6,
    'Oslo', '33', 'F', 8, 6,
    'Inara', '44', 'F', 9, 6,
    'Putra', '26', 'F', 10, 6,
    'Aufa', '43', 'F', 11, 6,
    'Wulan', '21', 'F', 12, 6,
    'Tiara', '28', 'F', 13, 6,
    'Firman', '42', 'F', 14, 6,
    'Yuni', '24', 'F', 15, 6,
    'Santi', '45', 'F', 16, 6,
    'Andri', '30', 'M', 17, 6,
    'Rindi', '35', 'F', 18, 6,
    'Farah', '27', 'F', 1, 7,
    'Randi', '32', 'F', 2, 7,
    'Astri', '52', 'F', 4, 10,
    'Siska', '28', 'F', 5, 10,
    'Ahmad', '14', 'M', 6, 10,
    'Usep', '42', 'M', 7, 10,
    'Aji', '54', 'M', 8, 10,
    'Puan', '55', 'F', 9, 10,
    'Amin', '43', 'M', 10, 10,
    'Mega', '24', 'F', 11, 10,
    'Susi', '21', 'F', 12, 10,
    'Teguh', '32', 'M', 13, 10,
    'Sendy', '33', 'M', 14, 10,
    'Fahmi', '33', 'M', 15, 10,
    'Husen', '36', 'M', 16, 10,
    'Nova', '23', 'F', 17, 10,
    'Lisna', '35', 'F', 18, 10,
    'Raden', '44', 'M', 4, 7,
    'Sari', '55', 'F', 5, 7,
    'Ida', '44', 'F', 6, 7,
    'Doni', '32', 'M', 7, 7,
    'Rizki', '54', 'M', 8, 7,
    'Raziq', '32', 'M', 9, 7,
    'Dini', '43', 'F', 10, 7,
    'Alba', '21', 'M', 11, 7,
    'Vini', '54', 'F', 12, 7,
    'Abror', '32', 'M', 13, 7,
    'Dian', '27', 'F', 14, 7,
    'Sulis', '58', 'F', 15, 7,
    'Listi', '47', 'F', 16, 7,
    'Aswin', '44', 'M', 17, 7,
    'Tian', '32', 'M', 18, 7
];

let camera, scene, renderer;
let controls;

const objects = [];
const targets = { table: [], sphere: [], helix: [], grid: [], cone: [] };

init();
animate();

function init() {

    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 3000;

    scene = new THREE.Scene();

    // table
    for (let i = 0; i < table.length; i += 5) {

        const element = document.createElement('div');
        element.className = 'element';

        const gender = i + 2;
        if (table[gender] == 'F') {
            element.style.backgroundColor = 'rgba(255,20,147,' + (Math.random() * 0.5 + 0.25) + ')';
        } else {
            element.style.backgroundColor = 'rgba(0,0,255,' + (Math.random() * 0.5 + 0.25) + ')';
        }

        const number = document.createElement('div');
        number.className = 'number';
        number.textContent = (i / 5) + 1;
        element.appendChild(number);

        const symbol = document.createElement('div');
        symbol.className = 'symbol';
        symbol.textContent = table[i];
        element.appendChild(symbol);

        const details = document.createElement('div');
        details.className = 'details';
        details.innerHTML = table[i + 1] + '<br>' + table[i + 2];
        element.appendChild(details);

        const objectCSS = new CSS3DObject(element);
        objectCSS.position.x = Math.random() * 4000 - 2000;
        objectCSS.position.y = Math.random() * 4000 - 2000;
        objectCSS.position.z = Math.random() * 4000 - 2000;
        scene.add(objectCSS);

        objects.push(objectCSS);

        //

        const object = new THREE.Object3D();
        object.position.x = (table[i + 3] * 140) - 1330;
        object.position.y = - (table[i + 4] * 180) + 990;

        targets.table.push(object);

    }

    // sphere
    const vector = new THREE.Vector3();

    for (let i = 0, l = objects.length; i < l; i++) {

        const phi = Math.acos(- 1 + (2 * i) / l);
        const theta = Math.sqrt(l * Math.PI) * phi;

        const object = new THREE.Object3D();

        object.position.setFromSphericalCoords(800, phi, theta);

        vector.copy(object.position).multiplyScalar(2);

        object.lookAt(vector);

        targets.sphere.push(object);

    }

    // helix
    for (let i = 0, l = objects.length; i < l; i++) {

        const theta = i * 0.175 + Math.PI;
        const y = - (i * 8) + 450;

        const object = new THREE.Object3D();

        object.position.setFromCylindricalCoords(900, theta, y);

        vector.x = object.position.x * 2;
        vector.y = object.position.y;
        vector.z = object.position.z * 2;

        object.lookAt(vector);
        targets.helix.push(object);

    }

    // cone
    for (let i = 0, l = objects.length; i < l; i++) {
        const theta = i * 0.5 + Math.PI;
        const y = - (i * 8) + 450;
        const turunan = (3 * i) + 100;

        const object = new THREE.Object3D();
        object.position.setFromCylindricalCoords(turunan, theta, y);

        vector.x = object.position.x * 10;
        vector.y = object.position.y;
        vector.z = object.position.z * 10;

        object.lookAt(vector);
        targets.cone.push(object);
    }

    // grid
    for (let i = 0; i < objects.length; i++) {
        const object = new THREE.Object3D();
        object.position.x = ((i % 5) * 400) - 800;
        object.position.y = (- (Math.floor(i / 5) % 5) * 400) + 800;
        object.position.z = (Math.floor(i / 25)) * 1000 - 2000;
        targets.grid.push(object);
    }

    //

    renderer = new CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('container').appendChild(renderer.domElement);

    //

    controls = new TrackballControls(camera, renderer.domElement);
    controls.minDistance = 500;
    controls.maxDistance = 6000;
    controls.addEventListener('change', render);

    const buttonTable = document.getElementById('table');
    buttonTable.addEventListener('click', function () {
        transform(targets.table, 2000);
    });

    const buttonSphere = document.getElementById('sphere');
    buttonSphere.addEventListener('click', function () {
        transform(targets.sphere, 2000);
    });

    const buttonHelix = document.getElementById('helix');
    buttonHelix.addEventListener('click', function () {
        transform(targets.helix, 2000);
    });

    const buttonGrid = document.getElementById('grid');
    buttonGrid.addEventListener('click', function () {
        transform(targets.grid, 2000);
    });

    const buttonCone = document.getElementById('cone');
    buttonCone.addEventListener('click', function () {
        transform(targets.cone, 2000);
    });

    transform(targets.table, 2000);

    //
    window.addEventListener('resize', onWindowResize);

}

function transform(targets, duration) {

    TWEEN.removeAll();

    for (let i = 0; i < objects.length; i++) {

        const object = objects[i];
        const target = targets[i];

        new TWEEN.Tween(object.position)
            .to({ x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration)
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();

        new TWEEN.Tween(object.rotation)
            .to({ x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration)
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();

    }

    new TWEEN.Tween(this)
        .to({}, duration * 2)
        .onUpdate(render)
        .start();

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

    render();

}

function animate() {

    requestAnimationFrame(animate);

    TWEEN.update();

    controls.update();

}

function render() {

    renderer.render(scene, camera);

}
