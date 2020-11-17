import { Dispatch } from 'redux'
import { PeopleDispatchTypes, PEOPLE_SUCCESS, PEOPLE_LOADING, PEOPLE_FAIL} from './PeopleActionTypes'

export const GetPeople = (people: string) => (dispatch: Dispatch<PeopleDispatchTypes>) => {
  try {
    dispatch({
      type: PEOPLE_LOADING
    })
    const res = {
      name: 'austen',
      age: 29
    }

    dispatch({
      type: PEOPLE_SUCCESS,
      payload: res
    })
  } catch(e) {
    dispatch({
      type: PEOPLE_FAIL
    })
  }
}