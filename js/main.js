// main.js

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    loadExpenses();
    setupEventListeners();
});

function setupEventListeners() {
    // Add event listeners for navigation and other interactions
    const addExpenseButton = document.getElementById('add-expense-button');
    if (addExpenseButton) {
        addExpenseButton.addEventListener('click', function() {
            window.location.href = 'add-expense.html';
        });
    }

    const viewExpensesButton = document.getElementById('view-expenses-button');
    if (viewExpensesButton) {
        viewExpensesButton.addEventListener('click', function() {
            window.location.href = 'view-expenses.html';
        });
    }

    const summaryButton = document.getElementById('summary-button');
    if (summaryButton) {
        summaryButton.addEventListener('click', function() {
            window.location.href = 'summary.html';
        });
    }
}

function loadExpenses() {
    // Load expenses from LocalStorage and display them
    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    const expenseList = document.getElementById('expense-list');
    
    if (expenseList) {
        expenseList.innerHTML = '';
        expenses.forEach(expense => {
            const li = document.createElement('li');
            li.textContent = `${expense.name}: $${expense.amount}`;
            expenseList.appendChild(li);
        });
    }
}