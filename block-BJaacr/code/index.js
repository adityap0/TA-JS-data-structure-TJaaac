const got = {
  houses: [
    {
      name: "Starks",
      people: [
        {
          name: "Eddard Stark",
          description:
            "Lord of Winterfell - Warden of the North - Hand of the King - Married to Catelyn (Tully) Stark",
        },
        {
          name: "Benjen Stark",
          description:
            "Brother of Eddard Stark - First ranger of the Night's Watch",
        },
        {
          name: "Robb Stark",
          description:
            "Son of Eddard and Catelyn Stark - Direwolf: Grey Wind",
        },
        {
          name: "Sansa Stark",
          description:
            "Daughter of Eddard and Catelyn Stark - Direwolf: Lady",
        },
        {
          name: "Arya Stark",
          description:
            "Daughter of Eddard and Catelyn Stark - Direwolf: Nymeria",
        },
        {
          name: "Brandon Stark",
          description:
            "Son of Eddard and Catelyn Stark - Direwolf: Summer",
        },
        {
          name: "Rickon Stark Upper",
          description:
            "Son of Eddard and Catelyn Stark - Direwolf: Shaggydog",
        },
        {
          name: "Jon Snow",
          description:
            "Bastard son of Eddard Stark - Steweard in the Night's Watch - Direwolf: Ghost",
        },
      ],
    },
    {
      name: "Lannisters",
      people: [
        {
          name: "Tywin Lannister",
          description:
            "Lord of Casterly Rock - Warden of the West",
        },
        {
          name: "Tyrion Lannister",
          description:
            "Son of Tywin Lannister - The Imp",
        },
        {
          name: "Jaime Lannister",
          description:
            "The Kingslayer - Knight of the Kingsgaurd - Son of Tywin Lannister",
        },
        {
          name: "Cersei Baratheon",
          description:
            "Married to King Robert Baratheon - Daughter of Tywin Lannister",
        },
      ],
    },
  ],
};



/*
Game of Thrones : Houses And People's Name
Try to first understand how Array in Objects & Objects in Array are arranged in this example.
Only when you don't get it by yourself, comeback again and read the hint
*/

// Write code for the following problems:
console.log(got);

// You have access to a variable named `got`. Which comes from `data.js` file

/*
Hint: (Structure of got variable)
  - got variable is an Object which has one key: `houses`
  - `houses` is an array of multiple house
  - Each house is an Object which has two keys: "name" and "people"
  - people is an array of all persons living in that particular house
  - And, each person is an object with "name" and "description" properties
*/

// 1. Log the value of key "houses"
console.log(got.houses);
// 2. Log the length of the "houses" key
console.log(got.houses.length);
// 3. Log the name of all houses in got one by one
for(let i=0; i<got.houses.length; i++)
{
  console.log(got.houses[i]);
}
// 4. Log the name of all the people in house Starks (index 0) one by one
for(let i=0; i<got.houses.length; i++)
{
  if(got.houses[i].name == "Starks")
  {
    for(let z=0; z<got.houses[i].people.length; z++)
    {
      console.log(got.houses[i].people[z].name);
    }
  }
}
// 5. Log the name of all the people in house Lannisters (index 1) one by one
for(let i=0; i<got.houses.length; i++)
{
  if(got.houses[i].name == "Lannisters")
  {
    for(let z=0; z<got.houses[i].people.length; z++)
    {
      console.log(got.houses[i].people[z].name);
    }
  }
}
// 6. Log the description of all the people in house Lannisters (index 1) one by one
for(let i=0; i<got.houses.length; i++)
{
  if(got.houses[i].name == "Lannisters")
  {
    for(let z=0; z<got.houses[i].people.length; z++)
    {
      console.log(got.houses[i].people[z].description);
    }
  }
}
// 7. Log the name and description of all the people in house Lannisters (index 1) one by one like `I am [name] and my bio is [description]`
for(let i=0; i<got.houses.length; i++)
{
  if(got.houses[i].name == "Lannisters")
  {
    for(let z=0; z<got.houses[i].people.length; z++)
    {
      console.log(`I am ${got.houses[i].people[z].name} and my bio is ${got.houses[i].people[z].description}`);
    }
  }
}
// 8. Log the name and description of all the people in house Starks (index 0) one by one like `I am [name] and my bio is [description]`
for(let i=0; i<got.houses.length; i++)
{
  if(got.houses[i].name == "Starks")
  {
    for(let z=0; z<got.houses[i].people.length; z++)
    {
      console.log(`I am ${got.houses[i].people[z].name} and my bio is ${got.houses[i].people[z].description}`);
    }
  }
}
// 9. Log the name and description of the people in house Starks whose name is `Robb Stark`
for(let i=0; i<got.houses.length; i++)
{
  if(got.houses[i].name == "Starks")
  {
    for(let z=0; z<got.houses[i].people.length; z++)
    {
      if(got.houses[i].people[z].name === "Robb Stark")
      {
        console.log(`Name is : ${got.houses[i].people[z].name} and the description is ${got.houses[i].people[z].description}`);
      }
    }
  }
}
// 10. Log the name and description of the people in house Lannisters whose name is `Tywin Lannister`
for(let i=0; i<got.houses.length; i++)
{
  if(got.houses[i].name == "Lannisters")
  {
    for(let z=0; z<got.houses[i].people.length; z++)
    {
      if(got.houses[i].people[z].name === "Tywin Lannister")
      {
        console.log(`Name is : ${got.houses[i].people[z].name} and the description is ${got.houses[i].people[z].description}`);
      }
    }
  }
}
// 11. Push the name of the houses in an array named `houseNames` and Log the array
let houseNames = [];
for(let i=0; i<got.houses.length; i++)
{
  houseNames[i] = got.houses[i];
}
console.log(houseNames);

