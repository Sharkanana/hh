import axios from 'axios'
import { Config } from 'App/Config'
import { is, curryN, gte } from 'ramda'

/**
 * Service for looking up plan information
 */

//todo: call yelp api

// const userApiClient = axios.create({
//   /**
//    * Import the config from the App/Config/index.js file
//    */
//   baseURL: Config.API_URL,
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   timeout: 3000,
// });

function fetchPlan(location) {

  return {
    location: location,
    breakfast: [
      {
        name: 'Lunas',
        rating: 3
      },
      {
        name: 'Epples',
        rating: 4
      }
    ],
    lunch: [
      {
        name: 'Taco Bell',
        rating: 1
      },
      {
        name: 'Bulldog',
        rating: 4
      }
    ],
    dinner: [
      {
        name: 'Sofi',
        rating: 4
      },
      {
        name: 'TWO',
        rating: 5
      }
    ]
  };
}

export const planService = {
  fetchPlan,
};
