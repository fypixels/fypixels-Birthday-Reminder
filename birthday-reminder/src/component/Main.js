import React from 'react'
import { data } from '../data'
// import { useState } from 'react'

const Main = () => {
  const [people, setPeople] = React.useState(data)

  const isEmpty = people.length === 0;
  const message = isEmpty ? "No Birthdays Today" : `${people.length} Birthdays Today`;

  return (
    <React.Fragment>
      <section className='container'>
        <h3>{message}</h3>
      {
        people.map((person)=>{
          const {id, img, name, age} = person
        //  console.log(id);
         const removeItem=(id)=>{
          let newPeople = people.filter((person)=> person.id !== id)
          setPeople(newPeople)
         }
          return (
        <section key={id}>
        <article className='person' key={id}>
          <img className='img' src={img} alt="" />
          <div className='justify'>
            <div>
            <h4>{name}</h4>
            <p>{age} years</p>
            </div>
          <button className='btn-delete'
          onClick={()=> removeItem(person.id)}
          >remove</button>
          </div>
        </article>
        </section>
          )
        })
      }


        <button 
        type='button'
        className='btn btn-block'
        onClick={()=> setPeople([])}>
          Clear All
        </button>
      </section>

      
    </React.Fragment>
  )
}

export default Main
