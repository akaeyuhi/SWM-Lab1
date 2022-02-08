import { parseFromTxt } from './parseFromTxt';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const nonInteractiveQuestion = async fileName => {
  console.log(__dirname);
  const answer = await parseFromTxt(path.resolve(__dirname, fileName));
  if (answer.match(/(\d+\s)/) && answer.split(' ').length <= 3) {
    return answer.split(' ').map(i => +i);
  } else {
    throw new Error(`Error. Expected a real number, got ${answer} instead`);
  }
};
