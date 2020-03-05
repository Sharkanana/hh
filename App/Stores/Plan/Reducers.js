/**
 * Plan Reducer
 */
import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { PlanTypes } from './Actions'

export const fetchPlanLoading = (state) => ({
  ...state,
  planIsLoading: true,
  planErrorMessage: null,
});

export const fetchPlanSuccess = (state, { plan }) => ({
  ...state,
  plan: plan,
  planIsLoading: false,
  planErrorMessage: null,
});

export const fetchPlanFailure = (state, { errorMessage }) => ({
  ...state,
  plan: {},
  planIsLoading: false,
  planErrorMessage: errorMessage,
});

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [PlanTypes.FETCH_PLAN_LOADING]: fetchPlanLoading,
  [PlanTypes.FETCH_PLAN_SUCCESS]: fetchPlanSuccess,
  [PlanTypes.FETCH_PLAN_FAILURE]: fetchPlanFailure,
});
