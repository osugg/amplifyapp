import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import config from './config';
import { Amplify } from 'aws-amplify';
//import { ReactComponent } from '*.svg';

Amplify.configure({
  Storage: {
    region: config.s3.REGION,
    bucket: config.s3.BUCKET,
  },
  API: {
    endpoints: [
      {
        name: "default",
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION
      },
    ]
  }
});

// function submitHandler(event) {
//   alert("Text submitted");
//   const api = 'https://lpztlq09de.execute-api.us-east-1.amazonaws.com/test'
// }

// class SentimentInput extends React.Component{
//   render() {
//     return (
//       <form onSubmit={submitHandler}>
//         <h1>Input text to analyze</h1>
//         <input type="text"/>
//       </form>
//     );
//   }
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
