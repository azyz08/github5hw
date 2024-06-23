import { Link, Route, Routes } from "react-router-dom"
import "./style.scss"
import Azizbek from "../../pages/azizbek"
import Abduxabir from "../../pages/abduxabir"

import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
const items = [
    {
        label: <Link to={"/"}>Azizbek</Link>,
        key: '0',
    },
    {
        label: <Link to={"/page2"}>Abduxabir</Link>,
        key: '1',
    },
    {
        type: 'divider',
    },
];

export default function Navbar() {
    return (
        <>
            <div className="nav">
                <Link to={"/"}><h2>CALIFORNIA</h2></Link>
                <input type="checkbox" id="m" />
                <ul>
                    <div className="labelBox">
                        <label htmlFor="m"><i class="fa-solid fa-xmark"></i></label>
                        <a href=""><i class="fa-solid fa-cart-shopping"></i></a>
                    </div>
                    <Link to={"/"}><h3>Azizbek</h3></Link>
                    <Link to={"/page2"}><h3>Abduxabir</h3></Link>
                    <Link to={"/page2"}><h3>Support</h3></Link>
                    <h3>
                        <Dropdown menu={{ items, }} trigger={['click']}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space className="solu">
                                    Solutions
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                    </h3>
                </ul>
                <div className="icon">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <a href=""><i class="fa-solid fa-cart-shopping"></i></a>
                    <label htmlFor="m"><i class="fa-solid fa-bars"></i></label>
                </div>
            </div>

            <p className="nb">.</p>

            <Routes>
                <Route path="/" element={<Azizbek />} />
                <Route path="/page2" element={<Abduxabir />} />
            </Routes>
        </>
    )
}