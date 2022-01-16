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

// import * as ObjPerson from './person/return-object'

// console.log(ObjPerson.makePerson('OB'))
// console.log(ObjPerson.makePerson('Ject', 33))

// import { arrayLen } from "./array/ArrayLen";

// let names = ['Jack', 'Jane', 'Shelbee']
// let nameLen = arrayLen(names)
// console.log(nameLen)

// import { range } from "./array/range";
// import { fold } from "./array/fold";
// import { filter} from "./array/filter";
// import {map} from "./array/map";

// let numbers : number[] = range(1, 100 + 1)
// const isOdd = (n: number): boolean => n%2!=0? true: false
// let oddSum = fold(filter(numbers, isOdd), (result, value) => result + value, 0)
// console.log(oddSum)

// let pow = (n: number): number => n*n
// let powSum = fold(map(numbers, pow), (result, value) => result + value, 0)
// console.log(powSum)

// const multiply = (result, val) => result * val
// const sum = (result, val) => result + val
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let tempResult =numbers.filter(val => val % 2 != 0).map(val => val * val).reduce(sum, 0)
// console.log(tempResult)
// let check = 1 + 9 + 25 + 49 + 81
// console.log(check)

import {readFile} from 'fs'

const readFilePromise = (filename: string): Promise<string> =>
    new Promise<string>((
        resolve: (value: string) => void,
        reject: (error: Error) => void
    ) => {
        readFile(filename, (err: Error, buffer: Buffer) => {
            if(err) throw err
            else{
                const content = buffer.toString()
                console.log(content)
            }
        })
    })

readFilePromise('./package.json')