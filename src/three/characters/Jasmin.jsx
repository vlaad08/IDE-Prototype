import * as THREE from 'three';

const Jasmin = () => {
  const group = new THREE.Group();

  const pot = new THREE.Mesh(
    new THREE.CylinderGeometry(0.8, 0.6, 0.8, 16),
    new THREE.MeshPhongMaterial({ color: 0x8B4513 })
  );
  pot.position.y = -1.0;
  group.add(pot);

  const stem = new THREE.Mesh(
    new THREE.CylinderGeometry(0.03, 0.04, 1.2, 8),
    new THREE.MeshPhongMaterial({ color: 0x558844 })
  );
  stem.position.y = 0.05;
  group.add(stem);

  const center = new THREE.Mesh(
    new THREE.SphereGeometry(0.08, 8, 8),
    new THREE.MeshPhongMaterial({ color: 0xFFF0A0 })
  );
  center.position.y = 0.65;
  group.add(center);

  const petalGeometry = new THREE.SphereGeometry(0.1, 8, 4);
  const petalMaterial = new THREE.MeshPhongMaterial({ color: 0xFFFFFF });

  for (let i = 0; i < 5; i++) {
    const angle = (i / 5) * Math.PI * 2;
    const petal = new THREE.Mesh(petalGeometry, petalMaterial);
    petal.position.set(Math.cos(angle) * 0.12, 0.65, Math.sin(angle) * 0.12);
    petal.scale.set(1, 0.5, 1);
    petal.lookAt(0, 0.65, 0);
    group.add(petal);
  }

  const eyeGeometry = new THREE.SphereGeometry(0.07, 8, 8);
  const eyeMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 });

  const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
  leftEye.position.set(-0.12, 0.15, 0.2);
  group.add(leftEye);

  const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
  rightEye.position.set(0.12, 0.15, 0.2);
  group.add(rightEye);

  const smileGeometry = new THREE.TorusGeometry(0.1, 0.02, 8, 8, Math.PI);
  const smileMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
  const smile = new THREE.Mesh(smileGeometry, smileMaterial);
  smile.position.set(0, 0, 0.2);
  smile.rotation.x = Math.PI / 2;
  smile.rotation.y = Math.PI;
  group.add(smile);

  group.scale.set(0.9, 0.9, 0.9);
  group.position.y = -0.3;
  group.rotation.y = 0.2;

  return group;
};

export default Jasmin;
