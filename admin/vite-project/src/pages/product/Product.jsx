import React from 'react'
import EnhancedTable from '../../components/table/table'
import BoxModalProduct from '../../components/BoxModal/BoxModalProduct'
export default function Product() {
  return (
    <article className='w-100' style={{ backgroundColor: "#364E6F" }}>
      <EnhancedTable/>
      <BoxModalProduct/>
    </article>
  )
}
