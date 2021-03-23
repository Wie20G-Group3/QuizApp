class Player{
    constructor (){


        
    }
} 

 class Bot {
    constructor(name){
    this.name=name
    }
    /* makeGuessTime(guess){
       return setTimeout(guess,  Math.floor(Math.random() * 4500) + 2000)
    } */
}

let highestLowNumber = 12
let lowestHighNumber = 16
let answer=""
class SmartBot extends Bot{
    constructor(){
        super("smartBot")
    }
    guess(){
        // return super.makeGuessTime(()=>(highestLowNumber + Math.floor(Math.random() * 
        // (lowestHighNumber - highestLowNumber) + 1))) //Istället för console.log ange en div där värdet skall renderas
        return highestLowNumber + Math.floor(Math.random() * (lowestHighNumber - highestLowNumber) + 1)

    }


}

class DumbBot extends Bot{
    constructor(){
        super("dumbBot")
    }
    guess(){
        // return super.makeGuessTime(()=>(Math.floor(Math.random() * 20) + 1)) //Istället för console.log ange en div där värdet skall renderas
       return Math.floor(Math.random() * 20) + 1
       
    }
    


} 
/* let test = new DumbBot()
test.guess() */
 /* let test2 = new DumbBot()
 let test3 = new SmartBot()
 test2.guess
 test3.guess()

 console.log(test3.guess) */
 

 
 


async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  
  async function sample() {
    console.log('a');
    console.log('waiting...')
    let delayres = await sleep(3000);
    console.log('b');
  }
  


