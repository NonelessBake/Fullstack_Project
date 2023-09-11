import React from 'react'
import EnhancedTableUser from '../../components/table/tableUser/TableUeser'
import BoxAddUser from '../../components/BoxModal/BoxModalAdd/BoxAddUser'
export default function User() {
  return (
    <article className='w-100' style={{backgroundColor:"#364E6F"}}>
      <EnhancedTableUser hef = 'user'/>
      <BoxAddUser/>
    </article>
  )
}
