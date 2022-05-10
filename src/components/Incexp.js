import React from "react";
import './../styles/incexp.css';

const Incexp = ({ transaction }) => {

    const totalExpense = transaction.filter((elem) => {
        return elem.type === "expense"
    }).reduce((acc, elem) => {
        acc -= elem.amount;
        return acc
    }, 0);

    const totalIncome = transaction.filter((elem) => {
        return elem.type === "income"
    }).reduce((acc, elem) => {
        acc += elem.amount;
        return acc
    }, 0);


    return (
        <>
            <div className="transactionContainer">
                <div className="incomeBox">
                    <span className="incomeText">Income</span>
                    <span className="incomeAmount">₹{totalIncome}</span>
                </div>
                <div className="expenseBox">
                    <span className="expenseText">Expense</span>
                    <span className="expenseAmount">₹{totalExpense * -1}</span>
                </div>
            </div>
        </>
    )
};

export default Incexp;