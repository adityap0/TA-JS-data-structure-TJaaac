```js
let brothers = ['John', 'Bran', 'Robb'];
let house = 'Stark';
let user = {
  name: 'Arya',
  house: house,
  brothers: brothers,
};

let user2 = {
  name: 'Arya',
  house: house,
  brothers: brothers,
};

let user3 = {
  name: 'Arya',
  house: 'Stark',
  brothers: ['John', 'Bran', 'Robb'],
};
```
user.house === user2.house; // true:
user.house == user2.house; // true:
user.brothers === user2.brothers; // true:
user.brothers == user2.brothers; // true:
user.name == user2.name; // true:
user.name === user2.name; // true:
user.brothers == user3.brothers; // output: false
user.brothers === user3.brothers; // output: false
user.house === user2.house; // true
user.house === user3.house; // true
user.brothers[0] === user2.brothers[0]; // true
user.brothers[0] === user3.brothers[0]; // true

```js
let character = {
  charactorName: 'Sansa',
  sisters: 1,
  brothers: 4,
};
let characterOne = character;
let characterTwo = character;
// Your code
```
character === characterOne; //true
characterOne == characterTwo; //true
characterTwo == character; //true
```js
let character = {
  charactorName: 'Sansa',
  sisters: 1,
  brothers: 4,
};
let characterThree ={}
characterThree.charactorName = character.charactorName;
characterThree.sisters = character.sisters;
characterThree.brothers = character.brothers;

let characterFour ={}
characterFour.charactorName = character.charactorName;
characterFour.sisters = character.sisters;
characterFour.brothers = character.brothers;

// Your code
```
character === characterThree; //false
characterThree == characterFour; //false
characterFour == character; //false