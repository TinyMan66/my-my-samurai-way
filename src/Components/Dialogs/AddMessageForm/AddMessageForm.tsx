import {maxLengthCreator, required} from "../../../utils/validators/validators";
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {FormDataType} from "../Dialogs";
// import {useFormik, Field, FormikProps} from "formik";

const maxLength50 = maxLengthCreator(50)

const AddMassageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, maxLength50]} name="newMessageBody"
                       placeholder="Enter your message"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export const AddMassageReduxForm = reduxForm<FormDataType>({form: 'dialogAddMassageForm'})(AddMassageForm)

// export const AddMassageForm: React.FC<FormikProps<FormikErrorType>> = (props) => {
// type FormikErrorType = {
//     newMessageBody?: string
// }
// const formik = useFormik({
//     initialValues: {
//         newMessageBody: ''
//     },
//     validate: values => {
//         const errors: FormikErrorType = {}
//         if (!values.newMessageBody) {
//             errors.newMessageBody = 'Required'
//         } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.newMessageBody)) {
//             errors.newMessageBody = 'Invalid text'
//         } else if (values.newMessageBody.length > 50) {
//             errors.newMessageBody = 'Allowed length is 50 symbols'
//         }
//
//         return errors;
//     },
//     onSubmit: values => {
//         alert(JSON.stringify(values));
//         formik.resetForm();
//     },
// })
//
// return (
//     <form onSubmit={formik.handleSubmit}>
//         <div>
//             <textarea name="newMessageBody" value={formik.values.newMessageBody} placeholder="Enter your message" onBlur={formik.handleBlur}/>
//             {formik.touched.newMessageBody && formik.errors.newMessageBody? <div>{formik.errors.newMessageBody}</div> : null}
//
//
//             <Field as={Textarea} value={formik.values.newMessageBody} name="newMessageBody" placeholder="Enter your message" onBlur={formik.handleBlur}/>
//             {formik.touched.newMessageBody && formik.errors.newMessageBody? <div>{formik.errors.newMessageBody}</div> : null}
//         </div>
//         <div>
//             <button>Send</button>
//         </div>
//     </form>
// )
// }