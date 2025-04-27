const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Function to calculate EMI
function calculateEMI(principal, annualRate, tenureYears) {
    const monthlyRate = (annualRate / 12) / 100;
    const tenureMonths = tenureYears * 12;
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
                (Math.pow(1 + monthlyRate, tenureMonths) - 1);
    return emi.toFixed(2);
}

app.get('/', (req, res) => {
    res.send('Home Loan EMI Calculator API');
});

app.get('/calculate', (req, res) => {
    const { principal, rate, tenure } = req.query;

    if (!principal || !rate || !tenure) {
        return res.status(400).json({ error: "Please provide principal, rate, and tenure parameters." });
    }

    const emi = calculateEMI(Number(principal), Number(rate), Number(tenure));
    res.json({ principal, rate, tenure, emi });
});

app.listen(PORT, () => {
    console.log(`EMI Calculator app listening on port ${PORT}`);
});
