import React from "react"
import Pagination from "react-js-pagination"
import { PagingDiv } from "./Paging.style"

interface Iprops {
    page: number
    totalCount: number
    handlePageChange: (page: number) => void
    limit: number
}

function Paging({ page, totalCount, handlePageChange, limit }: Iprops) {
    return (
        <PagingDiv>
            <Pagination
                activePage={page} // 현재 페이지
                itemsCountPerPage={limit} // 한 페이지당 보여줄 아이템의 갯수
                totalItemsCount={totalCount} // 전체 아이템 갯수
                pageRangeDisplayed={limit} // 페이지네이션 내에서 보여줄 페이지 범위
                prevPageText={"<"}
                nextPageText={">"}
                onChange={handlePageChange} // 페이지가 바뀔 때 핸들링하는 함수
            />
        </PagingDiv>
    )
}

export default Paging
