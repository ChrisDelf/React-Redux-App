import React from 'react';
import { connect } from 'react-redux';
import ReactLoading from "react-loading";

const FoxList = props => {



  return(
    <>
    <h1>Click here for some foxes</h1>
    <button>
    <ReactLoading type="cubes" color = "green"/>
    </button>

    </>
  )


}
const mapToProps = state => {
  return{
    isLoading: state.isLoading,
    images: state.images
  }
}

export default connect(mapToProps, {})(FoxList);



