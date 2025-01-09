function calculateMaturityAmount () {
    //get input values from form elements 

    const principal = parseInt(document.getElementById('Principal').value) 
    const interest = parseInt(document.getElementById('interest').value) 
    const tenure = parseInt(document.getElementById('tenure').value) 




    if (interest > 15 || tenure > 10) {
        alert("we currentlly no not offer what you're looking for")
    } 
    // calculation
    const maturityAmount = principal + (principal * interest * tenure/100 )

    //display result
    document.getElementById('result').innerText = `Maturity Amount: ${"$" + maturityAmount.toFixed(2 )}`
    
}

// attach a listener event to the calculate button 
document.getElementById('calculateBtn').addEventListener('click', calculateMaturityAmount)