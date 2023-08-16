let rowNumber = 6

document.getElementById("add-button").addEventListener("click", () => {
    const table = document.getElementById("main-table");
    const newRow = table.insertRow(table.rows.length);

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);

    cell1.textContent = rowNumber;
    cell1.style.textAlign = 'right'
    cell2.innerHTML = '<input type="text" style="width: 300px;">';
    cell3.innerHTML = '<input type="text" style="width: 100px;">';
    cell4.innerHTML = '<input type="text" style="width: 100px;">';
    cell5.innerHTML = '<input type="text" style="width: 670px;">';

    rowNumber = rowNumber + 1;
});


document.getElementById("clear-button").addEventListener("click", () => {
    const table = document.getElementById("main-table");
    
    while (table.rows.length > 6) {
        table.deleteRow(6);
    }

    const sizes = [
        {width1: "100px", width2: "150px"}
    ];

    const accountInput = document.querySelectorAll(".account-input");
    accountInput.forEach((inputBox) => {
        inputBox.value = ""
    });

    const cdInput = document.querySelectorAll(".cd-input");
    cdInput.forEach((inputBox) => {
        inputBox.value = ""
    });

    const descriptionInput = document.querySelectorAll(".description-input");
    descriptionInput.forEach((inputBox) => {
        inputBox.value = ""
    });

    rowNumber = 6
});