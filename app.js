document.getElementById('expense-form').addEventListener('submit', addExpense);

function addExpense(e) {
    e.preventDefault();

    const item = document.getElementById('item').value;
    const amount = document.getElementById('amount').value;
    
    const expenseList = document.getElementById('expense-list');
    const li = document.createElement('li');
    li.textContent = `${item}: $${amount}`;
    expenseList.appendChild(li);

    document.getElementById('item').value = '';
    document.getElementById('amount').value = '';
}