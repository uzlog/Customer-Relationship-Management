import React, {Component} from 'react'
import axios from 'axios'
import { FaUserCircle } from 'react-icons/fa';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

class OutstandingClients extends Component {
    constructor(){
        super()
        this.state = {
            outstandingClients: ""
        }
    }

    async componentDidMount() {
        const response = await axios.get("http://localhost:1991/analytics/badges/outstandingclients")
        this.setState({outstandingClients: response.data.outstandingClients})
    }
    render() {
        return (
        this.state.outstandingClients?
        <div>
            <div className="analytics-icon" id="user-icon"><FaUserCircle size="4em"/></div>
            <div className="analytics-badges-data">
                <div className="badge-data">  {this.state.outstandingClients}</div>
                <div className="badge-text">Outstanding Clients</div>
            </div>
        </div>:
        <Loader type="TailSpin" style={{margin: "auto"}}/>)
    }
}
export default OutstandingClients