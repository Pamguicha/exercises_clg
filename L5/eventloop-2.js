const functionOne = () => console.log("functionOne");

const functionTwo = () => console.log("functionTwo");

const functionThree = () => {
    console.log("functionThree");
    functionOne();
    functionTwo();
}

functionThree();











// const functionOne = () => console.log("functionOne");

// const functionTwo = () => console.log("functionTwo");

// const functionThree = () => {
//     console.log("functionThree");
//     setTimeout(functionOne, 0);
//     functionTwo();
// }

// functionThree();