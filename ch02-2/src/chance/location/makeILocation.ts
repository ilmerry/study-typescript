import { ICoordinates } from "../coordinates/ICoordinates";
import { ILocation } from "./ILocation";

export const makeILocation = (
    country: string,
    city: string,
    address: string,
    coordinates: ICoordinates
): ILocation => ({country, city, address, coordinates})