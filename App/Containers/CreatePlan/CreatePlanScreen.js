import React from 'react'
import { useState } from 'react'
import { Text, TextInput, View, Button, ActivityIndicator, Image } from 'react-native'
import PlanActions from 'App/Stores/Plan/Actions'
import Style from './CreatePlanScreenStyle'
import { ApplicationStyles, Helpers, Images, Metrics } from 'App/Theme'
import {useDispatch, useSelector} from "react-redux";

/**
 * Screen for initiating a plan
 *
 * Should take the user through multiple inputs to gather information on what to suggest for meals
 *
 * INITIAL GOAL: simply select location and hit a button to continue to the plan view
 */

export default function CreatePlanScreen() {

  const dispatch = useDispatch();
  const planIsLoading = useSelector(state => state.planIsLoading);
  const [location, updateLocation] = useState('Chicago');

  function createPlan() {
    dispatch(PlanActions.fetchPlan(location));
  }

  return (
    <View
      style={[
        Helpers.fill,
        Helpers.colCenter,
        Metrics.mediumHorizontalMargin,
        Metrics.mediumVerticalMargin,
      ]}
    >
      <View style={Style.logoContainer}>
        <Image style={Helpers.fullSize} source={Images.logo} resizeMode={'contain'} />
      </View>
      <Text style={Style.text}>Enter a location and click begin to start your plan</Text>
      <TextInput placeholder="Enter a location" name="location" type="text" value={location} onChangeText={text => updateLocation(text)}/>
      <Button title="Create Plan" style={ApplicationStyles.button} onPress={createPlan}/>
      {planIsLoading && <ActivityIndicator size="large" color="#0000ff" />}
    </View>
  );
}