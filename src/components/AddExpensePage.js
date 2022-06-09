import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpensePage = (props) => {
    let history = useNavigate();
    return (
        <div>
            <h1>Add Expense</h1>
            <ExpenseForm 
                onSubmit={(expense) => {
                    props.dispatch(addExpense(expense));
                    history('/');
                }}
            />
        </div>
    )
};

export default connect()(AddExpensePage);