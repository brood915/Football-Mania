import React from 'react'; 
import { FormGroup, Radio } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Saved_Filter = (props) => 
{ 
    return (
        <div>
            <h1>Filter</h1>
            <form>
                <FormGroup onChange = {props.handleChange}>
                    <Radio value = "all" name="radioGroup" inline>
                        All
                    </Radio>
                    <Radio value = "fixtures" name="radioGroup" inline>
                        Fixtures
                    </Radio>
                    <Radio value = "tables" name="radioGroup" inline>
                        Tables
                    </Radio>
                    <Radio value = "teams" name="radioGroup" inline>
                        Teams
                    </Radio>
                    </FormGroup>
            </form>
        </div>
    ); 
}; 

Saved_Filter.propTypes = {
    handleChange: PropTypes.func.isRequired
}

export default Saved_Filter;