import React, { useState } from 'react'
import propTypes from 'prop-types'

export const AddCategory = ({ handleAdd }) => {
                const [form, setForm] = useState({})

                const handleChange = ( e ) => {
                                setForm({ ...form, [e.target.name]: e.target.value })
                };

                const handleSubmit = ( e ) => {
                                e.preventDefault();

                                handleAdd( Object.values( form )  );
                };

                return (
                                <form onSubmit={ handleSubmit }>
                                                <input 
                                                                type="text"
                                                                name="name"
                                                                placeholder="Type something" 
                                                                value={ form.name }
                                                                onChange={ handleChange }
                                                />

                                                <button type="submit"> Submit </button>
                                </form>
                )
}

AddCategory.propTypes = {
                handleAdd: propTypes.func.isRequired
}