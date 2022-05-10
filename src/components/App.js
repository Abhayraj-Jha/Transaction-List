import React from "react";
import Incexp from "./Incexp";
import Newtransaction from "./Newtransaction";
import Transactionlist from "./Transactionlist";

import { useState } from "react";

import './../styles/app.css';

const App = () => {

    const [transaction, setTransaction] = useState([
    ]);

    const balance = transaction.reduce((acc, elem) => {
        if (elem.type === "income") {
            acc += elem.amount;
        }
        else {
            acc -= elem.amount;
        }
        return acc
    }, 0);

    return (
        <>
            <div className="mainHeading">
                TRANSACTIONS LIST
            </div>
            <div className="mainContainer">
                <div className="left">
                    <div className="balance">
                        Balance: ₹{balance}
                    </div>
                    <div className="incExp">
                        <Incexp transaction={transaction} balance={balance} />
                    </div>
                    <div className="newTransaction">
                        <div className="newText">
                            New Transaction
                        </div>
                        <Newtransaction setTransaction={setTransaction} />
                    </div>
                </div>
                <div className="right">
                    <div className="rightHeading">
                        Transaction History
                    </div>
                    <Transactionlist transaction={transaction} setTransaction={setTransaction} />
                </div>

            </div>
        </>
    )
}

export default App;