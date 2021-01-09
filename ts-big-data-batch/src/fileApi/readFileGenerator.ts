import * as fs from 'fs';

export function* readFileGenerator(filename: string): any {
  let fd: any;

  try {
    fd = fs.openSync(__filename, 'rs');
    const stats = fs.fstatSync(fd);
    const bufferSize = Math.min(stats.size, 1024);
    const buffer = Buffer.alloc(bufferSize + 4);
    let filepos = 0, line;

    while (filepos > -1) {
      [line, filepos] = readLine(fd, buffer, bufferSize, filepos);
      if (filepos > -1) {
        yield line;
      }
    }

    yield buffer.toString();
  } catch (err) {
    console.error('readLine: ', err.message);
  } finally {
    fd && fs.closeSync(fd);
  }
}

function readLine(fd: any, buf: Buffer, bufSize: number, pos: number): [string, number] {
  let line = '', readSize;
  const crSize = '\n'.length;

  while (true) {
    readSize = fs.readSync(fd, buf, 0, bufSize, pos);
    if (readSize > 0) {
      const temp = buf.toString('utf8', 0, readSize);
      const idx = temp.indexOf('\n');
      if (idx > -1) {
        line += temp.substr(0, idx);
        pos += idx + crSize;
        break;
      } else {
        line += temp;
        pos += temp.length;
      }
    } else {
      pos = -1;
      break;
    }
  }
  return [line.trim(), pos];
}