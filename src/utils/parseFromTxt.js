import { readFile } from 'fs/promises';

export const parseFromTxt = async path => {
  try {
    const buffer = await readFile(path, 'binary');
    return Buffer.from(buffer).toString();
  } catch (e) {
    console.error(`Error with opening file: ${e}`);
    return '';
  }
};
