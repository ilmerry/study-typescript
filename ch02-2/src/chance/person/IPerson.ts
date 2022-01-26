import { ILocation } from "../location/ILocation";

export type IPerson = {
    name: string
    age: number
    title?: string
    location?: ILocation
}

export {ILocation}