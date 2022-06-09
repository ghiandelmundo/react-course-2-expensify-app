import React from 'react';
import { connect, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
    let history = useNavigate();
    let { id } = useParams();
    const expense = props.expenses.find((expense) => expense.id === id);
    return (
        <div>
            <ExpenseForm 
                expense={expense}
                onSubmit={(expense) => {
                    props.dispatch(editExpense(id, expense));
                    history('/');
                }}
            />
            <br />
            <button onClick={() => {
                props.dispatch(removeExpense({ id }));
                history('/');
            }}>Remove</button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        expenses: state.expenses
    };
}

export default connect(mapStateToProps)(EditExpensePage);