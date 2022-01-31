// 파일이나 디렉터리가 있는지 없는지를 확인
import * as fs from 'fs'

export const fileExists = (filepath: string): Promise<boolean> =>
    new Promise(resolve => fs.access(filepath, error => resolve(error ? false : true)))