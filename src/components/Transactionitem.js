import React from 'react';
import './../styles/transactionlist.css';

const TransactionItem = ({ data, setTransaction, transaction }) => {

    const income = {
        color: 'green',
        borderColor: 'green'
    };

    const expense = {
        color: 'red',
        borderColor: 'red'
    };

    const style = data.type === "income" ? income : expense;

    const deleteTransaction = (id)=> {

        const remainingList = transaction.filter((elem)=> {
            return elem.id !==id
        });

        setTransaction(remainingList);
    }

    return (
        <>
            <div style={style} className='listItem'><span><i class="fas fa-trash" onClick={()=>deleteTransaction(data.id)}></i></span><span className='dataPurpose'>{data.purpose}</span><span className='dataAmount'>{data.amount}</span></div>
        </>
    )
};

export default TransactionItem;