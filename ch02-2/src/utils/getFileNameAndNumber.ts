export type FileNameAndNumber = [string, number]

export const getFileNameAndNumber = (defaulFilename: string, 
    defaultNumberOfFakeData: number): FileNameAndNumber => {
        const [bin, node, filename, numberOfFakeData] = process.argv
        return [filename || defaulFilename, numberOfFakeData ?
            parseInt(numberOfFakeData, 10): defaultNumberOfFakeData]
    }