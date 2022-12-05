import React from "react";
import axios from "axios";

export class Create extends React.Component{

    // binding events to instances
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookCover = this.onChangeBookCover.bind(this);
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);
        
        this.state = {
            title:'',
            cover:'',
            author:''
        }
    }
    // logging form input
    handleSubmit(e){
        e.preventDefault();
        console.log(`Button clicked
        ${this.state.title},
        ${this.state.cover},
        ${this.state.author}`);

        const book = {
            title:this.state.title,
            cover:this.state.cover,
            author:this.state.author
        }

        axios.post('http://localhost:4000/api/books',book)
        .then()
        .catch();

        this.setState({
            title:'',
            cover:'',
            author:''
        })
    }

    // class for changing book title
    onChangeBookTitle(e){
        this.setState({
            title:e.target.value
        })
    }

    // class for changing book cover
    onChangeBookCover(e){
        this.setState({
            cover:e.target.value
        })
    }

    // class for changing book author
    onChangeBookAuthor(e){
        this.setState({
            author:e.target.value
        })
    }


    render(){
        return (
            <div>
                {/*HTML Heading*/}
                <h3>Hello from my Create component!</h3>

                {/*Book title form*/}
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Add Book Title: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeBookTitle}
                            />
                    </div>

                {/*Book cover form*/}
                    <div className="form-group">
                        <label>Add Book Cover: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.cover}
                            onChange={this.onChangeBookCover}
                            />
                    </div>                    

                {/*Book author form*/}
                    <div className="form-group">
                        <label>Add Author </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.author}
                            onChange={this.onChangeBookAuthor}
                            />
                    </div>  

                    <input type="submit" value="Submit" />
                 </form>
            </div>
        );
    }
    
}

