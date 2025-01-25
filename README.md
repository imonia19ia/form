<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Expense Tracker</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Expense Tracker</h1>
        <form id="expense-form">
            <input type="text" id="item" placeholder="Item" required>
            <input type="number" id="amount" placeholder="Amount" required>
            <button type="submit">Add Expense</button>
        </form>
        <ul id="expense-list"></ul>
    </div>
    <script src="app.js"></script>
</body>
</html>
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}
.container {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
h1 {
    margin-bottom: 20px;
}
form {
    display: flex;
    flex-direction: column;
}
input {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
}
button {
    padding: 10px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
button:hover {
    background-color: #218838;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    background: #f8f9fa;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
}
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