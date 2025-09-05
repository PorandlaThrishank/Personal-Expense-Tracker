// view-expenses.js

document.addEventListener('DOMContentLoaded', function() {
    const expenseList = document.getElementById('expense-list');
    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    function renderExpenses() {
        expenseList.innerHTML = '';
        expenses.forEach((expense, index) => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
            listItem.innerHTML = `
                ${expense.description} - $${expense.amount}
                <button class="btn btn-danger btn-sm" onclick="deleteExpense(${index})">Delete</button>
            `;
            expenseList.appendChild(listItem);
        });
    }

    window.deleteExpense = function(index) {
        expenses.splice(index, 1);
        localStorage.setItem('expenses', JSON.stringify(expenses));
        renderExpenses();
    };

    renderExpenses();
});