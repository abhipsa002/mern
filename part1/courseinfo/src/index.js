import React from 'react';
import ReactDOM from 'react-dom';

const Header=(props)=>{
  return(
    <div>
    <h1>{props.course} </h1>    
    </div>
  )
}
const Content = (props) => {
  return(
    <div>
        <Part content={props.content[0]}/>
        <Part content={props.content[1]}/>
        <Part content={props.content[2]}/>
    </div>
  )
}

const Total=(props)=>{
  return(
    <>
    <p>Number of exercises {props.total[0].exercises+props.total[1].exercises+props.total[2].exercises}</p>
    </>
  )
}

const Part=(props)=>{
  return(
   <p>{props.content.name} {props.content.exercises}</p>
  )
}

const App=()=>{
   const app={
   course : 'Half Stack application development',
   parts :[
  { name: 'Fundamentals of React',
    exercises :10
  },
 
   { name:'Using props to pass data',
    exercises :7
   },
  
   { name:'State of a component',
    exercises :14
   }
  ]
}
  return(
   <div>
   <Header course={app.course} />
   <Content content={app.parts} />
   <Total total={app.parts} />
     
   </div>
  )
  }

ReactDOM.render(<App />, document.getElementById('root'))