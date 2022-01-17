import {readFile} from 'fs'

export const readFilePromise = async(filename: string): Promise<string> =>
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