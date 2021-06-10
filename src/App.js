import './App.css';
import Header from './Header';
import ImageList from './ImageList';
import images from './data.js'
import Dropdown from './Dropdown';
import { Component } from 'react';

export default class App extends Component {
  state = {
      keyDropDown: "",
      hornDropDown: "",
  }
  handleHornChange = (e) => { 
    this.setState({hornDropDown: Number(e.target.value)})
      //console.log(e.target.value === '1')
      //console.log(1 === images[0].horns)
      
  }
  handleKeyChange = (e) => {
      this.setState({keyDropDown: e.target.value})
      console.log(this.props)
  }
  // explict return functions below. do not need curlies, just use paratheses and will return without needing to state the return.
  // //console.log(animal.keyword, this.state.keyDropDown) when NOT an explicit return 
  render(){
    let filteredAnimals = images;
    if (this.state.keyDropDown) {
      filteredAnimals = filteredAnimals.filter(animal => 
        animal.keyword === this.state.keyDropDown
      );
    }

    if (this.state.hornDropDown) {
      filteredAnimals = filteredAnimals.filter(animal => animal.horns === this.state.hornDropDown);
    }
    
    const keywordOptions =Array.from(new Set(images.map(animals => animals.keyword)));
    const hornOptions = Array.from(new Set(images.map(animals => animals.horns)));

    // this.props.images.filter((animal) => {
    //   if((animal.keyword === this.state.keyDropDown || !this.state.keyDropDown) 
    //   && (animal.horns === this.state.hornDropDown || !this.state.hornDropDown)) return true;
    //   return false;
    //});


    return (
    <div className="App">
      <Header />
      <label> Keyword:
      <Dropdown options={keywordOptions} handleChange={this.handleKeyChange} />
      </label>
      <label> # of Horns:
      <Dropdown options={hornOptions} handleChange={this.handleHornChange} />
      </label>
      <ImageList images={filteredAnimals}/>

    </div>
    );
  }
}

