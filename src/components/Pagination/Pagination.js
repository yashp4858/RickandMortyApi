import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import './Pagination.css'

const Pagination = ({info, setpageNumber, pageNumber}) => {
  let [wdith, setWidth] = useState(window.innerWidth);

  console.log(wdith);

  let updateDimension = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", updateDimension)
    return ()=> window.removeEventListener("resize", updateDimension)
  },[])
  return (
    <>
    <style jsx>
      {`
        @media (max-width: 768px){
          .next, .prev{
            display: none
          }
        }
      `}
    </style>
    <ReactPaginate 
    className='pagination justify-content-center gap-4 my-5'
    nextLabel="Next"
    nextClassName='btn btn-dark next'
    previousLabel= "Prev"
    previousClassName='btn btn-dark prev'
    pageClassName="page-item"
    marginPagesDisplayed={wdith < 576 ? 1: 2}
    pageRangeDisplayed={wdith < 576 ? 1: 2}
    pageLinkClassName="page-link"
    activeClassName='active'
    onPageChange={(data) =>{ //with this function we can move to next page
      setpageNumber(data.selected + 1)
    }}
    pageCount={info?.pages}/>
    </>
  )
}

export default Pagination
