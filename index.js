"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkCondition = exports.loopPlane = exports.displayWheels = exports.addWheel = exports.addWheels = exports.addPlane = exports.Days = exports.testFunction = void 0;
const testFunction = () => {
    console.log("Hello to Typescript");
};
exports.testFunction = testFunction;
var parent;
parent = "myString";
parent = 500;
var nameArray = [];
var otherArray = new Array(10);
nameArray.push("myName");
otherArray.push("newName");
var Days;
(function (Days) {
    Days[Days["Mon"] = 0] = "Mon";
    Days[Days["Tue"] = 1] = "Tue";
    Days[Days["Wed"] = 2] = "Wed";
    Days[Days["Thu"] = 3] = "Thu";
    Days[Days["Fri"] = 4] = "Fri";
    Days[Days["Sat"] = 5] = "Sat";
    Days[Days["Sun"] = 6] = "Sun";
})(Days = exports.Days || (exports.Days = {}));
//function with issues HAHAHAHA
function addPlane2(data) {
}
var planeList = [];
//function
const addPlane = (data) => {
    planeList.push(data);
};
exports.addPlane = addPlane;
//displaying in html
var myWheels = [];
//the rest > the remaining chuchu
const addWheels = (...wheelsArray) => {
    wheelsArray.forEach((item) => {
        console.log(item);
    });
};
exports.addWheels = addWheels;
//addWheels("small", "medium", "large")
const addWheel = (wheel) => {
    myWheels.push(wheel);
    (0, exports.displayWheels)();
};
exports.addWheel = addWheel;
const displayWheels = () => {
    let list = document.getElementById('wheelList');
    if (list) {
        while (list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }
    myWheels.forEach((item) => {
        if (list) {
            let li = document.createElement("li");
            li.innerText = item;
            list.appendChild(li);
        }
    });
};
exports.displayWheels = displayWheels;
//looping
const loopPlane = () => {
    //forEach > terminal > retun void
    planeList.forEach((item) => {
        console.log("FOR EACH");
        console.log(item);
    });
    //map > intermediate > return new stream
    planeList.map((item) => {
        console.log("MAP");
        console.log(item);
    });
    //forLoop
    for (let i = 0; i < planeList.length; i++) {
        console.log("FOR LOOP");
        console.log(planeList[i]);
    }
    //while loop and do while
    let i = 0;
    while (i < planeList.length) {
        console.log("WHILE LOOP");
        console.log(planeList[i]);
        i++;
    }
    //enhanced for loop
    for (let plane of planeList) {
        console.log("ENHANCED FOR LOOP");
        console.log(plane);
    }
    //index for loop
    for (let ind in planeList) {
        console.log("INDEX FOR LOOP");
        console.log(planeList[ind]);
    }
};
exports.loopPlane = loopPlane;
const checkCondition = () => {
    var condition = true;
    var s = "first";
    //else if
    if (condition) {
    }
    else if (!condition) {
    }
    else {
    }
    //switch
    switch (s) {
        case "first":
            break;
        case "second":
            break;
        default:
    }
};
exports.checkCondition = checkCondition;
var tuple = ["myName", 1];
//will not accept boolean etc
var tuple2 = ["first", 1, 2,];
var plane1 = {
    name: "Jet Li",
    model: "Jet Fighter"
};
var plane2 = {
    name: "Bruce Lee",
    model: "Jumbo Jet"
};
(0, exports.addPlane)(plane1);
(0, exports.addPlane)(plane2);
(0, exports.loopPlane)();
(0, exports.testFunction)();
