import { GET_ALL_GROUPS } from '../types/types'

// eslint-disable-next-line import/prefer-default-export
export const getAllGroups = (groups) => ({
  type: GET_ALL_GROUPS,
  payload: groups
})
