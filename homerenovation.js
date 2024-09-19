// function decalration to paint and supplies
function addPaintAndSupplies(totalCost, callback) {
    let cost = prompt("Enter the cost for paint and supplies (Max $200):");
    cost = parseFloat(cost);

    if (cost > 200) {
        alert("The maximum allowed for paint and supplies is $200.");
        return totalCost; 
    }

    if (cost > 100) {
        cost *= 1.1; 
    }

    // update the section
    let paintArea = document.querySelector(".paint");
    paintArea.innerHTML = `Paint & Supplies: $${cost.toFixed(2)}`;

    let newTotal = totalCost + cost;
    callback(newTotal);
    return newTotal;
}

// Arrow function to handle furniture calculation
const addFurniture = (totalCost, callback) => {
    let cost = prompt("Enter the cost for furniture (Max $2000):");
    cost = parseFloat(cost);

    if (cost > 2000) {
        alert("The maximum allowed for furniture is $2000.");
        return totalCost;
    }

    if (cost < 500) {
        cost *= 0.9; 
    }

    //update the section
    let furnitureArea = document.querySelector(".furniture");
    furnitureArea.innerHTML = `Furniture: $${cost.toFixed(2)}`;

    let newTotal = totalCost + cost;
    callback(newTotal);
    return newTotal;
};

// Function expression to handle floor coverings
const addFloorCovering = function (totalCost, callback) {
    let cost = prompt("Enter the cost for floor coverings (Max $2000):");
    cost = parseFloat(cost);

    if (cost > 2000) {
        alert("The maximum allowed for floor coverings is $2000.");
        return totalCost;
    }

    if (cost < 500) {
        cost *= 0.85; 
    }
    //update the section

    let floorArea = document.querySelector(".floorCovering");
    floorArea.innerHTML = `Floor Coverings: $${cost.toFixed(2)}`;

    let newTotal = totalCost + cost;
    callback(newTotal);
    return newTotal;
};

// Callback function to update the total cost
const updateTotals = (cost) => {
    let totalsArea = document.querySelector(".totalCost");
    totalsArea.innerHTML = `Total Cost: $${cost.toFixed(2)}`;
};

// Initialize total cost
let totalCost = 0;

// Call each function with the callback to update the total cost
totalCost = addPaintAndSupplies(totalCost, updateTotals);
totalCost = addFloorCovering(totalCost, updateTotals);
totalCost = addFurniture(totalCost, updateTotals);
