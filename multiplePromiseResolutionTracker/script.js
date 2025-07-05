// Select the table body element
const output = document.getElementById("output");

// Show loading row initially
const loadingRow = document.createElement("tr");
const loadingCell = document.createElement("td");
loadingCell.setAttribute("colspan", "2");
loadingCell.textContent = "Loading...";
loadingRow.id = 'loading'
loadingRow.appendChild(loadingCell);
output.appendChild(loadingRow);


// Helper function to create a promise that resolves after a random delay
function createTimedPromise(index) {
  const delay = Math.random() * 2000 + 1000; // 1000ms to 3000ms
  const startTime = performance.now();

  return new Promise((resolve) => {
    setTimeout(() => {
      const endTime = performance.now();
      const timeTaken = ((endTime - startTime) / 1000).toFixed(3);
      resolve({ name: `Promise ${index}`, time: parseFloat(timeTaken) });
    }, delay);
  });
}

// Create 3 promises
const promises = [1, 2, 3].map((i) => createTimedPromise(i));
const allStartTime = performance.now();

Promise.all(promises).then((results) => {
  const allEndTime = performance.now();
  const totalTime = ((allEndTime - allStartTime) / 1000).toFixed(3);

  // Clear "Loading..." row
  output.innerHTML = "";

  // Add each promise result row
  results.forEach((result) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = result.name;

    const timeCell = document.createElement("td");
    timeCell.textContent = result.time.toFixed(3);

    row.appendChild(nameCell);
    row.appendChild(timeCell);
    output.appendChild(row);
  });

  // Add total row
  const totalRow = document.createElement("tr");

  const totalLabel = document.createElement("td");
  totalLabel.textContent = "Total";

  const totalTimeCell = document.createElement("td");
  totalTimeCell.textContent = totalTime;

  totalRow.appendChild(totalLabel);
  totalRow.appendChild(totalTimeCell);
  output.appendChild(totalRow);
});
