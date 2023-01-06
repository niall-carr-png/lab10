import React from "react";
import Card from "react-bootstrap/card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/button";
import axios from "axios";
// import Button from "react-bootstrap/Button";

/* Defines the formatting for the array */
export class Profileobject extends React.Component{

    constructor(){
        super();
        this.DeleteProfile = this.DeleteProfile.bind(this);
    }

    /* Delete profile method */
    DeleteProfile(e){
        e.preventDefault();

        axios.delete('http://localhost:4000/api/country/'+this.props.profile._id)
        .then(()=>{this.props.ReloadData()})
        .catch();
    }

    // Display of country record
    render(){
        return(
            <div>
                {/* <h4>{this.props.country.country}</h4>
                <img src={this.props.country.thumbnailUrl}></img>
                <p>{this.props.country.capitals[0]}</p> */}
                <Card>
                <span class="border border-danger">
                    <Card.Header><h2>{this.props.profile.country}</h2></Card.Header>
                    <Card.Body>                 
                        <blockquote className="blockquote mb-0">
                        <img src={this.props.profile.flag}></img>
                            <footer >
                            {this.props.profile.capital}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={"/modify/"+this.props.profile._id} className="btn btn-success">Edit</Link>
                    <Button variant ="secondary" onClick={this.DeleteProfile}>Delete</Button>
                </span>
                </Card>
            </div>
        );
    }
}