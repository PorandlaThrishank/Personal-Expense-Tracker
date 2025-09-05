// This file contains the logic for calculating and displaying the summary of expenses.
// It retrieves expenses from LocalStorage, calculates totals, and updates the UI accordingly.

document.addEventListener('DOMContentLoaded', function() {
    const expenseSummary = document.getElementById('expense-summary');
    const totalExpenses = document.getElementById('total-expenses');
    const expenseList = document.getElementById('expense-list');

    function loadExpenses() {
        const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
        return expenses;
    }

    function calculateTotal(expenses) {
        return expenses.reduce((total, expense) => total + expense.amount, 0);
    }

    function displaySummary() {
        const expenses = loadExpenses();
        const total = calculateTotal(expenses);
        
        totalExpenses.textContent = `Total Expenses: $${total.toFixed(2)}`;
        
        expenseList.innerHTML = '';
        expenses.forEach(expense => {
            const listItem = document.createElement('li');
            listItem.textContent = `${expense.description}: $${expense.amount.toFixed(2)}`;
            expenseList.appendChild(listItem);
        });
    }

    displaySummary();
});