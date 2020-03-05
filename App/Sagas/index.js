import { takeLatest, all } from 'redux-saga/effects'
import { StartupTypes } from 'App/Stores/Startup/Actions'
import { startup } from './StartupSaga'
import {PlanTypes} from "../Stores/Plan/Actions";
import {fetchPlan} from "./PlanSaga";

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),
    // Call `fetchPlan()` when a `FETCH_PLAN` action is triggered
    takeLatest(PlanTypes.FETCH_PLAN, fetchPlan),
  ])
}
