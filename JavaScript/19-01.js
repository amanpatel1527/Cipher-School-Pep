// Rest and Spread Operator are applicable in Arrays and Objects in JS
// For Object
let object = {
    name: "ROhan",
    age: 24,
    address: {
      city: "Indore",
      state: "MP",
      country: "India",
    },
  };
  
  let object2 = JSON.parse(JSON.stringify(object));
  object2.address.city = "Newark";
  console.log(object2);
  

  