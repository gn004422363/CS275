// File: server.js
// Purpose: To process input and either generate the factorial or summation of the input value
// Author: Man Tik Li


// Imports
var express = require('express');
var http = require('http');
var app = express();

//refer to local dir
app.use(express.static("."));

// Process a factorial request
app.get('/fact', function (req,res){
    // Return JS object
    var seed = req.query.seed;

    // Write message to the console
    console.log("Factorial request, seed is " + seed);
    
	// Display when input is empty
	if(seed == ""){
		res.send("Enter the seed first!");
    }
    // Display when input is not int type
	else if(!isInt(seed)){
		res.send("Input not an integer!");
    }
    // Display when input is less than 0
	else if(seed < 0){
		res.send("Input must be positive integer!");
    }
    //Display factorial result
	else{
		var result = 1;
		for(i=1; i<=seed; i++){
			result *= i;
		}
		console.log("Sending factorial result: " + result + "\n");
		res.send("The factorial of " + seed + " is " + result);
	}
})

// Process a summation request
app.get('/sum', function (req,res){
    // Return JS object 
    var seed = req.query.seed;
    
    // Write message to the console
    console.log("Summation request, seed is " + seed);
    
	// Display when input is empty
	if(seed == ""){
		res.send("Enter the seed first!");
    }
    // Display when input is not an integer
	else if(!isInt(seed)){
		res.send("Input not an integer!");
    }
    // Display when input is less than 0
	else if(seed < 0){
		res.send("Input must be positive integer!");
    }
    // Display summation result
	else{
		var result = 0;
		for(i=0; i<=seed; i++){
			result += i;
		}
		console.log("Sending summation result: " + result + "\n");
		res.send("The summation of " + seed + " is " + result);
	}
})

//Any other URL request will redirect to the main --and only-- page
app.get('*',function (req, res) {
	res.redirect('./ml3546_HW3.html');
});

//Create the server at port 8080
app.listen(8080,function(){

    //Output to console that the server is running
	console.log('Node server is running...');
});

//returns true if value is an integer
function isInt(value) {
  return !isNaN(value) && parseInt(Number(value)) == value && !isNaN(parseInt(value, 10));
}