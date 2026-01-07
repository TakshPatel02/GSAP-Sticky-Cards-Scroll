import React from 'react'
import Card from './Component/Card'

const App = () => {

  const data = [
    {
      title1: "The",
      title2: "Algorithm",
      description: "The algorithm's workings are shrouded in complexity",
      imgSrc: "1.png"
    },
    {
      title1: "The",
      title2: "Dogma",
      description: "Enshrining the principles of conformity and reinforcing the status quo",
      imgSrc: "2.png"
    },
    {
      title1: "The",
      title2: "Architects",
      description: "The elusive entities, lacking human form, operate in the shadows",
      imgSrc: "3.png"
    },
    {
      title1: "The",
      title2: "Wasteland",
      description: "This overlooked realm, a consequence of algorithmic judgments.",
      imgSrc: "4.png"
    },
    {
      title1: "The",
      title2: "Narrative",
      description: "The collective story sculpted by the architects.",
      imgSrc: "5.png"
    },
    {
      title1: "The",
      title2: "Opulence",
      description: "The cognitive elite's wealth in the algorithmic society.",
      imgSrc: "6.png"
    }
  ]

  return (
    <div className='w-full h-auto gap-20 py-20 bg-stone-950/95 flex flex-col justify-center items-center'>
      {data.map((item, index) => (
        <Card key={index} item={item} index={index}/>
      ))}
    </div>
  )
}

export default App