import { put, call } from 'redux-saga/effects'
import PlanActions from 'App/Stores/Plan/Actions'
import { planService } from 'App/Services/PlanService'
import NavigationService from "../Services/NavigationService";

/**
 * Saga for plans
 */
export function* fetchPlan({location}) {

  yield put(PlanActions.fetchPlanLoading());

  // Fetch plan information from an API
  const plan = yield call(planService.fetchPlan, location);

  if (plan) {
    yield put(PlanActions.fetchPlanSuccess(plan));
    NavigationService.navigate('PlanOverview');
  }
  else {
    yield put(
      PlanActions.fetchPlanFailure('There was an error while creating plan.')
    )
  }
}
