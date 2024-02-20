/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
  {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/
const transaction = [
  {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	},
  {
		id: 1,
		timestamp: 1656076800000,
		price: 20,
		category: 'Food',
		itemName: 'Burger',
	},
  {
		id: 1,
		timestamp: 1656076800000,
		price: 11,
		category: 'Fruit',
		itemName: 'Apple',
	},
  {
		id: 1,
		timestamp: 1656076800000,
		price: 22,
		category: 'Fruit',
		itemName: 'Mango',
	},
  {
		id: 1,
		timestamp: 1656076800000,
		price: 22,
		category: 'Meat',
		itemName: 'Chicken',
	}
]
function calculateTotalSpentByCategory(transactions) {
  let result = {}
  // adding data inside the set
  let mySet = new Set();
  for(let i =0 ;i < transactions.length;i++){
    if(mySet.has(transactions[i].category)){
      result[transactions[i].category] += transactions[i].price;
    }else{
      result[transactions[i].category] = transactions[i].price;
      mySet.add(transactions[i].category)
    }
  }

  let finalResult = Object.keys(result).map((data)=>{
    return {category:data,price:result[data]}
  })
  return finalResult;
}
let response = calculateTotalSpentByCategory(transaction);
console.log(response);
// module.exports = calculateTotalSpentByCategory;