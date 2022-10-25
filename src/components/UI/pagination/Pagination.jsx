import React from 'react';
import {getPagesArray} from "../../../utils/pages";
import classes from "./Pagination.module.css"

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages);

    return (
        <div className={classes.page__wrapper}>
            {pagesArray.map((p) => (
                <span key={p} className={page === p ? classes.page__current : classes.page} onClick={() => changePage(p)} >
            {p}
          </span>
            ))}
        </div>
    );
};

export default Pagination;