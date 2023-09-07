import React from 'react'
import EnhancedTable from '../../components/table/tableOrder/table'
export default function Order() {
  return (
    <article className='w-100' style={{backgroundColor:"#364E6F"}}>
      <EnhancedTable hef = 'orderInfos'/>
    </article>
  )
}