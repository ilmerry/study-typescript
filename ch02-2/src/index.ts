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

// import {f, g, h} from '../src/compose/f-g-h'
// import {compose} from '../src/compose/compose'

// const composedFGH = compose(f, g, h)
// console.log(
//     composedFGH('x')
// )

// pointless function squaerMap과 sumArray를 pipe로 조합해 피타고라스의 정리를 구현한 함수
// import {pipe} from '../src/compose/pipe'
// import {squareMap} from '../src/compose/squaredMap'
// import {sumArray} from '../src/compose/sumArray'

// const pitagoras = pipe(
//     squareMap, 
//     sumArray, 
//     Math.sqrt
// )

// console.log(
//     // 피타고라스의 정리를 만족하는 나머지 한변의 길이
//     pitagoras([3, 4])
// )
// import * as R from 'ramda'

// R.pipe(
//     R.filter(R.lte(3)),
//     R.tap(n => console.log(n))
// )(R.range(1, 9+1))

// import { ICoordinates } from "./chance/coordinates/ICoordinates";
// import { makeICoordinates } from "./chance/coordinates/makeICoordinates";
// import { makeRandomICoordintes } from "./chance/coordinates/makeRandomICoordinates";
// import { ILocation } from "./chance/location/ILocation";
// import { makeRandomILocation } from "./chance/location/makeRandomILocation";
// import { IPerson } from "./chance/person/IPerson";
// import { makeRandomIPerson } from "./chance/person/makeRandomIPerson";

// const person: IPerson = makeRandomIPerson()
// console.log(person)

function increase(number) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = number + 10;
        if (result > 50) {
          const e = new Error('NumberToBig');
          return reject(e);
        }
        resolve(result);
      }, 1000);
    });
    return promise;
}

async function runTasks() {
    try{
        let result = await increase(0)
        console.log(result)
        result = await increase(result)
        console.log(result)
        result = await increase(result)
        console.log(result)
        result = await increase(result)
        console.log(result)
        result = await increase(result)
        console.log(result)
        result = await increase(result)
        console.log(result)
    } catch (e) {
        console.log(e)
    }
}

runTasks()