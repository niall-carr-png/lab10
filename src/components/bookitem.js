import React from "react";
import Card from "react-bootstrap/card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/button";
import axios from "axios";
// import Button from "react-bootstrap/Button";

/* Defines the formatting for the array */
export class BookItem extends React.Component{

    constructor(){
        super();
        this.DeleteBook = this.DeleteBook.bind(this);
    }

    /* Delete book method */
    DeleteBook(e){ 
        e.preventDefault();

        axios.delete('http://localhost:4000/api/book/'+this.props.book._id)
        .then(()=>{this.props.ReloadData()})
        .catch();
    }

    // Display of book record
    render(){
        return(
            <div>
                {/* <h4>{this.props.book.title}</h4>
                <img src={this.props.book.thumbnailUrl}></img>
                <p>{this.props.book.authors[0]}</p> */}
                <Card>
                    <Card.Header>{this.props.book.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                        <img src={this.props.book.cover}></img>
                            <footer >
                            {this.props.book.author}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={"/edit/"+this.props.book._id} className="btn btn-primary">Edit</Link>
                    <Button variant ="danger" onClick={this.DeleteBook}>Delete</Button>

                </Card>
            </div>
        );
    }
}