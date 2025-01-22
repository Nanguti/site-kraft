import { ThreeElements } from "@react-three/fiber";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: ThreeElements["ambientLight"];
      directionalLight: ThreeElements["directionalLight"];
      meshStandardMaterial: ThreeElements["meshStandardMaterial"];
      mesh: ThreeElements["mesh"];
      group: ThreeElements["group"];
    }
  }
}
