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

// <nav>
//     <Link exact to='/'>Blog</Link>
//     <Link exact to='/'>Home</Link>
//     <Link to='/login'>Sign in</Link>
//     <Link to='/signup'>Signup</Link>
// </nav>


// import React from 'react';
// import {useState} from "react";
// import {Link} from "react-router-dom";
// // import {useDispatch, useSelector} from "react-redux";
//
// import {Menu} from 'antd';
// import {
//     AppstoreOutlined,
//     LogoutOutlined,
//     SettingOutlined,
//     UserAddOutlined,
//     UserOutlined
// } from '@ant-design/icons';
//
//
// const {Item, SubMenu} = Menu;
//
// //cicd
//
// const TopBar = () => {
//     const [current, setCurrent] = useState('home');
//
//     // const dispatch = useDispatch();
//     // const {user} = useSelector((state) => ({...state}));
//
//     // let history = useHistory();
//
//     const handleClick = (e) => {
//         // setCurrent(e.key);
//     };
//
//     const logout = () => {
//
//         // dispatch({
//         //     type: 'LOGOUT',
//         //     payload: null,
//         // })
//         // history.push('/login');
//     }
//
//     return (
//         <div>
//             <Menu
//                 onClick={handleClick}
//                 // selectedKeys={[current]}
//                 mode="horizontal">
//                 {/*<Item*/}
//                 {/*    // key="home"*/}
//                 {/*    icon={<AppstoreOutlined/>}*/}
//                 {/*>*/}
//                 {/*    <Link to="/">Home</Link>*/}
//                 {/*</Item>*/}
//
//                 {/*{!user && (*/}
//                 {/*    <Item*/}
//                 {/*        key="register"*/}
//                 {/*        icon={<UserAddOutlined/>}*/}
//                 {/*        className="float-right"*/}
//                 {/*    >*/}
//                 {/*        <Link to="/signup">Register</Link>*/}
//                 {/*    </Item>*/}
//                 )}
//
//                 {/*{!user && (*/}
//                 {/*    <Item*/}
//                 {/*        key="login"*/}
//                 {/*        icon={<UserOutlined/>}*/}
//                 {/*        className="float-right"*/}
//                 {/*    >*/}
//                 {/*        <Link to="/login">login</Link>*/}
//                 {/*    </Item>*/}
//                 )}
//
//                 {/*{user && (*/}
//                 {/*    <SubMenu*/}
//                 {/*        key="SubMenu"*/}
//                 {/*        icon={<SettingOutlined/>}*/}
//                 {/*        title='title'*/}
//                 {/*        // title={user.email && user.email.split('@')[0]}*/}
//                 {/*        className='float-right'*/}
//                 {/*    >*/}
//                 {/*        <Item*/}
//                 {/*            icon={<LogoutOutlined/>}*/}
//                 {/*            onClick={logout}*/}
//                 {/*        >Logout</Item>*/}
//                 {/*    </SubMenu>*/}
//                 )}
//             </Menu>
//         </div>
//     );
// };
//
// export default TopBar;

