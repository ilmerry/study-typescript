import { Chance } from "chance"
import { makeIPerson, IPerson } from "./makeIPerson"
import { makeRandomILocation } from "../location/makeRandomILocation"
const c = new Chance
export const makeRandomIPerson = (): IPerson =>
    makeIPerson(c.name(), c.age(), c.profession(), makeRandomILocation())