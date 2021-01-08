import * as fs from 'fs';

const fileExists = (filepath: string): Promise<boolean> =>
  new Promise(resolve => fs.access(
    filepath,
      err => resolve(!err)
  ));

export { fileExists };


