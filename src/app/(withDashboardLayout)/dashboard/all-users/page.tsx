
import MembersTable from '@/components/ui/components/AllUserPage/AllUserPage'
import AllUserData from '@/components/ui/components/AllUserPage/AllUserPage'
import { getAllUsers } from '@/services/AuthServices'
import React from 'react'

const AllUserPage = async() => {
  const {data : AllUsers} = await getAllUsers()
  console.log(AllUsers)
  return (
    <div >
        <MembersTable members={AllUsers}></MembersTable>
    </div>
  )
}

export default AllUserPage