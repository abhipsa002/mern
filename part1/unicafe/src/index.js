import React,{useState} from 'react';
import ReactDOM from 'react-dom';

const Statistics=(props)=>{
  return(
    <tr>
      <td>{props.title}</td>
      <td>{props.count}</td>
    </tr>
  )
}


const Button=({handleClick,text})=>(
  <button onClick={handleClick}>
    {text}
  </button>
)

const App=()=>{
  const [good,setGood]=useState(0)
  const [neutral,setNeutral]=useState(0)
  const [bad,setBad]=useState(0)

  const handleGood=()=>{
    setGood(good+1)
  }
  const handleNeutral=()=>{
    setNeutral(neutral+1)
  }
  const handleBad=()=>{
    setBad(bad+1)
  }


return (
  <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text="good"/>
      <Button handleClick={handleNeutral} text="neutral"/>
      <Button handleClick={handleBad} text="bad"/>
      <h1>statistics</h1>
      <table>
        <tbody>
          <Statistics title="good" count={good}/>
          <Statistics title="neutral" count={neutral}/>
          <Statistics title="bad" count={bad}/>
          <Statistics title="all" count={good+bad+neutral}/>
          <Statistics title="average" count={(good-bad)/(good+bad+neutral)}/>
          <Statistics title="positive" count={(good)/(bad+good+neutral)*100}/>
          
        </tbody>
      </table>

  </div>
)

}
ReactDOM.render(<App />, document.getElementById('root'))