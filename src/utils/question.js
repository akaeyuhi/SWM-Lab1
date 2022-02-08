import * as readline from "readline";
import { stdin as input, stdout as output } from 'process';
import {promiseQuestion} from "./promiseQuestion";

export const question = async (question) => {
    const rl = readline.createInterface({ input, output });
    const answer = promiseQuestion(rl, question);
    if (answer.match(/(\d+\s)/) && answer.split(' ').length <= 3) {
        return answer.split( ' ').map(i => +i);
    }
    else {
        throw new Error(`Error. Expected a real number, got ${answer} instead`);
    }
}
