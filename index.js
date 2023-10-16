// Code your solutions in this file

/*
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);

  }
*/

/* 
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);
*/

const cards = [];

function writeCards(name, events) {
    for (let i=0; i < name.length; i++) {
        cards.push(`Thank you, ${name[i]}, for the wonderful ${events} gift!`);
    }
    return cards;
}

function countDown(count) {
    let i = count;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}
