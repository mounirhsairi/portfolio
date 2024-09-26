import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Book } from "./Book";

export const Experience = () => {
  return (
    <>
      {/* Ajustement de la position du livre pour le centrer à l'écran */}
      <Float
        position={[0, 0.5, 0]} // Le livre est positionné un peu plus haut
        rotation-x={0}
        floatIntensity={0} // Pas de mouvement automatique
        speed={0}
        rotationIntensity={0} // Pas de rotation automatique
      >
        <Book />
      </Float>
      
      {/* Caméra ajustée avec un zoom plus proche */}
      <OrbitControls 
        enableRotate={false} // Empêche la rotation de la caméra si nécessaire
        enableZoom={true} // Permet de zoomer/dézoomer
        maxPolarAngle={Math.PI / 2.2} // Empêche la caméra de trop basculer
        minPolarAngle={Math.PI / 2.8} // Limite la vue du dessous
        target={[0, 0.5, 0]} // Centré sur le livre (nouvelle position)
        minDistance={1.5} // Distance minimale pour que la caméra commence plus proche
        maxDistance={5} // Distance maximale si l'utilisateur fait un zoom arrière
      />

      {/* Lumière pour éclairer correctement le livre */}
      <Environment preset="studio" />
      <directionalLight
        position={[2, 5, 2]} // Ajuste la lumière pour un éclairage équilibré
        intensity={3} // Augmente la luminosité
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />
      <ambientLight intensity={0.5} /> {/* Ajout d'une lumière ambiante douce */}

      {/* Plan sous le livre pour recevoir les ombres */}
      <mesh position={[0, -1.5, 0]} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.3} />
      </mesh>
    </>
  );
};
