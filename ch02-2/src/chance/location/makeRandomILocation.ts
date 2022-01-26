import Chance from "chance";
import { makeRandomICoordintes } from "../coordinates/makeRandomICoordinates";
import { ILocation } from "./ILocation";
import { makeILocation } from "./makeILocation";
const c = new Chance

export const makeRandomILocation = (): ILocation =>
    makeILocation(c.country(), c.city(), c.address(), makeRandomICoordintes())