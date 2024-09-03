var person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue",
    address:"Kukkakuja",
    telephone:"0503478555",
    printInfo: function() {
        console.log(this.firstName);
        console.log(this.lastName);
        console.log(this.age);
        console.log(this.eyeColor);
        console.log(this.address);
        console.log(this.telephone);
    }
};

console.log(person.age);
person.printInfo();
