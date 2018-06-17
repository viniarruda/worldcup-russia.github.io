import React from 'react'
import {connect} from 'react-redux'
import {logout} from "../../actions/auth"
import NavBar from "./styled-components/navbar";
import NavLink from "./styled-components/nav-link";

const Header = (props) => {
    return (
        <NavBar title='TestSite' >
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/post'>Post</NavLink>
            {
                props.auth.logged ?
                    <NavLink to='/' onClick={props.logout}>Logout</NavLink>
                    :
                    <NavLink to='/login'>Login</NavLink>
            }
        </NavBar>
    );
};

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)