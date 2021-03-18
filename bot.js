class Bot {
    constructor(name){
    this.name=name
    }
    makeGuessTime(guess){
       return setTimeout(guess,  Math.floor(Math.random() * 8000) + 2000)
    }
}

let highestLowNumber = 12
let lowestHighNumber = 16
class SmartBot extends Bot{
    constructor(){
        super("Smart Bot")
    }
    guess(){
        return super.makeGuessTime(()=>console.log(highestLowNumber + Math.floor(Math.random() * 
        (lowestHighNumber - highestLowNumber) + 1))) //Istället för console.log ange en div där värdet skall renderas

    }


}

class DumbBot extends Bot{
    constructor(){
        super("Not so smart Bot")
    }
    guess(){
        return super.makeGuessTime(()=>console.log((Math.floor(Math.random() * 20) + 1))) //Istället för console.log ange en div där värdet skall renderas
    }
    


}
/* let test = new DumbBot()
test.guess() */
let test2 = new SmartBot()
test2.guess()

