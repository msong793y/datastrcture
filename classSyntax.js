
class Student {
    //class constructor
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.tardies = 0;
    }

    //instance method
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }

    markLate(){
        this.tardies+=1;
        return `${this.firstName} ${this.lastName} has been late ${this.tardies}`
    }

    //class method / utility function/
    static enrolllStudents(...students){
        return "Enrolling Students!"
    }

}

let firstStudent = new Student("Miles", "Song")


console.log(firstStudent)