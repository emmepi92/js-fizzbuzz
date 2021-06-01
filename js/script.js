for ( x = 1; x <= 100; x ++ ) {       
    if ( x % 3 === 0 && x % 5 === 0) {          
        document.getElementById("result").innerHTML += "FizzBuzz <br/>";        
    } else if ( x % 3 === 0) {      
        document.getElementById("result").innerHTML += "Fizz <br/>";        
    } else if ( x % 5 === 0) {      
        document.getElementById("result").innerHTML += "Buzz <br/>";        
    } else {        
        document.getElementById("result").innerHTML += x + " <br/>";        
    }       
}       