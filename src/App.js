// App.js
import React from 'react';

// Import AccountCard component
import AccountCard from './components/AccountCard';

// Sample account data
const accounts = [
    {
        name: "Savings Account",
        balance: "$5,400",
        transactions: [
            { category: "Groceries", amount: "$50" },
            { category: "Utilities", amount: "$120" },
        ],
    },
    {
        name: "Checking Account",
        balance: "$1,200",
        transactions: [
            { category: "Dining", amount: "$30" },
            { category: "Transport", amount: "$15" },
        ],
    },
];

function App() {
    return (
        <div className="container">
            <div className="header">Financial Dashboard</div>
            {accounts.map((account, index) => (
                <AccountCard key={index} account={account} />
            ))}
        </div>
    );
}

// Export App component for use in other parts of the project
export default App;
