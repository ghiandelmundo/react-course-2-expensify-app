import moment from 'moment';
import filterReducer from '../../reducers/filters';

test('should setup defaul filter values', () => {
    const state = filterReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        'startDate': moment().startOf('month'),
        'endDate': moment().endOf('month')
    });
});