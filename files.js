import fs from 'fs/promises';
import DetectFileEncodingAndLanguage from 'detect-file-encoding-and-language';

export const reedFile = async (path='./text.txt') => {
  const buffer = await fs.readFile (path);
  const text = buffer.toString ();
  console.log ('reedFile-buffer-text', text);
  return text;
};

export const wrireFileNode = async (
  data = 'wrire_File_Node',
  path = './text-1.txt'
) => {
  fs.writeFile (path, data);
};
