import React from 'react';
import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react';
import './../styles/newtransaction.css';

const Newtransaction = ({ setTransaction }) => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState();
    const [state, setState] = useState(true);

    useEffect(() => {

        const realAmount = isNaN(amount) ? 0 : amount;

        const transaction = {
            id: Math.floor(Math.random() * 10000),
            type: type,
            purpose: text,
            amount: Number(realAmount)
        };

        if (type !== undefined && text !== '' && amount !== '') {
            setTransaction(pre => [transaction, ...pre]);
        }

        setAmount('')
        setText('')

    }, [state])

    const addTransaction = (e) => {
        setType(e.target.value);
        setState(!state);
    };


    return (
        <>
            <input type="text" className='purpose' value={text} placeholder='Add Purpose...' onChange={(e) => setText(e.target.value)} />
            <input type="text" className='amount' value={amount} placeholder='Add Amount...' onChange={(e) => setAmount(e.target.value)} />
            <div className="buttons">
                <button className="sub" onClick={addTransaction} value="expense" ><i className="fas fa-minus"></i></button>
                <button className="add" onClick={addTransaction} value="income" ><i className="fas fa-plus"></i></button>
            </div>
        </>
    )
};

export default Newtransaction;