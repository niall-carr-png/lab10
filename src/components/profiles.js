import React from "react";
import { Profileobject } from "./profileobject";

/* Displays the array on the read page */
export class Profiles extends React.Component{
    render(){
            return this.props.profiles.map( (profile)=>{
                return <Profileobject profile={profile} key={profile._id} ReloadData={this.props.ReloadData}></Profileobject>
            }
            );
    }
}