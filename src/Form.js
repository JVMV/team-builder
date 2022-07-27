import React, { useState } from 'react';
import './Form.css'

export default function Form(props) {
const {name, email, role, update, submit} = props;

const onChange = e => {
    console.log(e.target.name, e.target.value);
    update(e.target.name, e.target.value);
}

const onSubmit = e => {
    e.preventDefault();
    submit();
}

return (
<div className='Form'>
    <form onSubmit={onSubmit}>
        <label>Name
            <input
                value={name} 
                name='name' 
                type='text' 
                placeholder='enter name'
                onChange={onChange}
            />
        </label>

        <label>Email
            <input 
                value={email}
                name='email' 
                type='email' 
                placeholder='enter email'
                onChange={onChange}
            />
        </label>

        <label>Role
            <select value={role} name='role' onChange={onChange}>
                <option value=''>-- What do you do? --</option>
                <option value='wizard'>I'm a wizard, Harry</option>
                <option value='jedi'>I cut paper with a lightsaber</option>
                <option value='flash'>I run fast, don't get in my way</option>
            </select>
        </label>

        <div className='submit'>
            <button>Submit</button>
        </div>
    </form>
</div>
    )
}