function calculateAndDisplay() {
    // Get the values from the HTML form
    let bill = parseFloat(document.getElementById('totalBill').value)
    let numofPPL = parseInt(document.getElementById('numofPPL').value)
    let serviceQuality = document.getElementById('serviceQuality').value

    //Calculate tip, total Bill and the Amount each person owes

    let tip = calculateAndDisplay(bill, serviceQuality)
    let bill = calculateTotalBill(bill, tip)
    let amtPerPers calcAmtPerPers(totalBill, numofPPL)

    //Display the Results in the HTML
    
    document.getElementById('tipResult').innerText = 'Tip: $' + tip.toFixed(2)
    document.getElementById('totalBillResult').innerText = 'Bill: $' + bill.toFixed(2)
    document.getElementById('amtPerPers').innerText = 'Amount Per Person: $' + amtPerPers.toFixed(2)
}