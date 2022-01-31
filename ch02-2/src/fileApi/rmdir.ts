import rimraf from "rimraf"
import { fileExists } from "./fileExists"


// 비어있지 않은 디렉터리도 삭제 가능
export const rmdir = (dirname: string): Promise<string> =>
    new Promise(async(resolve, reject) => {
        const alreadyExists = await fileExists(dirname)
        // 해당 디렉터리가 있는 경우에만 삭제
        !alreadyExists ? resolve(dirname) :
            rimraf(dirname, error => error ? reject(error) : resolve(dirname))
    })