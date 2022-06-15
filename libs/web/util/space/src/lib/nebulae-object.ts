import { Group } from "three";
import Nebula, { NebulaParameters } from "./nebula-object";
import type SpaceTravelContext from "./space-travel-context";

export type NebulaeParameters = NebulaParameters[];

const defaultNebulaeParameters: NebulaeParameters = [
  {
    textureUrl: "https://r2.eriascdn.com/clouds1.jpg",
    //red              //blue
    colorRange: { min: 0xff006f, max: 0x001aff },
    opacityRange: { min: 0.1, max: 0.2 },
    speedRange: { min: 0.0025, max: 0.175 },
    repeatOffsetRange: { min: [1, 1], max: [0.33, 1] },
    fallOffDistance: -8,
    rotationSpeedRange: { min: 1, max: 30 }
  },
  {
    textureUrl: "https://r2.eriascdn.com/noise3.jpg",
    //blue            //red
    colorRange: { min: 0x0055ff, max: 0xff006f },
    opacityRange: { min: 0.1, max: 0.2 },
    speedRange: { min: 0.003, max: 0.075 },
    repeatOffsetRange: { min: [0.5, 1], max: [0.25, 1] },
    fallOffDistance: -6,
    rotationSpeedRange: { min: 0.5, max: 25 }
  },
  {
    textureUrl: "https://r2.eriascdn.com/noise3.jpg",
    //red               //blue
    colorRange: { min: 0xff006f, max: 0x0026ff },
    opacityRange: { min: 0.01, max: 0.05 },
    speedRange: { min: 0.002, max: 0.1125 },
    repeatOffsetRange: { min: [0.75, 1], max: [0.35, 1] },
    fallOffDistance: -6,
    rotationSpeedRange: { min: 1.09, max: 31 }
  },
  {
    textureUrl: "https://r2.eriascdn.com/noise3.jpg",
    //red               //red
    colorRange: { min: 0xff006f, max: 0xff006f },
    opacityRange: { min: 0.01, max: 0.1 },
    speedRange: { min: 0.002, max: 0.1125 },
    repeatOffsetRange: { min: [0.75, 1], max: [0.35, 1] },
    fallOffDistance: -6,
    rotationSpeedRange: { min: 1.09, max: 31 }
  }
];

export default class Nebulae extends Group {
  constructor(
    context: SpaceTravelContext,
    parameters: NebulaeParameters = defaultNebulaeParameters
  ) {
    super();

    for (const nebulaParameters of parameters) {
      const nebula = new Nebula(context, nebulaParameters);
      this.add(nebula);
    }
  }
}