// 12. Log the size of people in Starks house
for(let i=0; i<got.houses.length; i++)
{
  if(got.houses[i].name == "Starks")
  {
    console.log(`There are total ${got.houses[i].people.length} people in Stark house.`);
  }
}
// 13. Log the size of people in Lannisters house
for(let i=0; i<got.houses.length; i++)
{
  if(got.houses[i].name == "Lannisters")
  {
    console.log(`There are total ${got.houses[i].people.length} people in Lannisters house.`);
  }
}
// 14. Add the name and size of people in an object like {Starks: 4, Lannisters: 6} and log the object
let newObj ={};
for(let i=0; i<got.houses.length; i++)
{
  if(got.houses[i].name == "Starks" || got.houses[i].name == "Lannisters" )
  {
     newObj.name[i] = got.houses[i].name;
  }
}
// 15. Log the name of all the people of all the houses in got one by one
for(let i=0; i<got.houses.length; i++)
{
  for(let z=0; z<got.houses[i].people.length; z++)
    {
      console.log(got.houses[i].people[z].name);
    }
}
// 16. Push all names into a new array named `allPeople` and log the value array.
let allPeople = [];
for(let i=0; i<got.houses.length; i++)
{
  for(let z=0; z<got.houses[i].people.length; z++)
    {
      allPeople[z] = got.houses[i].people[z].name
    }
}
console.log(allPeople);
// 17. Log the value and length of `allPeople` array created above
console.log(allPeople.length);
console.log(allPeople);
// 18. Push all descriptions into an array named `allDescription`
let allDescription = [];
for(let i=0; i<got.houses.length; i++)
{
    for(let z=0; z<got.houses[i].people.length; z++)
    {
      allDescription[z] = got.houses[i].people[z].description;
    }
}
console.log(allDescription);
// 19. Log the value and length `allDescription`
let allDescription = [];
let end = allDescription.length;
for(let i=0; i<got.houses.length; i++)
{
    for(let z=0; z<got.houses[i].people.length; z++)
    {
      // allDescription[z] = got.houses[i].people[z].name;
      // console.log(got.houses[i].people[z].description);
      if(i===0)
      {
        allDescription[z] = got.houses[i].people[z].name;
        console.log(allDescription.length);
        console.log(end);
      }
      else if (i===1)
      {
        allDescription[end +z] = got.houses[i].people[z].name;
      }
    }
}
// console.log(allDescription);
for(let i =0; i<allDescription.length; i++)
{
  console.log(allDescription[i]);
}
console.log(allDescription.length);
// 20. Only the the description whose length is more than 30. (use .length property on string to get the length)
