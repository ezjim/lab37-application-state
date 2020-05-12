import reducer from './moodReducer';
import { drinkCoffee, eatSnack } from '../actions/moodActions';

describe('mood reducer', () => {
  it('handles the DRINK_COFFEE case', () => {
    const action = drinkCoffee();
    const initialState = { coffees: 0 };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ coffees: 1 });
  });
  it('handles the EAT_SNACK case', () => {
    const action = eatSnack();
    const initialState = { snacks: 0 };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ snacks: 6 });
  });
});
