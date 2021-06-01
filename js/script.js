var outputHtml = document.getElementById("result");    
     
for ( x = 1; x <= 100; x ++ ) {       
    if ( x % 3 === 0 && x % 5 === 0) {          
        outputHtml.innerHTML += "FizzBuzz <br/>";        
    } else if ( x % 3 === 0) {      
        outputHtml.innerHTML += "Fizz <br/>";        
    } else if ( x % 5 === 0) {      
        outputHtml.innerHTML += "Buzz <br/>";        
    } else {        
        outputHtml.innerHTML += x + " <br/>";        
    }       
}       