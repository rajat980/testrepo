// Install express first with: npm install express

const express = require('express');
const app = express();
app.use(express.json());

// EMI Calculator Function
function calculateEMI(principal, annualInterestRate, tenureMonths) {
    const monthlyInterestRate = (annualInterestRate / 12) / 100;
    const emi = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenureMonths)) / 
                (Math.pow(1 + monthlyInterestRate, tenureMonths) - 1);
    return emi;
}

// API Endpoint
app.post('/calculate-emi', (req, res) => {
    const { principal, annualInterestRate, tenureYears } = req.body;

    if (!principal || !annualInterestRate || !tenureYears) {
        return res.status(400).json({ error: "Please provide principal, annualInterestRate, and tenureYears" });
    }

    const tenureMonths = tenureYears * 12;
    const emi = calculateEMI(principal, annualInterestRate, tenureMonths);

    res.json({
        principal: principal,
        annualInterestRate: annualInterestRate,
        tenureYears: tenureYears,
        emi: emi.toFixed(2),
        totalPayment: (emi * tenureMonths).toFixed(2),
        totalInterest: ((emi * tenureMonths) - principal).toFixed(2)
    });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`EMI Calculator running on port ${PORT}`);
});
