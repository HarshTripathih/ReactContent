//Global execution context (GEC) => where all the js that is not inside A FUNCTION GETS EXECUTED
    //divided into two phase : Memory creation phase , andn Code ecxecutjion Phase 
    //and in general term it is divided into 4 parts : 

//functionn execution context (FEC ) => fec is created on function call

//execution context is dividec into variable environment (memory part ) and bthresd of executjion ( code executioin part )
//1. GEC  is created
//2. In phase 1 all the variables ,parameters , function etc,
// are assigned memory even before the program runs
//note that all the variables will assigned undefined 
//all the function are stored exactly in the memory 

// Call stack =>it is the manger of all teh context =>  its manages exectution context call
// If the output is undefined it means the FEC call befor theh GEC

// var a = 10;
// console.log(a);

// function x(){
//     var b = 20;
//     console.log(b)
// }
// x();

//Hosting 

// console.log(a)
// var a = 10;

// x()


//temporal dead zone => time when u cannot access variables using
//let and const till there initialization 

//let a = 10
//console.log(a)

//ex1
    // var message = 'hello every one'
    // console.log(message)

    // function a(){
    //     var b = 30
    //     console.log(b)
    // }
    // a()
    // let num1 = 10;
    // let num2 = 20;
    // function sum(){
    //     let result = num1 + num2
    //     console.log(result)
    // }
    // sum(20)
    // console.log('bye all')

    //scope, scopechaining or lexical scope , closure
    //the function can access the value through its lexical envieonment
    // for eg: parent lexical scope , grand parent scope till global scope
    //scopechaining and lexical
    // var a = 10;
    // function x(){
    //     function y(){
    //         function z(){
    //             console.log(a)
    //         }
    //     }
    // }
    // z()

    //closure : function bundled or attached with its lexical environment
    //closure are inner function that have access to variable and parameters
    //of the outer function even after the the outer function has returned


    // function x(){
    //     let a = 10
    //     function y(){
    //         console.log(a)
    //     }
    //     y()
    // }
    // x()

    //function as first class citizens

    function x(){
        let a = 20 
        return function y(){
            console.log(a)
        }
    }
    let newFunc = x()
    console.log(newFunc)

    //private method using with closures
    