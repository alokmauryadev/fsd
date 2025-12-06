const p1 = new Promise(res => res(10));

const p2 = p1.then(value => {
  console.log(value); // Logs: 10
  // Forgot to return!
});

const p3 = p2.then(value => {
  // `value` here is NOT 10.
  // It is `undefined`, because the previous .then() didn't return.
  console.log(value); // Logs: undefined
  return 100;
});

const p4 = p3.then(value => {
  console.log(value); // Logs: 100
});