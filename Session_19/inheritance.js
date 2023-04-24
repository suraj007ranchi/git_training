class Employee{
    constructor(name,id,salary){
    this.name = name;
    this.id = id;
    this.salary = salary;
    }
    work(){
        console.log(this.name," ",this.id,"",this.salary," performs work")
    }
}
class Manager extends Employee{
    constructor(name,id,salary,reportees){
    super(name,id,salary)  //this calls employees constructor
    // when ever u extend from a class you have to call class constructor by using super function
    this.reportees = reportees;
    }
    managers(){
        console.log(this.name," ",this.id,"",this.salary,"",this.reportees,"manages employees ")
    }
}

let e1 = new Employee("suraj",001,45000);
let e2 = new Employee("samir",002,42000);
//e1.work()
let arr1 = [e1,e2]
let m1 = new Manager("Shiva",03,78000,arr1)
m1.managers()
m1.work()