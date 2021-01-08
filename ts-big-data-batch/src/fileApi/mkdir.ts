import * as mkdirp from 'mkdirp';
import { fileExists } from './fileExist';

const mkdir = async (dirname: string): Promise<any> => {
  new Promise(async (resolve, reject) => {
    const alreadyExists = await fileExists(dirname);
    if (alreadyExists) {
      return resolve(dirname);
    } else {
      return mkdirp(dirname);
    }
  });
}

export { mkdir };