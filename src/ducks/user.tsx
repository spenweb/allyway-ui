import { createSlice, CaseReducer } from "redux-starter-kit";
import {makeMissingPeopleSearchResults} from "../util/demo";

export const initialState = {
  givenName: "",
  lastName: "",
  userName: "",
  searchResults: null
};

const user = createSlice({
  //@ts-ignore
  slice: "user",
  initialState,
  reducers: {
    //@ts-ignore
    login: (state: CaseReducer<unknown, any> | CaseReducerWithPrepare<unknown, any>, action) => {
      // mutate the state all you want with immer
      
    },
    logout: () => initialState,
    //@ts-ignore
    updateSearchResults: (state, action) => {
      //@ts-ignore
      state.searchResults = action.payload;
    } 
  }
});

export default user;
