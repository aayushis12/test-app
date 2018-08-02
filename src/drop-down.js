import React from 'react';

class DropDown extends React.Component{

  displayListItems = () => (
    <ul className="dd-list">
      {
        this.props.data.values.map((value) => (
          <li className="dd-list-item" onClick={()=>this.props.changeCity(value)}>{value}</li>
      ))
      }
    </ul>
  )

  render(){
    const { toggleList, listOpen, placeholder } = this.props;
    console.log(this.props.listOpen);
    return (
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
        {listOpen && this.displayListItems()}
      </div>
    )
  }
}

export default DropDown;