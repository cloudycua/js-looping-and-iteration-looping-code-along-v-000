function maybeTrue() {
  return Math.random() >= 0.5;
}

function tailsNeverFails() {
  let tails = 0;
  while (maybeTrue()) {
    tails++;
  }
  return `You got ${tails} tails in a row!`;
}
