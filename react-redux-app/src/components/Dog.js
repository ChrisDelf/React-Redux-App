import React from 'react';

const Dog = props => {
  console.log("in DOg", props.image)
  return (
    <div>
    <img src ={props.image} alt = "image failed to load"/>
    </div>)
}

export default Dog;
