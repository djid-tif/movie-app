import React from 'react';
import './style/home.scss';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCar} from '@fortawesome/free-solid-svg-icons'
// import useMediaQuery from '@material-ui/core/useMediaQuery';
import axios from 'axios';
import Header from "./header";
import {Link} from "react-router-dom";


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            name: '',
            toggle: true,
            left: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    componentDidMount() {
        this.timeID = setInterval(() => this.tick(), 1000)
        axios(`https://api.themoviedb.org/3/movie/385128?api_key=01d3304a41e89d8ce39ad4e10a678969&language=fr-FR`).then((res) => {
            // update state with API data
            this.setState({
                movieID: res.data.id,
                original_title: res.data.original_title,
                title: res.data.title,
                tagline: res.data.tagline,
                overview: res.data.overview,
                homepage: res.data.homepage,
                poster: res.data.poster_path,
                production: res.data.production_companies,
                production_countries: res.data.production_countries,
                genre: res.data.genres.map(item => {
                    return {
                        id: item.id,
                        name: item.name
                    }
                }),
                release: res.data.release_date,
                vote: res.data.vote_average,
                runtime: res.data.runtime,
                revenue: res.data.revenue,
                backdrop: res.data.backdrop_path

            })
            console.log(typeof res)
            console.log(typeof res.data)
            console.log(res.data)
            console.log(typeof this.state.genre)
            console.log(res.data.genres)
            console.log(this.state.title)
            let list = this.state.genre.map(item => <p key={item.id.toString()}>{item.id}</p>)
            console.log(list.map(item => {
                return {
                    item
                }
            }))
            this.list = list
        })
    }


    componentWillUnmount() {
        console.log(this.timeID)
        clearInterval(this.timeID)

    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    handleChange(event) {
        this.setState({
            name: event.target.value
        })
    }

    submit(event) {
        event.preventDefault();
        console.log(this.state.name)

    }

    handleClick() {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    toggleDrawer() {
        this.setState({
            left: !this.state.left
        })

    }


    render() {
        return (
            <main>
                <Header func={this.toggleDrawer} toggle={this.state.left}/>


                <div id='main'>
                    <h1>{this.state.date.toLocaleTimeString()}</h1>
                    <p>{this.state.name}</p>
                    <form onSubmit={this.submit}>
                        <input type="text" onChange={this.handleChange}/>
                        <button type="submit">submit</button>
                    </form>
                    <button onClick={this.handleClick} className={this.state.toggle ? 'toggle-on' : 'toggle-off'}>
                        {this.state.toggle ? 'ON' : 'OFF'}
                    </button>
                    <Switch
                        checked={this.state.toggle}
                        onChange={this.handleClick}
                        name="checkedA"
                        color="primary"
                        inputProps={{'aria-label': 'primary checkbox'}}
                    />
                    <React.Fragment key='left'>
                        <Button onClick={this.toggleDrawer}>'left'</Button>
                        <Drawer anchor='left' open={this.state.left} onClose={this.toggleDrawer}>
                            <div className="menu" id="menu">

                                <ul>
                                    <Link to="/users">
                                        <li>email 2</li>
                                    </Link>
                                    <li>box</li>
                                </ul>
                            </div>
                        </Drawer>
                    </React.Fragment>

                    <FontAwesomeIcon icon={faCar}/>
                    <div>
                        {this.list}
                    </div>
                </div>
            </main>
        );
    }
}


