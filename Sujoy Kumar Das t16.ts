class Person {

    private name: string;
    private age: number;


    constructor(name: string = '', age: number = 0) {
        this.name = name;
        this.age = age;
    }


    public setDetails(name: string, age: number): void {
        this.name = name;
        this.age = age;
    }


    public getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}


const person1 = new Person();
person1.setDetails('SKD', 25);


console.log(person1.getDetails()); 