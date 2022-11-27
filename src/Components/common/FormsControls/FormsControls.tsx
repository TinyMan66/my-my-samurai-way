import React, {FC} from "react";
import styles from "./FormsControls.module.css"
import {Field, WrappedFieldProps} from "redux-form";
import {FieldValidatorType} from "../../../utils/validators/validators";

const FormControl: FC<WrappedFieldProps> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error

    return (
        <div className={`${styles.formControl} ${hasError ? styles.error : ""}`}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}
export const Textarea: FC<WrappedFieldProps> = (props) => {
    const {input, meta, children, ...restProps} = props
    return (
        <FormControl {...props}><textarea{...input}{...restProps}/></FormControl>
    )
}

export const Input: FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props}><input{...input}{...restProps}/></FormControl>
    )
}

export const createField = (placeholder: string | undefined,
                            name: string,
                            validators: FieldValidatorType[],
                            component: React.FC<WrappedFieldProps>,
                            props = {}, text: string = '') => (
    <div>
        <Field placeholder={placeholder}
               name={name}
               validate={validators}
               component={component}
               {...props}
        /> {text}
    </div>
)