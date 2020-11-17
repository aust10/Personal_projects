import {PeopleDispatchTypes, PEOPLE_FAIL, PEOPLE_LOADING, PEOPLE_SUCCESS, PeopleType} from '../actions/PeopleActionTypes'

interface DefaultStateI {
  loading: boolean
  people?: PeopleType
}

const defaultState: DefaultStateI = {
  loading: false
}

const peopleReducer = (state: DefaultStateI = defaultState, action: PeopleDispatchTypes): DefaultStateI => {
  switch (action.type) {
    case PEOPLE_FAIL :
      return {
        loading: false,
      }
    case  PEOPLE_LOADING:
      return {
        loading: true,
      }
    case  PEOPLE_SUCCESS:
      return {
        loading: false,
        people: action.payload
      }
    default:
      return state
  }
}

export default peopleReducer