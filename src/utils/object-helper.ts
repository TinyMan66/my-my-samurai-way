import {UserType} from "../redux/users-reducer";

export const UpdateObjectInArray = (items: [any], itemId: number, objPropName: string, newObjectProp: NewObjectPropType) => {
    return items.map(i => {
        if(i[objPropName] === itemId) {
            return {...i, ...newObjectProp}
        }
        return i
    })
}

type ItemsType = Array<UserType>
type NewObjectPropType = UserType