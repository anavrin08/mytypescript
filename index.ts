export const testFunction = () => {
    console.log("Hello to Typescript")
}

var parent:any;
parent = "myString";
parent = 500;

var nameArray: string[] = [];
var otherArray = new Array(10);

nameArray.push("myName");
otherArray.push("newName");

export enum Days {
    Mon, Tue, Wed, Thu, Fri, Sat, Sun
}

//optional parameter ?
interface Plane {
    name:string
    model:string
    fly?: (destination:string) => void 
}


//function with issues HAHAHAHA
function addPlane2(data:Plane){

}

var planeList:Plane[] = [];

//function
export const addPlane = (data:Plane) => {
    planeList.push(data)
}


//the rest > the remaining chuchu
export const addWheels = (...wheelsArray:string[]) => {
    wheelsArray.forEach((item) => {
        console.log(item)
    })
}

//addWheels("small", "medium", "large")

//displaying in html
var myWheels:string[] = [];

export const addWheel = (wheel:string) => {
    myWheels.push(wheel);
    displayWheels();
}

export const displayWheels = () => {
    let list = document.getElementById('wheelList');
    if(list) {
        while(list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild)
        }
    }
    myWheels.forEach((item) => {
        if(list) {
            let li = document.createElement("li");
            li.innerText = item
            list.appendChild(li)
        }
    })
}

//looping
export const loopPlane = () => {
    //forEach > terminal > return void
    planeList.forEach((item) => {
        console.log("FOR EACH")
        console.log(item)
    })

    //map > intermediate > return new stream
    planeList.map((item) => {
        console.log("MAP")
        console.log(item)
    })

    //forLoop
    for(let i=0; i < planeList.length; i++){
        console.log("FOR LOOP")
        console.log(planeList[i])
    }

    //while loop and do while
    let i=0;
    while(i<planeList.length){
        console.log("WHILE LOOP")
        console.log(planeList[i])
        i++
    }

    //enhanced for loop
    for(let plane of planeList){
        console.log("ENHANCED FOR LOOP")
        console.log(plane)
    }

    //index for loop
    for(let ind in planeList){
        console.log("INDEX FOR LOOP")
        console.log(planeList[ind])
    }
}

export const checkCondition = () => {

    var condition:boolean = true;
    var s:string = "first"

    //else if
    if(condition){

    } else if (!condition){

    } else {

    }

    //switch
    switch(s){
        case "first":
            break;
        case "second":
            break;
        default:
    }
}

var tuple = ["myName", 1];
//will not accept boolean etc
var tuple2:(string | number) []= ["first",1,2,];

var plane1: Plane = {
    name: "Jet Li",
    model: "Jet Fighter"
}

var plane2: Plane = {
    name: "Bruce Lee",
    model: "Jumbo Jet"
}

addPlane(plane1);
addPlane(plane2);

loopPlane();

testFunction();
