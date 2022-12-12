import React from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../bll/redax/redux-store";
import {MyPaginate} from "./PaginationStyled";
import {ArrowIcon} from "../../assets/Icons/IconsArrow";

type TPaginationProps = {
    totalCount: number;
    pageCount: number;
    searchText?: string;
    onChangePages:(page: number) => void
};

export const Pagination: React.FC<TPaginationProps> = React.memo(({ totalCount, pageCount, onChangePages }) => {

    const pageInState = useSelector<AppStateType, number>((state) => state.usersPages.currentPage);

    const pageQuantity = Math.max(Math.ceil(totalCount / pageCount));

    const handlePageChange = ({ selected }: { selected: number }) => {
        onChangePages(selected + 1);
    };

    return (
        <MyPaginate
            forcePage={ pageInState > -1 ? pageInState - 1 : 0}
            pageCount={pageQuantity < 1 ? 1 : pageQuantity}
            pageRangeDisplayed={3}
            renderOnZeroPageCount={() => null}
            marginPagesDisplayed={1}
            onPageChange={handlePageChange}
            previousLabel={<ArrowIcon rotate={"90deg"} />}
            nextLabel={<ArrowIcon rotate={"270deg"} />}
            pageLinkClassName="page-item"
            activeClassName="active"
            previousLinkClassName={"page-item arrow"}
            nextLinkClassName="page-item arrow"
            breakLabel=". . ."
            breakClassName="page-item"
            breakLinkClassName="page-link"
        />
    );
});

