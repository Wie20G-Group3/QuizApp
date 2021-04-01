 

 class Bot {
    constructor(name){
    this.name=name
    }
    // not used at the moment
     makeGuessTime(guess){
       return setTimeout(guess,  Math.floor(Math.random() * 4500) + 1000)
    } 
}


class SmartBot extends Bot{
    constructor(){
        super("smartBot")
    }
    //Makes smart guess
    guess(highestLowNumber, lowestHighNumber){
        let guess = highestLowNumber + (Math.floor(Math.random() * (lowestHighNumber - highestLowNumber)) + 1)
        console.log(guess)
        if(guess===highestLowNumber){
            
            return guess+1
        }else if(guess===lowestHighNumber){
            
            return guess-1
        }else{
        
        return guess
        }
    }


}

class DumbBot extends Bot{
    constructor(){
        super("dumbBot")
    }
    //Makes dumb guess
    guess(){
       
        return Math.floor(Math.random() * 20) + 1
       
    }
} 

 


