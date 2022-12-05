import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Functional(){
    
    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');
    const [author, setAuthor] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:4000/api/book/aodsifj')
        .then((res)=>{
            setTitle(res.data.title);
            setCover(res.data.cover);
            setAuthor(res.data.author);
        })
        .catch();
    },[]);
    
    const handleSubmit = (e)=>{
        e.preventDefault();

        const newBook = {
            title:title,
            cover:cover,
            author:author
        }

        axios.post('http://localhost:4000/api/books',newBook)
        .then((res)=>{
            console.log(res);
            navigate('/read');
        })
        .catch();

    };
    return(
    <div>
        <h1>Hello Everyone!</h1>
        <form onSubmit={handleSubmit}>
                <div>
                    <label>Add Book Title:</label>
                    <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e)=>{setTitle(e.target.value)}}>                        
                    </input>
                </div>
                <div>
                    <label>Add Book Cover:</label>
                    <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e)=>{setCover(e.target.value)}}>                        
                    </input>
                </div>
                <div>
                    <label>Add Book Author:</label>
                    <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e)=>{setAuthor(e.target.value)}}>                        
                    </input>
                </div>
<input type="submit" value="Add Book"></input>
        </form>
    </div>
    );
}