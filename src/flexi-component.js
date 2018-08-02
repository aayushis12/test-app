import React from 'react';
import DropDown from './drop-down';

class FlexiComponent extends React.Component{
  state={
    listOpen: false,
    details: {
      name: '',
      city: 'Select One',
    }
  }

  capitaliseFirstLetter = (word) => word.charAt(0).toUpperCase() + word.slice(1);

  changeCity = (city) => {
    this.setState({
      listOpen: false,
      details: {
        ...this.state.details, city,
      }
    })
  }

  toggleList = () => {
    this.setState({ listOpen: !this.state.listOpen })
  }

  renderView = () => (
    this.props.config.items.map((data) => {
      return (
        <div className="form-elements" key={data.name}>
          <div className="name">{this.capitaliseFirstLetter(data.name)}</div>
          <div>
            {
              data.type==="TextField"? 
            (<input value={this.state.details.name} onChange={(e)=>this.setState({details: {...this.state.details, name: e.target.value}})}/>) : 
            (<DropDown data={data} 
         toggleList={this.toggleList} placeholder={this.state.details.city} listOpen={this.state.listOpen} changeCity={this.changeCity}/>)
            }
          </div>
        </div>
      )
    })
  )

  render(){
    return (
      <div className="container">
        {this.renderView()}
        <input type="button" value="Submit" className="button" onClick={() => this.props.onSubmit(this.state.details)}/>
      </div>
    );
  }
}

export default FlexiComponent;