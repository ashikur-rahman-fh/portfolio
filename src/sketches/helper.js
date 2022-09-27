import { STRAIGHT_ANGLE } from "./constants";

export const getAngleInTheta = (angleInRadian) => {
    return angleInRadian * Math.PI / STRAIGHT_ANGLE;
}
