import React, {FC} from "react";
import styles from "./FormsControls.module.css"
import {WrappedFieldProps} from "redux-form";

const FormControl: FC<WrappedFieldProps> = ({meta, children}) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={`${styles.formControl} ${hasError ? styles.error : ""}`}>
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
export const Textarea: FC<
    WrappedFieldProps> = (props) => {
    const {input, meta, children, ...restProps} = props
    return (
        <FormControl {...props}><textarea{...input}{...restProps}/></FormControl>
    )
}

export const Input: FC<
    WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props}><input{...input}{...restProps}/></FormControl>
    )
}
