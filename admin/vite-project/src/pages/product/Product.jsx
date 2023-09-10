import React from 'react'
import EnhancedTable from '../../components/table/tableProduct/table'
import BoxAddProduct from '../../components/BoxModal/BoxModalAdd/BoxAddProduct'
export default function Product() {
  return (
    <article className='w-100' style={{ backgroundColor: "#364E6F" }}>
      <EnhancedTable hef = 'products'/>
      <BoxAddProduct/>
    </article>
  )
}
