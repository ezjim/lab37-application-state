import reducer from './moodReducer';
import { drinkCoffee, eatSnack, takeNap, goStudy } from '../actions/moodActions';

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
    expect(newState).toEqual({ snacks: 1 });
  });

  it('handles the TAKE_NAP case', () => {
    const action = takeNap();
    const initialState = { naps: 1 };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ naps: 2 });
  });

  it('handles the STUDY case', () => {
    const action = goStudy();
    const initialState = { study: 5 };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ study: 6 });
  });
});
