/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
import {
  GET_USER_CHARACTERISITCS, ADD_TOXIC, MINUS_TOXIC, ADD_FRIENDLY, MINUS_FRIENDLY, ADD_TEAM_PLAY, MINUS_TEAM_PLAY, ADD_STRATEGY, MINUS_STRATEGY, ADD_LEADER, MINUS_LEADER
} from '../types/characterTypes'

export default function characterReducer(state = [], action) {
  switch (action.type) {
    case GET_USER_CHARACTERISITCS:
      console.log(action.payload)
      return action.payload

    case ADD_TOXIC:
      return state.map((el) => {
        console.log(el.toUserId)
        if (el.toUserId === +action.payload) {
          el.toxic += 5
          return el
        }
        return el
      })

    case MINUS_TOXIC:
      return state.map((el) => {
        if (el.toUserId === +action.payload) {
          el.toxic -= 5
          return el
        }
        return el
      })

    case ADD_FRIENDLY:
      return state.map((el) => {
        if (el.toUserId === +action.payload) {
          el.friendly += 5
          return el
        }
        return el
      })

    case MINUS_FRIENDLY:
      return state.map((el) => {
        if (el.toUserId === +action.payload) {
          el.friendly -= 5
          return el
        }
        return el
      })

    case ADD_TEAM_PLAY:
      return state.map((el) => {
        if (el.toUserId === +action.payload) {
          el.teamPlayer += 5
          return el
        }
        return el
      })

    case MINUS_TEAM_PLAY:
      return state.map((el) => {
        if (el.toUserId === +action.payload) {
          el.teamPlayer -= 5
          return el
        }
        return el
      })

    case ADD_STRATEGY:
      return state.map((el) => {
        if (el.toUserId === +action.payload) {
          el.strategy += 5
          return el
        }
        return el
      })

    case MINUS_STRATEGY:
      return state.map((el) => {
        if (el.toUserId === +action.payload) {
          el.strategy -= 5
          return el
        }
        return el
      })
    case ADD_LEADER:
      return state.map((el) => {
        if (el.toUserId === +action.payload) {
          el.leader += 5
          return el
        }
        return el
      })

    case MINUS_LEADER:
      return state.map((el) => {
        if (el.toUserId === +action.payload) {
          el.leader -= 5
          return el
        }
        return el
      })

    default:
      return state
  }
}
