import React, { Component } from 'react'
import { Storage } from 'aws-amplify'
import axios from 'axios'
  
class SentimentForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            inputText: '',
            result: '',
            fileUrl: '',
            file: '',
            fileName: ''
        }
        this.submitHandler = this.submitHandler.bind(this)
    }

    submitHandler = (event) => {        
        event.preventDefault();
        alert(this.state.inputText);

        // const file = e.target.files[0]
        // this.setState({
        //   fileUrl: URL.createObjectURL(file),
        //   file, 
        //   fileName: file.name
        // })
        
        const api = 'https://lpztlq09de.execute-api.us-east-1.amazonaws.com/comprehend/comprehend'
        const callData = {
            "inputTranscript": this.state.inputText
        }
        
        let component = this;
        fetch(api, {method: 'POST', cors: 'allow-cors', body: JSON.stringify(callData)})
            .then(function(response){
                if(response.ok){
                    response.text().then(function(data) {
                        console.log("RESPONSE RECEIVED")
                        console.log("Response text: " + data);

                        component.setState({ result: data})
                        console.log("this.result: " + component.result)
                    });
                }
            })

        // let fileBody = this.state.inputText + '/n' + this.state.result
        // let data = new Blob([fileBody], {type: 'text/plain'})


        // this.saveFile
    }

    saveFile = () => {
        Storage.put(this.state.fileName, this.state.file)
            .then(() => {
                console.log('Successfully saved file!')
                this.setState({ fileUrl : '', file: '', fileName: '' })
            })
            .catch(err => {
                console.log('Error uploading file.', err)
            })
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