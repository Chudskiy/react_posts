import React, {useState, useContext} from 'react';
import {Link} from "react-router-dom";
import {
    AppstoreOutlined,
    LogoutOutlined,
    SettingOutlined,
    UserAddOutlined,
    UserOutlined
} from '@ant-design/icons';
import {Menu} from 'antd';
import {AuthContext} from "../../Context/AuthContext";
import {useHistory} from "react-router";
import {useSelector} from "react-redux";
import {StyledMenu} from "./StyledTopBar";

const {Item, SubMenu} = Menu;

const TopBar = () => {
    const token = localStorage.getItem('token')
    const {logout} = useContext(AuthContext);
    const currentUser = useSelector(state => state.users.currentUser);

    const [current, setCurrent] = useState('home');
    const history = useHistory();

    const handleClick = (e) => {
        setCurrent(e.key);
    };

    const handleLogout = () => {
        logout();

        history.push('/login');
    };


    return (
        <StyledMenu
            onClick={handleClick}
            selectedKeys={[current]}
            mode="horizontal"
        >
            <Item
                key="home"
                icon={<AppstoreOutlined/>}
            >
                <Link to="/">Home</Link>
            </Item>

            {!token ?
                <>
                    <Item
                        key="login"
                        icon={<UserOutlined/>}
                        style={{float: 'right'}}
                    >
                        <Link to="/login">login</Link>
                    </Item>
                    <Item
                        key="register"
                        icon={<UserAddOutlined/>}
                        style={{float: 'right'}}
                    >
                        <Link to="/signup">Signup</Link>
                    </Item>
                </>
                :
                <SubMenu
                    key="SubMenu"
                    icon={<SettingOutlined/>}
                    title={token && currentUser.username}
                    style={{float: 'right'}}
                >
                    <Item
                        icon={<LogoutOutlined/>}
                        onClick={handleLogout}
                    >Logout</Item>
                </SubMenu>
            }
        </StyledMenu>
    );
};

export default TopBar;

