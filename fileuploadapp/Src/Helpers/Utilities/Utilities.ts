import { width, height } from "../Constants/AppConstants";

const baseHeight = 846;
const baseWidth = 375;
export const writeException = (error: any) => {
  console.log(error);
};

export const getHeightEquivalent = (input: number): number => {
  const temp = input / baseHeight;
  return temp * height;
};

export const getWidthEquivalent = (input: number): number => {
  const temp = input / baseWidth;
  return temp * width;
};

export const fontEq = (input: number): number => {
  const tempWidth = width / baseWidth;
  const tempHeight = height / baseHeight;
  const factor = (tempHeight + tempWidth) / 2;
  return input * factor;
};
