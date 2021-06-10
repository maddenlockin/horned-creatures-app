import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <div>
                {/* parent's handleChange function gets called here as a prop */}
                <select onChange={this.props.handleChange}>
                    <option value="">All</option>
                    {/* //map over string array of options to create a list of option elements */}
                    {this.props.options.map((picked, i) => <option key={i} value ={picked}>{picked}</option>)}
                </select>
            </div>
        )
    }
}

/* <label> # of Horns:
    <select onChange={this.handleHornChange}>
        <option></option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={100}>100</option>
    </select>
</label>
<label> Keyword:
    <select onChange= {this.handleKeyChange}>
        <option></option>
        <option value="narwhal" > narwhal </option>
        <option value="rhino" > rhino </option>
        <option value="unicorn" > unicorn </option>
        <option value="unilego" > unilego </option>
        <option value="triceratops" > triceratops </option>
        <option value="markhor" > markhor </option>
        <option value="mouflon" > mouflon </option>
        <option value="addax" > addax </option>
        <option value="chameleon" > chameleon </option>
        <option value="lizard" > lizard </option>
        <option value="dragon" > dragon </option>
    </select>
</label> */