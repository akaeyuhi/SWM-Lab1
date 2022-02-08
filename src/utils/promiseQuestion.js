export const promiseQuestion = (rl, question) => {
    return new Promise(resolve => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}
