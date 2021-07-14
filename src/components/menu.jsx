import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import React from "react";
import {Link} from "react-router-dom";

export default function menu() {
    return (
        <React.Fragment key='left'>
            <Button onClick={this.toggleDrawer}>'left'</Button>
            <Drawer anchor='left' open={this.state.left} onClose={this.toggleDrawer}>
                <div className="menu" id="menu">

                    <ul>

                        <Link to="/users">
                            <li>email</li>
                        </Link>
                        <li>box</li>
                    </ul>
                </div>
            </Drawer>
        </React.Fragment>
    )
}