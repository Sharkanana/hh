import React from 'react'
import { Text, View, FlatList, TouchableHighlight } from 'react-native'
import Style from './PlanOverviewScreenStyle'
import { Helpers} from 'App/Theme'
import {useSelector} from "react-redux";
import Metrics from "../../Theme/Metrics";

/**
 * Screen for displaying general overview of the plan
 *
 * Currently, a title with the location, and 2 suggestions for B/L/D, clicking on them should open a list of 10 suggestions(or infinite scroller)
 */
export default function PlanOverviewScreen() {

  const plan = useSelector(state => state.plan.plan);

  function PlaceList({data}) {

    return (
      <FlatList
        style={[Metrics.smallHorizontalMargin]}
        data={data}
        keyExtractor={(item, index) => item.name + '_' + index}
        renderItem={({item, separators}) => (
          <TouchableHighlight
            // onPress={() => this._onPress(item)}
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}>
            <View>
              <Text>{item.name}</Text>
            </View>
          </TouchableHighlight>
        )}/>
    );
  }

  return (
    <View
      style={[
        Helpers.fill
      ]}
    >
      <Text style={Style.text}>Plan for {plan.location}</Text>

      <View style={Style.bldCategory}>
        <Text>Breakfast</Text>

        <PlaceList data={plan.breakfast}/>

      </View>

      <View style={Style.bldCategory}>
        <Text>Lunch</Text>

        <PlaceList data={plan.lunch}/>

      </View>

      <View style={Style.bldCategory}>
        <Text>Dinner</Text>

        <PlaceList data={plan.dinner}/>

      </View>
    </View>
  );
}