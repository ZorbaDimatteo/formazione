import "reflect-metadata"; 
import {createConnection} from "typeorm";
import {Student} from "./entity/Student"; //import Student entity

createConnection().then(async connection => { 

    console.log("Inserting a new record into the student database..."); 
   
    //create student object
    const stud = new Student(); 
   
    //Assign student name and age here 
    stud.Name = "student1"; 
    stud.age = 12; 
   
    //save student object in connection 
    await connection.manager.save(stud); 
    console.log("Saved a new user with id: " + stud.id);
    
    console.log("Loading users from the database...");

    //Display student saved records 
    const students = await connection.manager.find(Student); console.log("Loaded users: ", students);

    console.log("Here you can setup and run express/koa/any other framework.");
}).catch(error => console.log(error));