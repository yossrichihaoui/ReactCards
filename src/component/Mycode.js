import React from 'react'

 export default function Mycode(props) { 
    const name=props.name;
    const age=props.age;
    const date=props.date;
  return (
    <>
    <div style={{
        background:"purple",boxShadow:"0px 10px 10px gray",
        color:"white",
        margin:"10px",
    }}>
     <h1>{name}</h1>
     <p>{age}</p>
     <h2>{date}</h2>
    </div>
    </>
  )
}

