import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import profileReducer, {ProfileActionTypes} from "./profile-reducer";
import dialogsReducer, {DialogsActionTypes} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer, {UsersActionTypes} from "./users-reducer";
import authReducer, {AuthActionTypes} from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from "redux-form"
import {AppActionTypes, appReducer} from "./app-reducer";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

const composeEnhancers = composeWithDevTools || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export type AppStateType = ReturnType<typeof rootReducer>;
export type AppActionsType =
    AppActionTypes
    | DialogsActionTypes
    | ProfileActionTypes
    | UsersActionTypes
    | AuthActionTypes
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>

// @ts-ignore
window.store = store;


