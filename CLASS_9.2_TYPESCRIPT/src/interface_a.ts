const user = {
	firstName: "harkirat",
	lastName: "singh",
	// email: "email@gmail.com",
	age: 21,
}

interface User2{
  firstName: string,
	lastName: string,
	email?: string,
	age: number,
}

function isLegal(user:User2){
  return user.age>18;
}

const result = isLegal(user);
console.log(result);
