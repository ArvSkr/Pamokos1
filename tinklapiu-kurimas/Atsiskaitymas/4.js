"use strict"
function filterItems(arr, query) {
    return arr
      .filter(item => item.toLowerCase().includes(query.toLowerCase()))  
      .map(item => `*${item}`) 
      .sort();  
  }
  
  const friends = ["Rika", "Jacob", "Alex", "Oliver", "Marika"];
  
  console.log(filterItems(friends, 'ka')); // ["*Marika", "*Rika"]
  console.log(filterItems(friends, 'e'));  // ["*Alex", "*Oliver"]
  