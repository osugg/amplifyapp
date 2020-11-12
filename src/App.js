import './App.css';
import SentimentForm from './SentimentForm.js';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { Storage } from 'aws-amplify'

function App() {
  // state = { fileUrl : '', file: '', fileName: '' }
  // handleChange = e => {
  //   const file = e.target.files[0]
  //   this.setState({
  //     fileUrl: URL.createObjectURL(file),
  //     file, 
  //     fileName: file.name
  //   })
  // }
  // saveFile = () => {
  //   Storage.put(this.state.fileName, this.state.file)
  //     .then(() => {
  //       console.log('Successfully saved file!')
  //       this.setState({ fileUrl : '', file: '', fileName: '' })
  //     })
  //     .catch(err => {
  //       console.log('Error uploading file.', err)
  //     })
  // }
  return (
    <div className="App">
      <SentimentForm />
      <AmplifySignOut />
    </div>
  );
}


export default withAuthenticator(App);
//export default App;
