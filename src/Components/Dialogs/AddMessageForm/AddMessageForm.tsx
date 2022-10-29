import {maxLengthCreator, required} from "../../../utils/validators/validators";
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {FormDataType} from "../Dialogs";

const maxLength50 = maxLengthCreator(50)

const AddMassageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, maxLength50]} name="newMessageBody" placeholder="Enter your message"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export const AddMassageReduxForm = reduxForm<FormDataType>({form: 'dialogAddMassageForm'})(AddMassageForm)