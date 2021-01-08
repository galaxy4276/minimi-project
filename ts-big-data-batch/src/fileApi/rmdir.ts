import * as rimraf from 'rimraf';
import {fileExists} from './fileExist';

const rmdir = (dirname: string): Promise<string> =>
  new Promise(async (resolve, reject) => {
    const alreadyExists = await fileExists(dirname);
    !alreadyExists ? resolve(dirname) :
        rimraf(dirname, (error: any) => error ? reject(error) : resolve(dirname));
  });

export { rmdir };