console.log("8 * null =", 8 * null); 
console.log('"5" - 1 =', "5" - 1); 
console.log('"5" + 1 =', "5" + 1); 
console.log('"five" * 2 =', "five" * 2); 
console.log("false == 0 =", false == 0); 
console.log("5 > 2 && 6 > 3 =", 5 > 2 && 6 > 3); 
console.log('false == false ? "equal" : "not equal" =', false == false ? "equal" : "not equal"); 
console.log("true || false =", true || false);

function appendResult(text) {
    const resultsDiv = document.getElementById('results');
    const h2 = document.createElement('h2');
    h2.textContent = text;
    resultsDiv.appendChild(h2);
}

appendResult(`8 * null = ${8 * null}`); 
appendResult(`"5" - 1 = ${"5" - 1}`); 
appendResult(`"5" + 1 = ${"5" + 1}`); 
appendResult(`"five" * 2 = ${"five" * 2}`); 
appendResult(`false == 0 = ${false == 0}`); 
appendResult(`5 > 2 && 6 > 3 = ${5 > 2 && 6 > 3}`); 
appendResult(`false == false ? "equal" : "not equal" = ${false == false ? "equal" : "not equal"}`); 
appendResult(`true || false = ${true || false}`);