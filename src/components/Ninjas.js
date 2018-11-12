import React, { Component } from 'react';

const Ninjas = (props) => {
  //console.log(this.props.ninjas)
  //const {name, age, belt} = this.props
  //const {ninjas} = this.props
  //functional component so we dont use 'this', we're not referring to instance of class
  const {ninjas} = props
  console.log(ninjas)

  const ninjaList = ninjas.map(ninja => {
    return (
      <div className="ninja" key={ninja.id}>
        <div>Name: {ninja.name}</div> 
        <div>Age: {ninja.age}</div>
        <div>Belt: {ninja.belt}</div>
      </div>
    )
  })


  return(
    <div className="ninja__list">
      {ninjaList}
    </div>
  )
}

export default Ninjas;