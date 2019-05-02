import * as types from "../constants/actionTypes";

 const initialState = {
   searchStr: "",
   searchResults: [],
   cart: [],
   currCard: [],
   hasBeenClicked: false,
   cardClicked: false,
   backButton: true,
   cardId: -1,
   favoriteFoods: []
 }

 const mainReducer = (state = initialState, action) => {
   let searchResults;
   let cardClicked;
   switch(action.type) {
     case types.UPDATE_SEARCH_STR:
      return {
        ...state,
        searchStr: action.payload
      }

     case types.CALL_SEARCH_STR:
      return {
        ...state,
        searchResults: action.payload
      }
     case types.CHANGE_PAGE:
     case types.ON_CARD_CLICKED:
      cardClicked = !state.cardClicked;
      return {
        ...state,
        cardId: action.payload,
        cardClicked: !state.cardClicked,
        backButton: !state.backButton
      }
     case types.BACK_BUTTON_CLICKED:
      return {
        ...state,
        cardClicked: !state.cardClicked,
        backButton: !state.backButton
      }
     case types.CHANGE_HAS_BEEN_CLICKED:
     case types.CHANGE_FAVORITE_FOODS:
     case types.CONNECT_TO_RECIPE:
     case types.GET_SHOPPING_LIST:
     default:
      return state;
   }
 }

export default mainReducer
