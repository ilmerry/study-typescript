import * as U from '../utils/makeRandomNumber'
import {IPerson, ICompany} from './IPerson_ICompany'

export class Person implements IPerson {
    constructor(public name: string, public age: number){}
}

export class Company implements ICompany {
    constructor(public name: string, public age: number){}
}

export const makePerson = (name: string,
    age:number = U.makeRandomNumber()) => ({name, age})
