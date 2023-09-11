import React from 'react'
import EnhancedTableProduct from '../../components/table/tableProduct/table'
import BoxAddProduct from '../../components/BoxModal/BoxModalAdd/BoxAddProduct'
export default function Product() {
  return (
    <article className='w-100' style={{ backgroundColor: "#364E6F" }}>
      <EnhancedTableProduct hef = 'products'/>
      <BoxAddProduct/>
    </article>
  )
}
