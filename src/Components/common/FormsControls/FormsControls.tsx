import React, {FC} from "react";
import styles from "./FormsControls.module.css"
import {WrappedFieldProps} from "redux-form";

export const Textarea: FC<WrappedFieldProps> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={`${styles.formControl} ${hasError? styles.error: ""}` }>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}