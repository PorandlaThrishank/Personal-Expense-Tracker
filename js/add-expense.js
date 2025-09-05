// This file handles the logic for adding new expenses, including form validation and LocalStorage integration.

document.addEventListener('DOMContentLoaded', function() {
    const expenseForm = document.getElementById('expense-form');
    const expenseNameInput = document.getElementById('expense-name');
    const expenseAmountInput = document.getElementById('expense-amount');
    const expenseDateInput = document.getElementById('expense-date');

    expenseForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const expenseName = expenseNameInput.value.trim();
        const expenseAmount = parseFloat(expenseAmountInput.value.trim());
        const expenseDate = expenseDateInput.value.trim();

        if (expenseName === '' || isNaN(expenseAmount) || expenseAmount <= 0 || expenseDate === '') {
            alert('Please fill in all fields with valid data.');
            return;
        }

        const expense = {
            name: expenseName,
            amount: expenseAmount,
            date: expenseDate
        };

        addExpenseToLocalStorage(expense);
        expenseForm.reset();
        alert('Expense added successfully!');
    });

    function addExpenseToLocalStorage(expense) {
        let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
        expenses.push(expense);
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }
});