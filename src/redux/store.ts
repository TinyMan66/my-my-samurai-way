import dialogsReducer, {DialogsActionCreatorTypes} from "./dialogs-reducer";
import profileReducer, {ProfileActionCreatorTypes} from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    _updateNewPostText: (newText: string) => void
    dispatch: (action: ActionTypes) => void
}

export type ActionTypes = ProfileActionCreatorTypes | DialogsActionCreatorTypes

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likeCounts: 15},
                {id: 2, message: 'It\'s my first post', likeCounts: 8},
                {id: 3, message: 'How is your day buddy?', likeCounts: 5},
                {id: 4, message: 'Good luck!', likeCounts: 35},
                {id: 5, message: 'Good luck!', likeCounts: 8},
                {id: 6, message: 'Good luck!', likeCounts: 8},
            ],
            newPostText: ''
        },
        dialogPage: {
            dialogs: [
                {id: 1, name: 'Eliza', avatar: 'https://online.pubhtml5.com/ipnc/accountlogo.jpg'},
                {id: 2, name: 'Donnie', avatar: 'https://www.pngkit.com/png/detail/563-5631413_donnie-thornberry.png'},
                {id: 3, name: 'Nigel', avatar: 'https://static.life.ru/posts/2018/08/1145040/108af72f8b30a38d26c2b21678759672.jpg'},
                {id: 4, name: 'Darwin', avatar: 'https://i.pinimg.com/originals/66/20/ed/6620ede81fa149c03873b00f04cddeff.png'},
                {id: 5, name: 'Marianne', avatar: 'https://m.media-amazon.com/images/M/MV5BZDM5OWE2ODYtNDFkOS00NGQ2LWJjZDMtMWUzM2JlYzI4ODQ2XkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_FMjpg_UX1000_.jpg'},
                {id: 6, name: 'Debbie', avatar: 'https://i.pinimg.com/originals/92/62/74/9262747b5bdd21bc739cd687c74a29af.png'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'What\'s wrong with you??'},
                {id: 3, message: 'How is your day buddy?'},
                {id: 4, message: 'Good luck!'},
                {id: 5, message: 'Good luck!'},
                {id: 6, message: 'Good luck!'},
            ],
            newMessageBody: ""
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Eliza', avatar: 'https://online.pubhtml5.com/ipnc/accountlogo.jpg'},
                {id: 2, name: 'Donnie', avatar: 'https://www.pngkit.com/png/detail/563-5631413_donnie-thornberry.png'},
                {
                    id: 3,
                    name: 'Nigel',
                    avatar: 'https://static.life.ru/posts/2018/08/1145040/108af72f8b30a38d26c2b21678759672.jpg'
                },
            ]
        },
    },
    _callSubscriber () {
        console.log('state changed');
    },

    getState () {
        return this._state;
    },
    subscribe (observer: () => void) {
        this._callSubscriber = observer;
    },

    _updateNewPostText (newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    },
    dispatch (action) {
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action as DialogsActionCreatorTypes );
        this._state.profilePage = profileReducer(this._state.profilePage, action as ProfileActionCreatorTypes);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        //
        this._callSubscriber();
    }
}

export type SidebarType = {
    friends: Array<DialogType>
}

type MessageType = {
    id: number
    message: string
}

type DialogType = {
    id: number
    name: string
    avatar: string
}

type PostType = {
    id: number
    message: string
    likeCounts: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sidebar: SidebarType
}

// window.store = store;