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

// import {readFilePromise} from '../src/readfile/readFilePromise'

// const readFilesAll = async (filenames: string[]) => {
//     /* string[] 타입 배열을 Promise[] 타입 객체로 전환
//         -> Promise.all 을 통해 단일 Promise 객체로 만듦
//         -> 객체에 await 구문을 적용해 해소된 결과값 반환
//     */
//     return await Promise.all(
//         filenames.map(filename => readFilePromise(filename))
//     )
// }

// readFilesAll(['./package.json', './tsconfig.json'])
//     .then(([packageJson, tsconfigJson]: string[]) => {
//         /* readFilesAll 함수를 Promise 객체로 취급
//             -> then-catch 체인으로 연결
//          */
//         console.log('<package.json>: ', packageJson)
//         console.log('<tsconfig.json>: ', tsconfigJson)
//     })
//     .catch(err => console.log('error:', err.message))

import {f, g, h} from '../src/compose/f-g-h'
import {compose} from '../src/compose/compose'

const composedFGH = compose(f, g, h)
console.log(
    composedFGH('x')
)