var outputHtml = document.getElementById("result");    
var result;     
     
for ( x = 1; x <= 100; x ++ ) {       
    if ( x % 3 === 0 && x % 5 === 0) {          
        result = "FizzBuzz <br/>";        
    } else if ( x % 3 === 0) {      
        result = "Fizz <br/>";        
    } else if ( x % 5 === 0) {      
        result = "Buzz <br/>";        
    } else {        
        result = x + " <br/>";        
    } 
    outputHtml.innerHTML += result;      
}       