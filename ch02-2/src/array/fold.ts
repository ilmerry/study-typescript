// T[] 타입 배열, 어떻게 가공할 것인지 => T 타입 결과값
export const fold = <T>(array: T[], callback: (result: T, val: T) => T, initValue: T) => {
    let result: T = initValue
    for(let i=0; i<array.length; i++){
        const value = array[i]
        result = callback(result, value)
    }
    return result
}