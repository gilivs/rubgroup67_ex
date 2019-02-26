import React, { Component } from 'react'
import { Router, Route, Switch } from "react-router-dom";
import FilterForm from './FilterForm'
import PeoplePage from './views/PeoplePage'
import Navigation from './Navigation'
import people from '../people'
import createHistory from './history'
import '../App.css'

const history=createHistory

class App extends Component {
  state = {
    ageBetween: 0,
    ageTo: 0,
    gender: 'male',
    matchedPeople: [],
    people:[]
  }

  setAgeBetween = (e) => {
    const ageBetween = e.target.value
    console.log(ageBetween)
    this.setState(({ ageBetween }))
  }
  setAgeTo = (e) => {
    const ageTo = e.target.value
    console.log(ageTo)
    this.setState(() => ({ ageTo }))
  }

  setGender = (e) => {
    const gender = e.target.value
    console.log(gender)
    this.setState(() => ({ gender }))
  }

  filterArray = () => {
    const matchedPeople = this.state.people.filter((person) => {
      return (person.Age >= this.state.ageBetween) && (person.Age <= this.state.ageTo) && (person.Gender === this.state.gender)
    })
    this.setState(() => ({ matchedPeople }))
    console.log(matchedPeople)
    history.push("/people")
  }
  
  componentDidMount(){
    console.log('mount!')
    fetch('http://localhost:54258/api/persons')
    .then(response=>response.json())
    .then(people=>this.setState({people}))

  }

  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path="/" render={() => <FilterForm
              handlerBetween={this.setAgeBetween}
              handleTo={this.setAgeTo}
              ageBetween={this.state.ageBetween}
              ageTo={this.state.ageTo}
              handleGender={this.setGender}
              handleFilter={this.filterArray}
              gender={this.state.gender}
            />} />
            <Route path="/people" render={() => <PeoplePage
              matchedPeople={this.state.matchedPeople} />} />
          </Switch>
        </div>
      </Router>
    )
  }

}

export default App;