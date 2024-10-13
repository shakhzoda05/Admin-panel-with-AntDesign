import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserSwitchOutlined, SettingOutlined, BankOutlined, FolderOpenOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const items = [
    {
        key: '1',
        icon: <BankOutlined className='scale-[2]' />,
        label: <strong className='text-[20px] pl-2 pt-1'>Tashkilotlar</strong>,
        children: [
            {
                key: '11',
                label: <Link to={"/"}>Tashkilotlar bo'limi</Link>,
                icon: <FolderOpenOutlined />
            }
        ],
    },
    {
        key: '2',
        icon: <UserSwitchOutlined className='scale-[2]' />,
        label: <strong className='text-[20px] pl-2 pt-1'>Foydalanuvchilar</strong>,
        children: [
            {
                key: '21',
                label: <Link to={"/capital-users"} >Poytaxt foydalanuvchilari</Link>,
                icon: <FolderOpenOutlined />

            },
            {
                key: '22',
                label: <Link to={"/region-users"}>Viloyat foydalanuvchilari</Link>,
                icon: <FolderOpenOutlined />
            }
        ],
    },
];
const getLevelKeys = (items1) => {
    const key = {};
    const func = (items2, level = 1) => {
        items2.forEach((item) => {
            if (item.key) {
                key[item.key] = level;
            }
            if (item.children) {
                func(item.children, level + 1);
            }
        });
    };
    func(items1);
    return key;
};
const levelKeys = getLevelKeys(items);
const Navbar = () => {
    const [stateOpenKeys, setStateOpenKeys] = useState(['1', '11']);
    const onOpenChange = (openKeys) => {
        const currentOpenKey = openKeys.find((key) => stateOpenKeys.indexOf(key) === -1);
        // open
        if (currentOpenKey !== undefined) {
            const repeatIndex = openKeys
                .filter((key) => key !== currentOpenKey)
                .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
            setStateOpenKeys(
                openKeys
                    // remove repeat key
                    .filter((_, index) => index !== repeatIndex)
                    // remove current level all child
                    .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey]),
            );
        } else {
            // close
            setStateOpenKeys(openKeys);
        }
    };
    return (
        <Menu
            className='pt-5'
            theme='dark'
            mode="inline"
            defaultSelectedKeys={['231']}
            openKeys={stateOpenKeys}
            onOpenChange={onOpenChange}
            style={{
                width: "20%",
            }}
            items={items}
        />
    );
};
export default Navbar;