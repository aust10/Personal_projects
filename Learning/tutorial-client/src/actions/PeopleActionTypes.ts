export const PEOPLE_LOADING = 'PEOPLE_LOADING'
export const PEOPLE_FAIL = 'PEOPLE_FAIL'
export const PEOPLE_SUCCESS = 'PEOPLE_SUCCESS'

export type PeopleType = {
  name: PeopleName
}

export type PeopleName = {
  name: string
  age: number
}

export interface PeopleLoading {
  type: typeof PEOPLE_LOADING
}

export interface PeopleFail {
  type: typeof PEOPLE_FAIL
}

export interface PeopleSuccess {
  type: typeof PEOPLE_SUCCESS,
  payload: PeopleType
}

export type PeopleDispatchTypes = PeopleLoading | PeopleFail | PeopleSuccess
