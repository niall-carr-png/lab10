import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Utility(){
    
    const [country, setCountry] = useState('');
    const [flag, setFlag] = useState('');
    const [capital, setCapital] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:4000/api/country/aodsifj')
        .then((res)=>{
            setCountry(res.data.country);
            setFlag(res.data.flag);
            setCapital(res.data.capital);
        })
        .catch();
    },[]);
    
    const manageSend = (e)=>{
        e.preventDefault();

        const newCountry = {
            country:country,
            flag:flag,
            capital:capital
        }

        axios.post('http://localhost:4000/api/countries',newCountry)
        .then((res)=>{
            console.log(res);
            navigate('/read');
        })
        .catch();

    };
    return(
    <div>
        <h1>Hello World!</h1>
        <form onSubmit={manageSend}>
                <div>
                    <label>Add Country Name:</label>
                    <input
                    type="text"
                    className="form-control"
                    value={country}
                    onChange={(e)=>{setCountry(e.target.value)}}>
                    </input>
                </div>
                <div>
                    <label>Add Country Flag:</label>
                    <input
                    type="text"
                    className="form-control"
                    value={country}
                    onChange={(e)=>{setFlag(e.target.value)}}>
                    </input>
                </div>
                <div>
                    <label>Add Country Capital:</label>
                    <input
                    type="text"
                    className="form-control"
                    value={country}
                    onChange={(e)=>{setCapital(e.target.value)}}>
                    </input>
                </div>
<input type="submit" value="Add Profile"></input>
        </form>
    </div>
    );
}