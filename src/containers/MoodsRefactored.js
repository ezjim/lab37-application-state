import React from 'react';
import Face from '../App';
import { drinkCoffee, eatSnack, takeNap, study } from '../actions/moodActions';
import { getFace } from '../selectors/moodSelector';
import { useDispatch, useSelector } from 'react-redux';
import Controls from '../components/controls/Controls';

const Moods = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const face = getFace(state);

  const actionsArray = [
    { name: 'Drink Coffee', count: state.coffees, bindActionCreator: () => dispatch(drinkCoffee()) },
    { name: 'Eat Snack', count: state.snacks, bindActionCreator: () => dispatch(eatSnack()) },
    { name: 'Take Nap', count: state.naps, bindActionCreator: () => dispatch(takeNap()) },
    { name: 'Study', count: state.study, bindActionCreator: () => dispatch(study()) 
    }];

  return (
    <>
      <Controls actions={actionsArray}/>
      <Face emojis={face} />
    </>
  );
};
export default Moods;
