/*Difference between interface and type
1.) Interface we can extend in class
2.) Types lets us to do | or union or intersection */


//1.)  while we are using type--> a field can be a number or string

// type stringOrNumber = string | number;

// function printId(id:stringOrNumber){
// 	console.log(`ID: ${id}`);
// }

// printId(123);
// printId("navneet");


// 2.) type allows intersection

type Employee2 = {
	name:string;
	startDate:Date;
};

interface Manager {
	name:string;
	department:string;
}

type TechLead = Employee2 & Manager;
const t:TechLead = {
	name:"Ram ji",
	department:"as dbans",
	startDate:new Date()
}

