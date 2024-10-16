import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Organization, RegionUsers } from '../pages'
import CapitalUser from '../pages/CapitalUsers'
import OrganizationMore from '../pages/OrganizationMore'
import OrganizationAdd from '../pages/OrganizationAdd'

function CustomRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Organization />} />
            <Route path='/add' element={<OrganizationAdd />} />
            <Route path='/:id' element={<OrganizationMore />} />
            <Route path='/capital-users' element={<CapitalUser />} />
            <Route path='/region-users' element={<RegionUsers />} />

        </Routes>
    )
}

export default CustomRoutes