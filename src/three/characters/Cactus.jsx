import * as THREE from 'three';

const Cactus = () => {
  const group = new THREE.Group();

  const pot = new THREE.Mesh(
    new THREE.CylinderGeometry(0.9, 0.7, 0.8, 16),
    new THREE.MeshPhongMaterial({ color: 0xe08b67 })
  );
  pot.position.y = -1.3;
  group.add(pot);

  const body = new THREE.Mesh(
    new THREE.CylinderGeometry(0.5, 0.6, 1.6, 16),
    new THREE.MeshPhongMaterial({ color: 0x2d8a5d })
  );
  body.position.y = 0.1;
  group.add(body);

  const eyeGeometry = new THREE.SphereGeometry(0.08, 8, 8);
  const eyeMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 });

  const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
  leftEye.position.set(-0.2, 0.4, 0.45);
  group.add(leftEye);

  const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
  rightEye.position.set(0.2, 0.4, 0.45);
  group.add(rightEye);

  const smileGeometry = new THREE.TorusGeometry(0.15, 0.03, 8, 8, Math.PI);
  const smileMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
  const smile = new THREE.Mesh(smileGeometry, smileMaterial);
  smile.position.set(0, 0.2, 0.45);
  smile.rotation.x = Math.PI / 2;
  smile.rotation.y = Math.PI;
  group.add(smile);

  group.scale.set(0.8, 0.8, 0.8);
  group.position.y = 0;
  group.rotation.y = -0.3;

  return group;
};

export default Cactus;
