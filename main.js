"use strict";
//TOPIC: DATA TYPES AND OBJECTS
/*
type Children={     //to save the datatype of nested objects inside an objects
    name: string,
    age: number
}

type Person={       //to save data types and predefined them
    name: string,
    age: number,
    children?: Children
    car:    {
        name: string,
        cc: number,
        number_Plate:string

}
}

let person1:Person= {  //creates an object named person with data type predefined at type Person
    name: 'sarosh',     //this is a fresh object as it is defined in this line
    age: 26,
    children:{          //creates a nested object inside person object
        name: 'saroshjr',
        age: 40
    },
    car:{               //creates another nested object
        name: 'mehran vxl',
        cc: 800,
        number_Plate: 'W-6136'
    }
}

let person2={
    name: 'ahmed',
    age: 101,
}
person2=person1 //person 2 is a stale object as it is not created in this line
console.log(person2) //this is a stale object
console.log(person1.children?.name)
*/
// TOPIC: UNION & INTERSECTION
/*
type Type1={
    name: string,
    age: number
}
type Type2={
    name: string,
    age: number,
    gender: string
}

let data1: Type1|Type2={    // | this is union which combines all datatypes
    name: 'sarosh',
    age: 26,
    gender: 'male'
}
let data2: Type1&Type2={    // & is intersection and displayes common types
    name: 'ahmed',
    age: 30,
    gender: 'male'
}
console.log(data2)
*/
//TOPIC: DATA TYPES (ANY, UNKNOWN, NEVER)
/*
//any
let a: any = 10         //any datatype can be assigned in any and it will not give error
let b: string = 'hello'
let c: number[] = [1,2,3,4,5]
a=b //no errors
b=a
a=c

console.log(c)

//unknown
let d: unknown = 'hello' //unknown value does not saves in any other datatype and will display error
let e: number = 4

d=e // will show no error
//e=d //displays error because a number datatype 'e' cannot save an unknown datatype of 'd'

//never
let f :string = 'hello world'
if (typeof f=== 'string'){
    console.log(f)
}
else{
    console.log('this is impossible'+ f) //{let f: never},here f is a datatype that can never store a value as the initial if condition never meets
}
*/
//TOPIC: USE AS (TYPE ASSERTION OR EXPLICIT TASKING)
/*
let g:string = 'sarosh'
let h: unknown = 22
h as number             //here we can define h as a number
let newName: unknown = 'sarosh'
console.log((newName as string).toLocaleUpperCase())
*/
//TOPIC ENUM DATATYPE
/*let meetingDays:string= 'monday'.toLocaleLowerCase()

if (meetingDays=='sunday'){
    console.log('Sunday')
}
else if (meetingDays==='Monday'.toLocaleLowerCase()){
    console.log('monday')
}
else{
    console.log('error')
}*/
var Days;
(function (Days) {
    Days["Sunday"] = "sunday";
    Days["Monday"] = "monday";
    Days["Tuesday"] = "tuesday";
    Days["Wednesday"] = "wednesday";
    Days["Thursday"] = "thursday";
    Days["Friday"] = "friday";
    Days["Saturday"] = "saturday";
})(Days || (Days = {}));
let meetDay = Days.Monday;
if (meetDay === Days.Monday) {
    console.log('today is ' + Days.Monday);
}
