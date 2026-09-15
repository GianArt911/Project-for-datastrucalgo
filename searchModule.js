// MODULE 1: SEARCH MODULE
//Algorythm used: Linear search (for name) and Binary ( ID )

// Mock Data: Numerical IDs MUST be sorted for Binary Search to work
const inventoryList = [
    { id: 101, name: "Classic Milk Tea", price: 120.00 },
    { id: 105, name: "Taro Milk Tea", price: 130.00 },
    { id: 202, name: "Brown Sugar Boba", price: 140.00 },
    { id: 304, name: "Cheese Fries", price: 85.00 },
    { id: 310, name: "Tapioca Pearls", price: 20.00 }
];

// Linear Search Algorithm: Searches unsorted/partial text matches
function linearSearchByName(list, query) {
    const results = [];
    const searchTerm = query.toLowerCase();
    
    for (let i = 0; i < list.length; i++) {
        if (list[i].name.toLowerCase().indexOf(searchTerm) !== -1) {
            results.push(list[i]);
        }
    }
    return results;
}

// Binary Search Algorithm: Fast O(log N) lookup for sorted numeric IDs
function binarySearchById(sortedList, targetId) {
    let low = 0;
    let high = sortedList.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (sortedList[mid].id === targetId) {
            return [sortedList[mid]];
        } else if (sortedList[mid].id < targetId) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return [];
}

// Main Search Processor: Checks input type and delegates search method
function searchModule(inputQuery) {
    //check if input is numeric (ID) or string (Name)
    const isNumericId = !isNaN(inputQuery) && !isNaN(parseFloat(inputQuery));

    if (isNumericId) {
        console.log(`[Search Module] Executing Binary Search for ID: ${inputQuery}`);
        return binarySearchById(inventoryList, parseInt(inputQuery));
    } else {
        console.log(`[Search Module] Executing Linear Search for Name: "${inputQuery}"`);
        return linearSearchByName(inventoryList, inputQuery);
    }
}

// --- TESTING THE MODULE ---
console.log("=== MODULE 1 TESTS ===");

// Test Binary Search via Numeric ID
const searchResult1 = searchModule("202");
console.log("Result:", searchResult1);

// Test Linear Search via String Name
const searchResult2 = searchModule("Tea");
console.log("Result:", searchResult2);