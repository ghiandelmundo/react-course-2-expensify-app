import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider }from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    //console.log(visibleExpenses);
});

store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 100950 }));

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000);

const jsx = (   
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

createRoot(document.getElementById('app')).render(jsx);