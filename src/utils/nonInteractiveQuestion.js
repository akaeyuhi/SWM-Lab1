import { parseFromTxt } from './parseFromTxt';

export const nonInteractiveQuestion = async fileName => {
  const answer = await parseFromTxt(fileName);
  if (answer.match(/(\d+\s)/) && answer.split(' ').length <= 3) {
    return answer.split(' ').map(i => +i);
  } else {
    throw new Error(`Error. Expected a real number, got ${answer} instead`);
  }
};
