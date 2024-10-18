import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Organization, RegionUsers } from '../pages'
import CapitalUsers from '../pages/CapitalUsers'
import OrganizationMore from '../pages/OrganizationMore'
import OrganizationAdd from '../pages/OrganizationAdd'

function CustomRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Organization />} />
            <Route path='/add' element={<OrganizationAdd />} />
            <Route path='/:id' element={<OrganizationMore />} />
            <Route path='/:id/edit' element={<OrganizationAdd />} />
            <Route path='/capital-users' element={<CapitalUsers />} />
            <Route path='/region-users' element={<RegionUsers />} />

        </Routes>
    )
}

export default CustomRoutes