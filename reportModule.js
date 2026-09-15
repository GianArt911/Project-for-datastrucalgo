// MODULE 3: REPORT MODULE
// Data Structure: Dynamic Array / List
// Algorithm: QuickSort (Descending Order)

// Mock Historical Sales Dataset
const historicalSales = [
    { name: "Classic Milk Tea", unitsSold: 342, grossRevenue: 41040.00, date: "2026-09-01" },
    { name: "Brown Sugar Boba", unitsSold: 289, grossRevenue: 40460.00, date: "2026-09-01" },
    { name: "Cheese Fries", unitsSold: 180, grossRevenue: 15300.00, date: "2026-09-02" },
    { name: "Taro Milk Tea", unitsSold: 95, grossRevenue: 12350.00, date: "2026-09-03" }
];

// QuickSort Algorithm: Recursively sorts items in descending order based on selected metric
function quickSortDescending(arr, sortByMetric) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1]; // Pick last item as pivot
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        // Higher values placed on left array for descending rank order
        if (arr[i][sortByMetric] > pivot[sortByMetric]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSortDescending(left, sortByMetric), pivot, ...quickSortDescending(right, sortByMetric)];
}

function generateReportModule(startDate, endDate, sortByMetric) {
    console.log(`\n============================================================`);
    console.log(`SALES PERFORMANCE REPORT (${startDate} to ${endDate})`);
    console.log(`Sorted By: ${sortByMetric}`);
    console.log(`============================================================`);

    // 1. Filter dataset by date range
    const reportData = historicalSales.filter(record => record.date >= startDate && record.date <= endDate);

    if (reportData.length === 0) {
        console.log("No transactions found for the specified date range.");
        return;
    }

    // 2. Sort filtered list descending using QuickSort
    const sortedReport = quickSortDescending(reportData, sortByMetric);

    // 3. Output formatted report
    console.log("Rank | Item Name             | Units Sold | Gross Revenue");
    console.log("------------------------------------------------------------");
    sortedReport.forEach((item, index) => {
        console.log(`${index + 1}    | ${item.name.padEnd(21)} | ${String(item.unitsSold).padEnd(10)} | ₱${item.grossRevenue.toFixed(2)}`);
    });
}

// --- TESTING THE MODULE ---
console.log("=== MODULE 3 TESTS ===");

// Generate report sorted by Gross Revenue descending
generateReportModule("2026-09-01", "2026-09-03", "grossRevenue");

// Generate report sorted by Units Sold descending
generateReportModule("2026-09-01", "2026-09-03", "unitsSold");