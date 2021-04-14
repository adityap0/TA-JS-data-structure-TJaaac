let hat = {
    size: 'large',
    color: 'orange',
  };
  console.log(hat.size); // large

  let hat = {
    size: 'large',
    color: 'orange',
  };
  console.log(hat['color']);
  
  // Output - orange

  let hat = {
    size: 'large',
    color: 'orange',
  };
  
  hat.color = 'red';
  console.log(hat.color);
  
  // Output - red

  let pen = {};
pen.ink = 'blue';
console.log(pen.ink);

// Output - blue

let hat = {
    size: 'large',
    color: 'orange',
  };
  
  console.log(hat['cost']);
  
  // Output - undefined

  let hat = {
    rating: function () {
      return 'Hat is top rated';
    },
    color: 'green',
  };
  console.log(hat.rating());
  
  // Output - 'Hat is top rated'

  let hat = {
    size: 'medium',
    color: 'green',
    introduction: function () {
      return `The size of hat is ${hat.size} and color is ${hat.color}`;
    },
  };
  hat.introduction();
  
  // Output - `The size of hat is medium and color is green`

  let hat = {
    rating: function () {
      return 'Hat is top rated';
    },
    color: 'green',
  };
  console.log(hat.rating());
  
  // Output - Hat is top rated

  let bucket = {
    capacity: '5 Litre',
    customerMessage: function (desiredSize) {
      if (desiredSize > 5) {
        return 'This bucket is not large enough for you';
      }
    },
  };
  console.log(bucket.customerMessage(13));
  
  // Output - This bucket is not large enough for you

  function globalFunction() {
    return 'I can be called anywhere';
  }
  let obj = {
    func: globalFunction,
  };
  console.log(obj.func());
  
  // Output - I can be called anywhere.

  let student = {
    age: 21,
    address: {
      city: 'Dharamshala',
      state: 'Himachal Pradesh',
    },
  };
  console.log(student.address.city);
  
  // Output - Dharamshala

  let student = {
    age: 21,
    address: {
      city: 'Dharamshala',
      state: 'Himachal Pradesh',
    },
  };
  student.address.zip = '176057';
  console.log(student.address.zip);
  
  // Output - 176057

  let student = {
    age: 21,
    address: {
      city: 'Dharamshala',
      state: 'Himachal Pradesh',
    },
  };
  console.log(student);
  delete student.age;
  console.log(student);
  
  // Output - 
//   {age: 21, address: {…}}
// address: {city: "Dharamshala", state: "Himachal Pradesh"}
// __proto__: Object
// VM239:10 
// {address: {…}}
// address: {city: "Dharamshala", state: "Himachal Pradesh"}
// __proto__: Object

var altcampus = {
    batch16: {
      totalStudents: '11',
    },
    batch15: {
      totalStudents: '9',
    },
    batch14: {
      totalStudents: '8',
    },
  };
  console.log(altcampus.batch16.totalStudents);
  
  // Output - 11

  var obj = {
    name: 'Panther',
  };
  console.log('name' in obj);
  
  // Output - Error