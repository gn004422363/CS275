// Stores sequence of fib numbers
var fib_arr = [];

// Calculate fibonacci sequence and generate table of sequence
function fib_val(){
	var inStr = document.getElementById("inputbox").value;
	var inInt = parseInt(inStr);
	
	// Check input is a valid number
	if(isNaN(inInt)){
		result.innerHTML = "<b>Invalid Input</b>";
		return;
	}
	else if(inInt < 0){
		result.innerHTML = "<b>Cannot compute Fib of a negative integer</b>";
		return;
	}
	else{
		// Cases for 0 and 1
		if(inInt == 0 || inInt == 1){
			if(inInt == 0){
				fib_arr.push(0);
			}
			else{
				fib_arr.push(0);
				fib_arr.push(1);
			}
			//Send results to html
			result.innerHTML = "<p>Fibonacci Value: " + inInt.toString() + "</p>\n" + fib_table();
		}
		//Generation values that is 2 or above
		else{
			var prev = 0, next = 1, res = 0;
			fib_arr.push(0);
			fib_arr.push(1);
			for(i=1; i<inInt; i++){
				res = prev+next;
				fib_arr.push(res);
				prev = next;
				next = res;
			}
			//Send results to html
			result.innerHTML = "<p>Fibonacci Value: " + res.toString() + "</p>\n" + fib_table();
		}
		//C Empty the list before generate a new table
		fib_arr = [];
	}
}

// Output html table
function fib_table(){
	var htmlTable = "<table border='1'><tr><th>n</th><th>fib(n)</th></tr>";
	for(i=0; i<fib_arr.length; i++){
		htmlTable += "<tr><td>" + i.toString() + "</td><td>" + fib_arr[i].toString() + "</td></tr>";
	}
	htmlTable += "</table>"
	return htmlTable;
}