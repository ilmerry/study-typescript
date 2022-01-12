// import {IPerson, ICompany} from '../src/person/IPerson_ICompany'
// import {Person, Company} from "./person/Person_Company"

// let jack : Person = {name: 'Jack', age: 31},
//     jane : Person = {name: 'Jane', age: 22}

// let apple : Company = {name: 'Apple', age: 43},
//     ms : Company = {name: 'Microsoft', age: 44}

// let persons: Person[] = [jack, jane],
//     companys: Company[] = [apple, ms]

// console.log(persons)
// console.log(companys)

import * as ObjPerson from './person/return-object'

console.log(ObjPerson.makePerson('OB'))
console.log(ObjPerson.makePerson('Ject', 33))