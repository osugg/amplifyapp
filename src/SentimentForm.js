import React, { Component } from 'react'
import axios from 'axios'
  
class SentimentForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            inputText: '',
            result: ''
        }
        this.submitHandler = this.submitHandler.bind(this)
    }

    submitHandler = (event) => {
        event.preventDefault();
        alert(event.target.value);
        console.log(event);
        console.log(event.target.name);
        console.log(event.target.value);
        this.setState({
            inputText: event.target.value
        })
        
        console.log("state set to " + this.inputText)
        const api = 'https://lpztlq09de.execute-api.us-east-1.amazonaws.com/comprehend'
        const data = {
            "inputTranscript": 'good'
        }
        
        axios
            .post(api, data, {
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }})
            .then((response) => {
                this.setState({
                    result: response
                })
                console.log("got answer")
                console.log(response);
            })
            .catch((error) => {
                console.log("error getting request")
                console.log(error);
            });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <form onSubmit={this.submitHandler}>
                        <h1>Input text to analyze</h1>
                        <input type='text' name='sentimentInput'/>
                    </form>
                </header>
            </div>
        )
    }
}

export default SentimentForm