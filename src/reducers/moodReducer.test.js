import reducer from './moodReducer';
import { drinkCoffee } from '../actions/moodActions';

describe('mood reducer', () => {
  it('handles the DRINK_COFFEE case', () => {
    const action = drinkCoffee();
    const initialState = { coffees: 0 };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ coffees: 1 });
  });
});
