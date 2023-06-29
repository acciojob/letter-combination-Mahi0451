function letterCombinations(input) {
  //Complete the function
	let table={
		"2":"abc",
		"3":"def",
		"4":"ghi",
		"5":"jkl",
		"6":"mno",
		"7":"pqrs",
		"8":"tuv",
	    "9":"wxyz"
	}
let solution=[];

	function solve(currindex,calculatedString){
		if(input.lenght<=currindex){
			solution.push(calculatedString);
			return;
		}
		let currchar=input[currindex];

		for(let i=0;i<table[currchar].length;i++){
			solve(currindex+1,calculatedString+table[currchar][i]);
			
		}
	}
	solve(0,"");
	return solution;
	
	
}

module.exports = letterCombinations;