import React, {FC} from "react";
import styles from "./FormsControls.module.css"
import {WrappedFieldProps} from "redux-form";

export const Textarea: FC<WrappedFieldProps> = ({input, meta, ...props}) => {
    return (
        <div className={styles.formControl}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            <span>{"Some error"}</span>
        </div>
    )
}