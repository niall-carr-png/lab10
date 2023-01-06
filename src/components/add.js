import React from "react";
import axios from "axios";

export class Add extends React.Component{

    // binding events to instances
    constructor(){
        super();
        this.manageSend = this.manageSend.bind(this);
        this.onAlterProfileCountry = this.onAlterProfileCountry.bind(this);
        this.onAlterProfileFlag = this.onAlterProfileFlag.bind(this);
        this.onAlterProfileCapital = this.onAlterProfileCapital.bind(this);
        
        this.state = {
            country:'',
            flag:'',
            capital:''
        }
    }
    // logging form input
    manageSend(e){
        e.preventDefault();
        console.log(`Button clicked
        ${this.state.country},
        ${this.state.flag},
        ${this.state.capital}`);

        const country = {
            country:this.state.country,
            flag:this.state.flag,
            capital:this.state.capital
        }

        axios.post('http://localhost:4000/api/countries',country)
        .then()
        .catch();

        this.setState({
            country:'',
            flag:'',
            capital:''
        })
    }

    // class for changing country
    onAlterProfileCountry(e){
        this.setState({
            country:e.target.value
        })
    }

    // class for changing country flag
    onAlterProfileFlag(e){
        this.setState({
            flag:e.target.value
        })
    }

    // class for changing country capital
    onAlterProfileCapital(e){
        this.setState({
            capital:e.target.value
        })
    }


    render(){
        return (
            <div>
                {/*HTML Heading*/}
                <h3>Add a new country profile!</h3>

                {/*Country name form*/}
                <form onSubmit={this.manageSend}>
                    <div className="form-group">
                        <label>Add Country Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.country}
                            onChange={this.onAlterProfileCountry}
                            />
                    </div>

                {/*Country flag form*/}
                    <div className="form-group">
                        <label>Add Country Flag: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.flag}
                            onChange={this.onAlterProfileFlag}
                            />
                    </div>                    

                {/*Country Capital form*/}
                    <div className="form-group">
                        <label>Add Country Capital: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.capital}
                            onChange={this.onAlterProfileCapital}
                            />
                    </div>  

                    <input type="submit" value="Submit" />
                 </form>
            </div>
        );
    }
    
}

