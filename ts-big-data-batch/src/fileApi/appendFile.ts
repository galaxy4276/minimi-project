import * as fs from 'fs';

const appendFile = (filename: string, data: any): Promise<any> =>
  new Promise((resolve, reject) => {
    fs.appendFile(filename, data, 'utf8', (e: Error) => {
      e ? reject(e) : resolve(data);
    });
  });

export { appendFile };