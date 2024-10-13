import React from 'react'
import { GithubOutlined, LogoutOutlined } from '@ant-design/icons'

function Header() {
    return (
        <div className='py-8 bg-[#001529] px-20 flex items-center justify-between border-b-[2px] border-white'>
            <div className='flex items-center space-x-8'>
                <GithubOutlined className='text-white scale-[3]' />
                <h2 className='text-[22px] text-white font-semibold'>Admin panel</h2>
            </div>
            <LogoutOutlined className='text-white scale-[1.5] cursor-pointer' />
        </div>
    )
}

export default Header
