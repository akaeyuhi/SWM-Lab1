import commandLineArgs from 'command-line-args';
import { nonInteractiveQuestion } from './utils/nonInteractiveQuestion.js';
import { question } from './utils/question.js';
import { quadraticSolver } from './utils/quadraticSolver.js';
const optionDefinitions = [
  { name: 'path', alias: 'p', type: String }
];
const options = commandLineArgs(optionDefinitions);


const start = async () => {
  console.log('Quadratic solver');
  let data;
  try {
    data = options.path ?
      await nonInteractiveQuestion(options) :
      await question('Enter coefficients\n');
  } catch (e) {
    return console.error(e);
  }
  const [coef1, coef2, coef3] = data;
  console.log(`Your coefficients: ${data.join(' ')}
  Equation is: (${coef1  || 0}) x^2 + (${coef2  || 0}) x + (${coef3 || 0}) = 0`);
  const result = quadraticSolver(...data);
  if (result) {
    console.log(`There are ${result.roots.length} roots`);
    for (const root of result.roots) {
      console.log(`x${result.roots.indexOf(root)}`, root);
    }
  } else {
    console.log('There is no roots.');
  }
};

(async () => await start())();
