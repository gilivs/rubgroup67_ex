import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import ages from '../ageArray'

const FilterForm = (props) => {

  return (
    <div>
      <img src='images/Logo-Tinder.svg.png'></img>
      <h5>
        Please Fill the Form Below To Start:
      </h5>
      <div  id='radioD'>
      <RadioGroup
        aria-label="Gender"
        name="gender1"
        onChange={props.handleGender}
        value={props.gender}
      >
        <FormControlLabel  value="Female" className='gender' control={<Radio />} label="Female" />
        <FormControlLabel value="Male" control={<Radio />} label="Male" />
      </RadioGroup>
      </div>
      <FormControl>
        <h5>Between</h5>
        <Select
          inputProps={{
            name: 'age',
            id: 'age-simple',
          }}
          onChange={props.handlerBetween}
          value={props.ageBetween}
        >
          {ages.map((age) => <MenuItem value={age}>{age}</MenuItem>)}
        </Select>
        <h5>To</h5>
        <Select
          inputProps={{
            name: 'age',
            id: 'age-simple',
          }}
          onChange={props.handleTo}
          value={props.ageTo}

        >
          {ages.map((age) => <MenuItem value={age}>{age}</MenuItem>)}
        </Select>
        <Button variant="contained"  onClick={props.handleFilter}>
        Find!
      </Button>
        <br />
      </FormControl>
    </div>
  );
}

export default FilterForm;
