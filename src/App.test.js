import reducers from './reducers';

test('reducers at initial state', () => {
  let state;
  state = reducers(undefined, {});
  expect(state).toEqual({ cart: [] });
});


test('reducers', () => {
  let state;
  state = reducers({ cart: ['shampoo', 'chocolate'] }, { type: 'add', item: 'chocolate' });
  expect(state).toEqual({ cart: ['shampoo', 'chocolate', 'chocolate'] });
});
