const myName = 'Andre';
const myAge = 12;
const suma = (a: number, b: number) => {
  return a + b;
};
suma(12, 12);

class Persona {
  constructor(private age: number, name: string) {}

  getSummary() {
    //return `my name is ${this. name} , ${this. age}`;
  }
}

const andrea = new Persona(15, 'andrea');
andrea.getSummary();
