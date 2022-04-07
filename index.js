// Create examples to explain callback function
CALLBACK: function which is passed as argument to another function.

function output(callback){
    console.log("out");
    callback()
};

function input(){
    console.log("in")
};

output(input);

// Create examples to explain callback hell function

// Print 1 to 5 number using CALLBACK HELL 
function printNumbers(){
    setTimeout(()=>{
        console.log("1")
            setTimeout(()=>{
            console.log("2")
                setTimeout(()=>{
                console.log("3")
                    setTimeout(()=>{
                    console.log("4")
                        setTimeout(()=>{
                        console.log("5")
                    },1000)
                },2000)
            },3000)
        },2000)
    },1000)
};

printNumbers();

// Create examples to explain promises function

const printVar = (samay, moolya) => {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=> {
            console.log(moolya);
            resolve()
        }, samay);
    })
        
};

printVar(6000, "A")
    .then(() => printVar(5000, "E"))
    .then(() => printVar(3000, "I"))
    .then(() => printVar(2000, "O"))
    .then(() => printVar(4000, "U"));     
     // Mutiple then Blocks is Promising Chaining


// Write one example explaining how you can write a callback function ?

let order = (call_production) =>{
    console.log("Order placed. Please call production")
    call_production();
};

let production = () =>{
   console.log("Production has started")
};

order(production);

// "Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Explain callback hell.
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"


let Production = () =>{
    console.log("Numbers")
    setTimeout(()=>{
      console.log("1")
      setTimeout(()=>{
        console.log("2")
        setTimeout(()=>{
          console.log("3")
          setTimeout(()=>{
            console.log("4")
            setTimeout(()=>{
              console.log("5")
              setTimeout(()=>{
                console.log("6")
                setTimeout(()=>{
                  console.log("7")
                },70000)
              },6000)
            },5000)
          },4000)
        },3000)
      },2000)
    },1000)
  
  };

production()


// "Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"

let printNumber = ( time, num ) => {
    return new Promise( ( resolve, reject )=>{
        if( num ){
            setTimeout(()=>{
                resolve( num() )
            }, time)
        }
        else{
            reject( console.log("No number"));
        }
    })
}

printNumber( 0, ()=>console.log("Numbers"))
    .then(()=>{
        return printNumber(1000,()=>console.log('1'))
    })
    .then(()=>{
        return printNumber(2000,()=>console.log('2'))
    })

    
// Create examples to explain async await function

const demonstrate = (time, value) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log(value);
            resolve()
        }, time)
    })
};

async function newFunc(){
    await demonstrate(2000, "A");
    await demonstrate(2000, "B");
    await demonstrate(1000, "C");
};

newFunc();


// Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 

function checkText (text) {
    return new Promise( ( resolve, reject )=>{
        if( text=="yes" ){
            resolve();
        }
        else{
            reject("Promise Rejected");
        }
    })
}
checkText("yes")
    .then(()=>{console.log("Promise Resolved");})
    .catch((error)=>{console.log(error);})

checkText()
    .then(()=>{console.log("Promise Resolved");})
    .catch((error)=>{console.log(error);})