import { Button } from 'antd'
import React from 'react'

function Organization() {
    return (
        <div className='p-5'>
            <div className='flex items-center justify-between'>
                <div>
                    <h2 className='font-bold text-[25px]'>Tashkilotlar</h2>
                    <span className='text-[15px] pl-1 text-slate-400'>tashkilotlar(0)</span>
                </div>
                <Button icon size='large' type='primary'>Qo'shish</Button>
            </div>
        </div>
    )
}

export default Organization
