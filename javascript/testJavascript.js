function convert() {


	//Read values in ;)
	let value1 = document.getElementById("num1").value;

	//Binary to Decimal
	if(document.getElementById("coversionLeft").value == "binary" && 
		document.getElementById("coversionRight").value == "decimal"){

		const answer =  document.getElementById('answer');
		answer.value = parseInt(value1,2);
		
	}

	//Decimal to Binary
	if(document.getElementById("coversionLeft").value == "decimal" && 
		document.getElementById("coversionRight").value == "binary"){

		const answer =  document.getElementById('answer');
		answer.value = parseInt(value1).toString(2);
	}
	

	//Decimal to Hex
	if(document.getElementById("coversionLeft").value == "decimal" && 
		document.getElementById("coversionRight").value == "hex"){

		const answer =  document.getElementById('answer');
		answer.value = parseInt(value1).toString(16);
	}


	//Hex to Binary
	if(document.getElementById("coversionLeft").value == "hex" && 
		document.getElementById("coversionRight").value == "binary"){

		const answer =  document.getElementById('answer');
		answer.value = parseInt(value1,16).toString(2);
	}

	//Hex to Decimal
	if(document.getElementById("coversionLeft").value == "hex" && 
		document.getElementById("coversionRight").value == "decimal"){

		const answer =  document.getElementById('answer');
		answer.value = parseInt(value1,16);
	}

	//Binary to Hex
	if(document.getElementById("coversionLeft").value == "binary" && 
		document.getElementById("coversionRight").value == "hex"){

		const answer =  document.getElementById('answer');
		answer.value = parseInt(value1, 2).toString(16);
	}

	//Decimal to Decimal
	if(document.getElementById("coversionLeft").value == "decimal" && 
		document.getElementById("coversionRight").value == "decimal"){

		answer.value = value1;
	}

	//Hex to Hex
	if(document.getElementById("coversionLeft").value == "hex" && 
		document.getElementById("coversionRight").value == "hex"){

		answer.value = value1;
	}

	//Binary to Binary
	if(document.getElementById("coversionLeft").value == "binary" && 
		document.getElementById("coversionRight").value == "binary"){

		answer.value = value1;
	}
	
}