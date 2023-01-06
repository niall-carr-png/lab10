import React from "react";
import { Profiles } from "./profiles";
import axios from "axios";

export class View extends React.Component{

   //Binds data to be reloaded
    constructor(){
        super();
        this.RefreshInput = this.RefreshInput.bind(this);
    }

     //Tells view.js to reload data
    RefreshInput(){
    axios.get('http://localhost:4000/api/countries')
        .then((response)=>{
            this.setState({profiles:response.data})
    })
    .catch((error)=>{
        /* Default error message */
        console.log(error);
    })

    }

    /* Retrieving the JSON blob */
    componentDidMount() {
        axios.get('http://localhost:4000/api/countries')
        .then((response)=>{
            this.setState({profiles:response.data})
    })
    .catch((error)=>{
        /* Default error message */
        console.log(error);
    })

    }



    /* The array to be displayed in read */
    state ={
        profiles: [
        /* Profile returned by JSON blob */

            ]
           
    }

    /* Displayed HTML */
    render(){
        return(
            <div>
                <h3>Country Profiles</h3>
                {/*JSON output in HTML*/}
                <Profiles profiles={this.state.profiles} ReloadData={this.RefreshInput}></Profiles>
            </div>
        );
    }
}