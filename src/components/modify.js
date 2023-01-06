import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export function Modify(props) {
// The useParams hook returns an object of key/value pairs of
// the dynamic params from the current URL that were matched by
//the <Route path>.
let { id } = useParams();
// update arrays using the React useState()
// and without the Array object's push() method
const [country, setCountry] = useState("");
const [flag, setFlag] = useState("");
const [capital, setCapital] = useState("");
// useNavigate return a function that we can use to navigate
const navigate = useNavigate();
//useEffect Hook is similar componentDidMount
useEffect(() => {
//axios is a promised based web client
//make a HTTP Request with GET method and pass as part of the
//url.
axios.get('http://localhost:4000/api/country/' + id)
.then((response) => {
    // Assign Response data to the arrays using useState.
    setCountry(response.data.country);
    setFlag(response.data.flag);
    setCapital(response.data.capital);
    })
    .catch(function (error) {
    console.log(error);
    })
    }, []);
    const manageSend = (event) => {
    event.preventDefault();
    const newCountry = {
        id: id,
        country: country,
        flag: flag,
        capital: capital
    };
    axios.put('http://localhost:4000/api/country/' + id, newCountry)
    .then((res) => {
    console.log(res.data);
    navigate('/profiles');
    });
    }
    return (
    <div>
    <form onSubmit={manageSend}>
    <div className="form-group">
    <label>Modify Country Name: </label>
    <input type="text"
    className="form-control"
    value={country}
    onChange={(e) => setCountry(e.target.value)}
    />
    </div>
    <div className="form-group">
    <label>Modify Country Flag: </label>
    <input type="text"
    className="form-control"
    value={flag}
    onChange={(e) => setFlag(e.target.value)}
    />
    </div>
    <div className="form-group">
    <label>Modify Country's Capital: </label>
    <input type="text"
    className="form-control"
    value={capital}
    onChange={(e) => setCapital(e.target.value)}
    />
    </div>
    <div className="form-group">
    <input type="submit" value="Modify Profile" className="btn btn-success"></input></div>
    </form>
    </div>
    );
    }