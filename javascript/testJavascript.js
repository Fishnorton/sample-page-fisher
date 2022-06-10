function convert() {


	//Read values in ;)
	let value1 = document.getElementById("num1").value;
	let value2 = document.getElementById("num2").value;


	//Binary to Decimal
	if(document.getElementById('binaryToDecimal').checked){

		const answer =  document.getElementById('answer');
		answer.value = parseInt(value1,2);
		
	}
    

	//Decimal to Binary
	if(document.getElementById('decimalToBinary').checked){

		const answer =  document.getElementById('answer');
		answer.value = parseInt(value1).toString(2);
	}
	

	//Decimal to Hex
	if(document.getElementById('decimalToHex').checked){

		const answer =  document.getElementById('answer');
		answer.value = parseInt(value1).toString(16);
	}


	//Hex to Binary
	if(document.getElementById('hexToBinary').checked){

		const answer =  document.getElementById('answer');
		answer.value = parseInt(value1,16).toString(2);
	}

	//Hex to Decimal
	if(document.getElementById('hexToDecimal').checked){

		const answer =  document.getElementById('answer');
		answer.value = parseInt(value1,16);
	}
	
}