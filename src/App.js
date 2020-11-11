import './App.css';
import SentimentForm from './SentimentForm.js';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <SentimentForm />
      <AmplifySignOut />
    </div>
  );
}


export default withAuthenticator(App);
//export default App;
