import React, { useState } from 'react'
const NextAnec = (props) =>{
  return(
    <button onClick = {props.handleclick}>Next Anecdote!</button>
  )
}
const Vote = (props) =>{
  return(
    <button onClick = {props.handleclick}>Vote!</button>
  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(Math.floor(Math.random()*5))
  const [vote, setVote] = useState({'arr':[0,0,0,0,0,0],'most':0})
  const next = () => {
      const nAnec = Math.floor(Math.random()*5)
      setSelected(nAnec)
  }
  const voting = () =>{
    let c = vote['most']
    let i = 0
    const newVote = vote['arr'][selected]+1
    var newOne = vote['arr'].map((element)=>{
      if(i ===  selected){
        i=i+1
        return newVote
      }
      i=i+1
      return element;
    })
    /*for(let i = 0; i<vote['arr'].length;i++){
      if(selected===i){
        newArray.push(newVote)
        continue;
      }
      newArray.push(vote['arr'][i])
    }*/
    if(vote['arr'][vote['most']]<newVote){
        c = selected
     }
    const newDict = {
      'arr':newOne,
      'most': c
    }
    setVote(newDict)
  }
  return (
    <div>
      {anecdotes[selected]}
      <br></br>
      Vote: {vote['arr'][selected]}
      <br></br>
      <NextAnec handleclick = {next}/>
      <Vote handleclick = {voting}/>

      <h1>Most Vote</h1>
      {anecdotes[vote['most']]}
      <br></br>
      Vote Number:{vote['arr'][vote['most']]}
    </div>
    
  )
}

export default App