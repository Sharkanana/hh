import { createActions } from 'reduxsauce'

/**
 * Plan Actions
 */
const { Types, Creators } = createActions({
  // Fetch plan information
  fetchPlan: ['location'],
  // The operation has started and is loading
  fetchPlanLoading: null,
  // Plan information was successfully fetched
  fetchPlanSuccess: ['plan'],
  // An error occurred
  fetchPlanFailure: ['errorMessage'],
});

export const PlanTypes = Types;
export default Creators
