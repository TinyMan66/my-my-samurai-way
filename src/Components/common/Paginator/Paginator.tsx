import React, {useState} from "react";
import styles from "../Paginator/Paginator.module.css"
import cn from "classnames";

export const Paginator: React.FC<PaginatorPropsType> = ({
                                                            totalItemsCount,
                                                            pageSize,
                                                            currentPage,
                                                            portionSize,
                                                            onPageChange
                                                        }) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState<number>(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={styles.paginator}>
            {portionNumber > 1 &&
                <button onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>PREV</button>}

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p, i) => {
                    return <span className={cn ({
                        [styles.selectedPage]: currentPage === p
                    }, styles.pageNumber)}

                                 key={i}
                                 onClick={() => {
                                     onPageChange(p)
                                 }}
                    >{p}</span>
                })
            }

            {portionCount > portionNumber &&
                <button onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>NEXT</button>}
        </div>
    )
};

// types
type PaginatorPropsType = {
    pageSize: number
    currentPage: number
    portionSize: number
    totalItemsCount: number
    onPageChange: (pageNumber: number) => void
}