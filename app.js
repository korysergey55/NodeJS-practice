import {logUserNumber} from './index.js';
import {
  reedFile,
  reedFileWithDetect,
  appendFile,
  wrireFile,
  reedFolderFiles,
} from './files.js';

logUserNumber (10);
reedFile ();
reedFileWithDetect ();

appendFile ('./text-1.txt', 'new-info-appendFile');
reedFile ('./text-1.txt');

wrireFile ('./text-1.txt', 'wrire_File_Node');
reedFile ('./text-1.txt');

reedFolderFiles ();
