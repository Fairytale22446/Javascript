function findDay() {
    const days = Number(document.getElementById("dayInput").value);
    const resultDiv = document.getElementById("result");

    if (!isNaN(days) && days >= 1) {
        const startDate = new Date("2025-06-01");
        startDate.setDate(startDate.getDate() + (days - 1));

        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const result = dayNames[startDate.getDay()];

        resultDiv.innerHTML = `
            <h2>On day ${days}, it will be <span style="color:yellow">${result}</span></h2>
            <h4>Day ${days} means ${days === 1 ? "June 1, 2025" : `${days - 1} day(s) after June 1, 2025`}</h4>
            <p>Based on accurate calendar dates.</p>
        `;
    } else {
        resultDiv.innerHTML = `<h3>Please enter a valid number (1 or more).</h3>`;
    }
}
