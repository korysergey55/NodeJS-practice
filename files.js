import fs from 'fs/promises';
import DetectFileEncodingAndLanguage from 'detect-file-encoding-and-language';
import {stat} from 'fs';

export const reedFile = async (path = './text.txt') => {
  const buffer = await fs.readFile (path);
  const text = buffer.toString ();
  console.log ('reedFile-buffer-text', text);
  return text;
};

export const reedFileWithDetect = async (path = './text.txt') => {
  const fileDate = await DetectFileEncodingAndLanguage (path);
  const buffer = await fs.readFile (path, fileDate.encoding);
  console.log ('DetectFileEncodingAndLanguage-', buffer);
  return buffer;
};

export const reedFolderFiles = async () => {
  const files = await fs.readdir ('../1st Module');

  const infoFiles = await Promise.all (
    files.map (async file => {
      const stats = await fs.stat (file);
      return {
        filename: file,
        size: stats.size,
        date: stats.mtime,
      };
    })
  );
  console.log (infoFiles);
  return infoFiles;
};

export const appendFile = async (path = '', text = '') => {
  await fs.appendFile (path, `\n${text}`);
};

export const wrireFile = async (path = '', data = '') => {
  fs.writeFile (path, data);
};
