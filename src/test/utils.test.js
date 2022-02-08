import { describe, expect, test } from '@jest/globals';
import readline from 'readline';
import { stdin as input, stdout as output } from 'process';
import { promiseQuestion } from '../utils/promiseQuestion';
import { quadraticSolver } from '../utils/quadraticSolver';

describe('promiseQuestion test', () => {
  test('Promise should return and data should be success', () => {
    const rl = readline.createInterface({ input, output });
    promiseQuestion(rl, 'test').then(data => expect(data).toBe('success'));
    rl.close();
  });
});

describe('quadraticSolver test', () => {
  test('Function should return valid roots', () => {
    expect(...quadraticSolver(2, 4, 2).roots).toBe(-1);
    const [root1, root2] = quadraticSolver(4, 2, 0).roots;
    expect(root1).toBe(0);
    expect(root2).toBe(-0.5);
    expect(quadraticSolver(1, 0, 12)).toBe(false);
  });
});
