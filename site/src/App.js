import React,{Fragment} from 'react'
import './App.css';

import Inputtodo from './components/inputtodo'
import Listtodos from './components/listtodos'

function App() {
  return (
<Fragment>
  <div className="container">
    <Inputtodo />
    <Listtodos />
  </div>
</Fragment>
  );
}

export default App;
