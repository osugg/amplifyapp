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
        alert(this.state.inputText);
        
        const api = 'https://lpztlq09de.execute-api.us-east-1.amazonaws.com/comprehend/comprehend'
        const data = {
            "inputTranscript": this.state.inputText
        }
        
        fetch(api, {method: 'POST', cors: 'allow-cors', body: JSON.stringify(data)})
    }

    onInputChange = (event) => {
        this.setState({
            inputText: event.target.value
        })        
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <form onSubmit={this.submitHandler}>
                        <h1>Input text to analyze</h1>
                        <input type='text' name='sentimentInput' value={this.state.inputText} onChange={this.onInputChange}/>
                    </form>
                </header>
            </div>
        )
    }
}

export default SentimentForm