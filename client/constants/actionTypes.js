/*
action type format

(action being performed)_(action target)[_data type]
*/

//ACTION TYPES FOR AUTH REDUCER
export const UPDATE_USERNAME_STR = "UPDATE_USERNAME_STR";
export const UPDATE_PASSWORD_STR = "UPDATE_PASSWORD_STR";
export const IS_SIGNUP= "IS_SIGNUP";
export const IS_LOGGED_IN = "IS_LOGGED_IN"


//ACTION TYPES FOR MAIN REDUCER
export const UPDATE_SEARCH_STR = "UPDATE_SEARCH_STR"; //line 68 of oldApp
export const CALL_SEARCH_STR = "CALL_SEARCH_STR"; //line 34 of oldApp
export const CHANGE_PAGE = "CHANGE_PAGE"; //line 74 of oldApp
export const CHANGE_HAS_BEEN_CLICKED = "CHANGE_HAS_BEEN_CLICKED"; //should change line 27 of oldApp
export const CHANGE_FAVORITE_FOODS = "CHANGE_FAVORITE_FOODS";//should change line 9 of Favorite.jsx
export const CONNECT_TO_RECIPE = "CONNECT_TO_RECIPE";
export const GET_SHOPPING_LIST = "GET_SHOPPING_LIST"; //changes list obj in line 6 of ShoppingList.jsx