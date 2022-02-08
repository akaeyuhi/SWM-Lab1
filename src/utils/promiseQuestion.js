export const promiseQuestion = (rl, question) => new Promise(resolve => {
  rl.question(question, answer => {
    resolve(answer);
  });
});
