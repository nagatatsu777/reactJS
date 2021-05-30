import React, { useState } from 'react'
const GoodClick = (props) =>{
  return (
   <button onClick = {props.handleclick}>good</button>
  )
}
const Statistics = ({clicks,setClick})=>{

  const NeutralClick = () =>{
    const newClicks = {
      ...clicks, 
      neutral: clicks.neutral+1,
      allClicks: clicks.allClicks+1,
      average: (clicks.good-clicks.bad)/(clicks.allClicks+1),
      positive: clicks.good/(clicks.allClicks+1)*100
    }
    setClick(newClicks)
  
  }
  const BadClick = () =>{
    const newClicks = {
      ...clicks, 
      bad: clicks.bad+1,
      allClicks: clicks.allClicks+1,
      average: (clicks.good-clicks.bad-1)/(clicks.allClicks+1),
      positive: clicks.good/(clicks.allClicks+1)*100
    }
    setClick(newClicks)
  
  }
    const FeedBack = ()=>{
      if(clicks.bad===0&&clicks.good===0&&clicks.neutral===0){
        return(
          <div>
            No Feed Back given
          </div>
        )
      }
      else{
        return(
          <div>
          <table><thead><tr><th>Statistics</th></tr></thead><tbody><tr><th>Condition</th><th>Number</th></tr><tr><td>Bad:</td><td>{clicks.bad}</td></tr><tr><td>Neutral:</td><td>{clicks.neutral}</td></tr><tr><td>Good:</td><td>{clicks.good}</td></tr><tr><td>All:</td><td>{clicks.allClicks}</td></tr><tr><td>Average:</td><td>{clicks.average}</td></tr><tr><td>Positive:</td><td>{clicks.positive}</td></tr></tbody></table>
          </div>

        )

      }
    }
  

  return (

    <div>
      <h1>Give FeedBacks</h1>    
      <button onClick = {BadClick}>bad</button>
      <button onClick = {NeutralClick}>neutral</button>
      <br></br>
      <FeedBack/>
    </div>

  )

}
const App = () => {
  const [clicks, setClick ] = useState({
    good:0,neutral:0,bad:0,allClicks:0,average:0,positive:0
  })
  const goodi = ()=> {
    const newClicks = {
      ...clicks, 
      good: clicks.good+1,
      allClicks: clicks.allClicks+1,
      average: (clicks.good+1-clicks.bad)/(clicks.allClicks+1),
      positive: (clicks.good+1)/(clicks.allClicks+1)*100
    
    }
    setClick(newClicks)
  }
  return(
    <div>
      <Statistics clicks = {clicks} setClick = {setClick}/>
      <GoodClick handleclick = {goodi}/>
    </div>

  )

}


export default App