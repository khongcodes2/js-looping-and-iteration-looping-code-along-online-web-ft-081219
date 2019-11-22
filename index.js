// Code your solutions in this file
function writeCards(array_strings, event_name) {
  let event_array = [];
  for (let i=0; i<array_strings.length; i++) {
    event_array[i] = `Thank you, ${array_strings[i]}, for the wonderful ${event_name} gift!`;
  }
  return event_array;
}

function countDown(integer) {
  while (integer>=0) {
    console.log(integer);
    integer --;
  }
}