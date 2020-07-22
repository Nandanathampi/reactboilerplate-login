import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the formButton state domain
 */

const selectFormButtonDomain = state => state.formButton || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by FormButton
 */

const makeSelectFormButton = () =>
  createSelector(
    selectFormButtonDomain,
    substate => substate,
  );

export default makeSelectFormButton;
export { selectFormButtonDomain };
