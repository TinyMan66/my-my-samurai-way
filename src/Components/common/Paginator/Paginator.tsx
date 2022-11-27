import React from "react";
import styles from "../Paginator/Paginator.module.css"


export const Paginator: React.FC<PaginatorPropsType> = ({totalUsersCount, pageSize, currentPage, onPageChange}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map(p => {
                return <span className={currentPage === p ? styles.selectedPage : ""}
                             onClick={() => {
                                 onPageChange(p)
                             }}
                >{p}</span>
            })}
        </div>
    )
};

// types
type PaginatorPropsType = {
    pageSize: number
    currentPage: number
    totalUsersCount: number
    onPageChange: (pageNumber: number) => void
}