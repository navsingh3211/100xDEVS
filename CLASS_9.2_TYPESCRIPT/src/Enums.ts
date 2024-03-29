/*
-->Enums (short for enumerations) in TypeScript are a feature 
that allows you to define a set of named constants.

-->The concept behind an enumeration is to create a human-readable 
way to represent a set of constant values, 
which might otherwise be represented as numbers or strings.
 */

// type keyPress = 'Up' | 'Down' | 'Left' | 'Right';
enum Direction {
  Up,//0
  Down,//1
  Left,//2
  Right//3
}
function gameMouse(keyPressed:Direction) {
	if(keyPressed == Direction.Up){
    console.log("go up");
  }
}

gameMouse(Direction.Up);
console.log(Direction.Up);//o/p--> 0


enum Datataken {
  Up=10,
  Down,//11
  Left,//12
  Right//13
}
console.log(Datataken,'Datataken')
