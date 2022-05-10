import React from 'react';
import TransactionItem from './Transactionitem';
import './../styles/transactionlist.css';

const Transactionlist = ({ transaction, setTransaction })=> {
    return(
        <>
         <div className="transactionList">
         {
             
             transaction.map((elem,i)=> {
                 return(
                     <TransactionItem data={elem} setTransaction={setTransaction} transaction={transaction} key={transaction[i].id} />
                 )
             })
         }
         </div>
        </>
    )
};

export default Transactionlist;