const cashRegister = {
  total: 0,
  itemCount: 0,
  add(itemCost) {
    this.total += itemCost;
  },
  reset() {
    this.total = 0;
    this.itemCount = 0;
    document.getElementById("totalPrice").innerText = " ";
    document.getElementById("scannedItems").innerHTML = "";
    document.getElementById("itemCount").value = "";
  }
};

function scan() {
    let itemCountInput = document.getElementById("itemCount").value;
    cashRegister.itemCount = parseInt(itemCountInput);
    let text = "";

    for (let i = 0; i < cashRegister.itemCount; i++) {
        let itemCost = parseFloat(prompt(`Please enter price of item ${i + 1}`));
        console.log(itemCost);

        itemCost = parseFloat(itemCost);

        // Validate the input and update the list
        if (!isNaN(itemCost) && itemCost > 0) {
            cashRegister.add(itemCost);
            text += `<li>Item ${i + 1}: $${itemCost.toFixed(2)}</li>`;
        } 
        if (itemCost === null) {
            alert("Scanning canceled.");
            return; // End the function immediately
        }
    }
    
    document.getElementById("scannedItems").innerHTML = text;
}


function printTotal(){
	document.getElementById("totalPrice").innerHTML = cashRegister.total.toFixed(2);
}

function resetAll() {
  cashRegister.reset();
}

document.getElementById("ScanButton").addEventListener("click", scan);
document.getElementById("PrintButton").addEventListener("click", printTotal);
document.getElementById("ResetButton").addEventListener("click", resetAll)