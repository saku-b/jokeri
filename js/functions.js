const rowBtn = document.getElementById('row-btn');
const jokeriTable = document.getElementById('jokeri-table');
const rowCounter = document.getElementById('row-count');

let rowCount = 0;

rowBtn.addEventListener('click', addRow);

function addRow() {
    const newRow = document.createElement('tr');

    for (let i = 0; i < 7; i++) {
        const newCell = document.createElement('td');
        const randomNum = Math.floor(Math.random() * 10);
        newCell.textContent = randomNum;
        newRow.appendChild(newCell);
    }

    jokeriTable.appendChild(newRow);

    rowCount++;
    rowCounter.textContent = rowCount;
}


