import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';
import { FilterContainer } from './Filter.styled';

export class Filter extends Component {
    render() {
        return(
        <FilterContainer>
            <p>Find contacts by name</p>
            <Formik
                initialValues={{
                    search: '',
                }}
                onSubmit={(values, actions) => {
                    
                }}
            >
                <Form>
                    <div className='container'>
                        <label htmlFor="search">Name</label>
                        <Field
                            id="seacrh"
                            name="search"
                            placeholder="Name Surname"
                            value={this.props.inputValue}
                            onChange={this.props.handleChange}
                        />
                    </div>
                </Form>
            </Formik>
        </FilterContainer>
        );
    }
}