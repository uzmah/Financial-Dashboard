// AccountCard.js
import React from 'react';

// Add AccountCard component structure
function AccountCard({ account }) {
    return (
        <div className="account-card">
            <div className="account-name">{account.name}</div>
            <div className="balance">Balance: {account.balance}</div>
            <div className="transactions">
                <strong>Recent Transactions:</strong>
                {account.transactions.map((transaction, index) => (
                    <div key={index} className="transaction-item">
                        <span>{transaction.category}</span>
                        <span>{transaction.amount}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Export the AccountCard component as the default export
export default AccountCard;
