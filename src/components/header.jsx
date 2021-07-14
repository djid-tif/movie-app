// import {Component} from "react";
import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import Button from "@material-ui/core/Button";
import './style/header.scss'
import {Link} from "react-router-dom";

const header = ({func, toggle}) => {
    // constructor(props) {
    //     super(props);
    //     this.state = {}
    //     console.log('la \\/')
    //     console.log(this.props.func)
    // }

    return (
        <div className="bar-element">
            <AppBar position="static" className="haha">
                <Toolbar className="">
                    <IconButton edge="start" color="inherit" onClick={() => func()} className="menu-button"
                                aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className="title">
                        News
                    </Typography>
                    {toggle && <p className="test">hihi</p>}
                    <Link to="/about" id="redirect">

                        <Button color="inherit" className="login-button">Login</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );

}
export default header