import { ICoordinates } from "../coordinates/ICoordinates";

export type ILocation = {
    country: string // 필수 속성
    city?: string
    address?: string
    coordinates?: ICoordinates
}