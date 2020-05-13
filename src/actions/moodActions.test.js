import { DRINK_COFFEE, drinkCoffee, eatSnack, EAT_SNACK, takeNap, TAKE_NAP, goStudy, STUDY, getDrunk, GET_DRUNK } from './moodActions';

describe('mood actions', () => {
  it('does a DRINK_COFFEE action', () => {
    const action = drinkCoffee();
    expect(action).toEqual({ type: DRINK_COFFEE });
  });

  it('creates an EAT_SNACK action', () => {
    const action = eatSnack();
    expect(action).toEqual({ type: EAT_SNACK });
  });

  it('creates a TAKE_NAP action', () => {
    const action = takeNap();
    expect(action).toEqual({ type: TAKE_NAP });
  });

  it('creates a STUDY action', () => {
    const action = goStudy();
    expect(action).toEqual({ type: STUDY });
  });

  it('creates a GET_DRUNK action', () => {
    const action = getDrunk();
    expect(action).toEqual({ type: GET_DRUNK });
  });
});
