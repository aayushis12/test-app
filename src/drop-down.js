import React from 'react';


const displayListItems = (data, changeCity) => (
  <ul className="dd-list">
    {
      data.values.map((value) => (
        <li className="dd-list-item" onClick={()=>changeCity(value)}>{value}</li>
    ))
    }
  </ul>
)

const DropDown = ({ data, toggleList, listOpen, placeholder, changeCity }) => (
  <div className="dd-wrapper">
    <div className="dd-field" onClick={toggleList}>
      <div>{placeholder}</div>
    {
      listOpen? 
      (
        <i className="fa fa-angle-up" />
      ) : 
      (
        <i className="fa fa-angle-down" />
      )
    }
    </div>
    {listOpen && displayListItems(data, changeCity)}
  </div>
)

export default DropDown;