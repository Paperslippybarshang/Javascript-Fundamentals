// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

// 1st Solution
function getCard() {
  const number = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
  const shape = ['clubs', 'spades', 'hearts', 'diamonds'];
  const selectedNumber = number[Math.floor(Math.random() * number.length)];
  const selectedShape = shape[Math.floor(Math.random() * shape.length)];
  const card = {
    value: selectedNumber,
    suit: selectedShape
  }
  return card;
}

// 2nd Solution
function pick(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

function getCard2() {
  const number = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
  const shape = ['clubs', 'spades', 'hearts', 'diamonds'];
  return {value: pick(number), suit: pick(shape)};
}