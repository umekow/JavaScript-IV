// CODE here for your Lambda Classes
class Person {
    constructor(attr){
        this.name = attr.name;
        this.age  = attr.age; 
        this.location = attr.location; 
    }

    speak(){ 
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`); 
    }
}

class Instructor extends Person{
    constructor(attr){
        super(attr); 
        this.specialty = attr.specialty; 
        this.favLanguage = attr.favLanguage; 
        this.catchPhrase = attr.catchPhrase; 
    }

    demo(subject){
        console.log(`Today we are learning about ${subject}.`); 
    }
    grade(student, subject){
        console.log(`${student.name} recieves a perfect score on ${subject}.`); 
    }
}

class Student extends Person{
    constructor(attr){
        super(attr); 
        this.previousBackground = attr.previousBackground; 
        this.className = attr.className; 
        this.favSubjects = attr.favSubjects; 
       
    }

    listSubjects(){
        this.favSubjects.forEach(item => {console.log(item); });
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`); 
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`); 
    }
}

class ProjectManager extends Instructor{
    constructor(attr){
        super(attr); 
        this.gradClassName = attr.gradClassName; 
        this.favInstructor = attr.favInstructor; 
    }

    //methods
    standUp(slack_channel){
        console.log(`${this.name} announces to ${slack_channel}, @channel standy times!`);
    }

    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`); 
    }
}




const brittH = new Instructor({
    name: "Britt H.", 
    location:"Canada", 
    age:32, 
    favLanguage:"JavaScript", 
    specialty:"Front-end", 
    catchPhrase:"Let's get coding!"}); 


const ryanH = new Instructor({
    name:"Ryan H." , 
    location:"USA",
    age:54,
    favLanguage:"React", 
    specialty:"Back-end", 
    catchPhrase:"Alright so..." 
    
}); 

const umekoW = new Student({
    name:'Umeko w', 
    location:"USA",
    age:14,
    previousBackground:"Beginner courses", 
    className:"Web23", 
    favSubjects:["CS", "Art", "HTML"], 
});

const peterP = new Student({
    name: "Peter Parker", 
    location: "USA specifically NY",
    age:20,
    previousBackground:"Graduate Student in physics", 
    className:"Web23", 
    favSubjects:["Physics", "Biology", "English Comp"],
}); 

const zacS = new ProjectManager({
    name:"Zac S", 
    location:"USA",
    age: 34,
    favLanguage:"JavaScript", 
    specialty:"Cyber Security", 
    catchPhrase:"Here is the riddle for today",
    gradClassName:"WebPT6",
    favInstructor: "BrittH", 
}); 
const gregU = new ProjectManager({
    name: "Greg U", 
    location:"USA",
    age:45,
    favLanguage:"React", 
    specialty:"Front-end", 
    catchPhrase:"Alright. Is everybody here?",
    gradClassName:"WebPT4",
    favInstructor: "BrittH"
}); 

//log all objects to check properties
console.log(brittH, ryanH, umekoW, peterP, zacS, gregU);


//instructor methods
//demo
brittH.demo("JavaScript-II");
ryanH.demo("React-I"); 
//grade
brittH.grade(umekoW, "JavaScript-II");
ryanH.grade(peterP, "React-I"); 



//student methods

//listSubjects
umekoW.listSubjects(); 
peterP.listSubjects();

//PRAssignment
umekoW.PRAssignment("JavaScript-IV");
peterP.PRAssignment("JavaScript-II");

//sprintChallenge
umekoW.sprintChallenge("JavaScript-Sprint");
peterP.sprintChallenge("UI-Sprint"); 



//Project Manager methods

//standUP
zacS.standUp("web23"); 
gregU.standUp("web23_help"); 

//debugsCode
zacS.debugsCode(umekoW, "JavaScript-IV"); 
gregU.debugsCode(peterP, "UI-II"); 