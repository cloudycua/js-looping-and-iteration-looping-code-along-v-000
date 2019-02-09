function tailsNeverFalls() {
  let tails = 0;
  while (Math.random() >= 0.5) {
    ++tails;
  }
  return `You got ${tails} tails in a row `);
}
