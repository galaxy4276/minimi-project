import {readFile} from '../fileApi/readFile';

const readTest = async (filename: string) => {
  const result = await readFile(filename);
  console.log(`read ${result} from ${filename} file.`);
}

readTest('./data/test.json')
  .then(s => readTest('./data/hello.txt'))
  .catch((e: Error) => console.log(e.message));

