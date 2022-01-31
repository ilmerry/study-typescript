import mkdirp from "mkdirp"
import { fileExists } from "./fileExists"

export const mkdir = (dirname: string): Promise<string> =>
    new Promise(async (resolve, reject) => {
        const alreadyExists = await fileExists(dirname)
        // 해당 파일이 존재하지 않을 때에만 디렉터리 생성
        alreadyExists ? resolve(dirname) :
            mkdirp(dirname).then(resolve).catch(reject)
    })