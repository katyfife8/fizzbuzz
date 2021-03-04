fizzBuzz = num => {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log('FizzBuzz');
  } else if (num % 3 === 0) {
    console.log('Fizz');
  } else if (num % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(num);
  }
}

function fizzBuzzCounter() {
  for (let i = 1; i < 16; i++)
  fizzBuzz(i);
}

fizzBuzzCounter()