import './App.css';
import NetworkModel from './components/NetworModel';

function App() {
  const props = {
    title : "Network Model Information",
    networkTypes : [{typeName : 'Regional'},{typeName :'abc'},{typeName :'xyz'},{typeName :'pqr'}],
    networkProductType : [{name : 'New'},{name :'Old'}],
    networkIDType : [{type : 'Network Product'},{type :'ABC'},{type :'XYZ'}],
    idList : [{id : '12345'},{id : '23456'},{id : '34567'}],
  }
  return (
    <div className="App">
      <NetworkModel {...props}/>
    </div>
  );
}

export default App;
