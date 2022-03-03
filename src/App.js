import logo from './logo.svg';
import './App.css';

function App() {
  const mos=["Andriod","Blackberry","iPhone","Windows Pnone"];
const mm=["Samsung","HTC","Micromax","Apple"];
  return <div className="main"><h2 className="redtext">Mobile Operating System</h2>
  <ul>{mos.map((el)=>{
    return <OsDisplay system= {el}/>
  })}</ul>
  <h2 className="redtext">Mobile Manufacturers</h2>
  <ul>{mm.map((el1)=>{
    return <OsDisplay system={el1}/>
  })}</ul>
  </div>;
}

function OsDisplay({system}){
  console.log(system);
return<li className="tealtext">{system}</li>
}

export default App;
