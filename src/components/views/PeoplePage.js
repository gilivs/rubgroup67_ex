import React, { Component } from 'react';
import ActionsButtons from '../ActionsButtons.js'
import UserDetails from '../UserDetails.js'
import UserPicture from '../UserPicture.js'
import noPic from '../../noPic'

class PeoplePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personNumber: 0,
      currentPerson: {
        id: '', name: '', gender: '', age: '', height: '', location: '',Hobiesarr: [],
        image: noPic
      }
    }
  }

  setPerson = () => {
    const currentPerson = this.props.matchedPeople[0]
    this.setState(() => ({ currentPerson }))
  }

  componentDidMount=()=>{
    console.log('did mount!')
    this.setPerson()
  }

  //go to the next person
  upPerson = () => {
    console.log(this.props.matchedPeople.length)
    if (this.state.personNumber === this.props.matchedPeople.length - 1) {
      console.log('going to zero')
      this.setState(() => ({ personNumber: 0 }))
      this.setState(() => ({ currentPerson: this.props.matchedPeople[this.state.personNumber] }))
      return
    }
    this.setState((prevState) => ({ personNumber: prevState.personNumber + 1 }))
    this.setState(() => ({ currentPerson: this.props.matchedPeople[this.state.personNumber] }))
    console.log(this.state)


  }

  render() {
    return (
      <div>
        <UserPicture image={(this.state.currentPerson && this.state.currentPerson.Image) ? this.state.currentPerson.Image : noPic} />
        <ActionsButtons movePerson={this.upPerson} />
        <UserDetails details={this.state.currentPerson ? this.state.currentPerson : {}} />
      </div>
    );
  }
}



export default PeoplePage;
