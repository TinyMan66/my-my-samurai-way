import React from "react";
import "./App.css";
import {Navbar} from "./Components/Navbar/Navbar";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {Sidebar} from "./Components/Sidebar/Sidebar";
import {HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {globalErrorTC, initializeAppTC} from "./redux/app-reducer";
import {AppStateType, store} from "./redux/store";
import {Preloader} from "./Components/common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";

//imported component without default export
const DialogsContainer = React.lazy(() => import("./Components/Dialogs/Message/DialogsContainer").then(module => ({default: module.DialogsContainer})));

const ProfileContainer = React.lazy(() => import("./Components/Profile/ProfileContainer"));

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        initialized: state.app.initialized,
        globalError: state.app.globalError
    }
}

class App extends React.Component<AppPropsType> {
    catchAllUnhandledErrors = (promiseRejectionEvent: Event) => {
        //alert('Some error occurred!');
        console.error(promiseRejectionEvent);
        this.props.globalErrorTC(promiseRejectionEvent.type)
    }

    componentDidMount() {
        this.props.initializeAppTC()
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                {this.props.globalError && <div>{this.props.globalError}</div>}
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route exact path='/' render={() => <Redirect to={'/profile'}/>}
                        />
                        <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}
                        />
                        <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
                        <Route path='/users' render={() =>
                            <UsersContainer/>
                        }/>
                        <Route path='/login' render={() =>
                            <Login/>
                        }/>
                        <Route path='/news' render={News}/>
                        <Route path='/music' render={Music}/>
                        <Route path='/settings' render={Settings}/>
                        <Route path='/sidebar' render={() =>
                            <Sidebar/>
                        }/>
                        <Route path='*' render={() => <div>404 PAGE NOT FOUND</div>}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeAppTC, globalErrorTC}))(App);

const SocialNetworkApp = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default SocialNetworkApp

// types
type mapDispatchPropsType = {
    initializeAppTC: () => void
    globalErrorTC: (globalError: null | string) => void
}
type mapStatePropsType = {
    initialized: boolean
    globalError: null | string
}
export type AppPropsType = mapDispatchPropsType & mapStatePropsType;