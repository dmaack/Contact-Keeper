import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext'


const ContactForm = () => {
    // intializing context - so we have access to state + actions/methods associated with contact context
    const contactContext = useContext(ContactContext)

    const { addContact, current, clearCurrent, updateContact } = contactContext

    useEffect(() => {
        if(current !== null) {
            setContact(current)
        } else {
            setContact({
                name: '',
                email: '',
                phone: '',
                type: 'personal'
            })
        }
    }, [contactContext, current])

    // each key is the piece of state that will change based on the values of my inputs
    const [ contact, setContact ] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    })

    const { name, email, phone, type } = contact

    // what ever the user types in the input, I need to put into the slice of state
    const onChange = (e) => {
        setContact({
            ...contact, // copy whatever is in the current state
            [e.target.name]: e.target.value // taking the current value that's being changed (ie {name}), and dynamically allowing the key to be accessed using bracket notation and whatever the user is typing will be the value of the key
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log('current onSumbit', current)
        if(current === null) {
            // contact is what we are wanting to update in state and contains all the inputs
            addContact(contact)
        } else {
            updateContact(contact)
        }
        clearAll()
    }

    const clearAll = () => {
        clearCurrent()
    }

    return (
        <div>
            <form onSubmit={onSubmit} >
                <h2 className='tex-primary'>
                    {current ? 'Edit Contact' : 'Add Contact'}
                </h2>
                <input 
                    type='text' 
                    placeholder='Name' 
                    name='name' 
                    value={name} 
                    onChange={onChange} />
                <input 
                    type='text' 
                    placeholder='Email' 
                    name='email' 
                    value={email} 
                    onChange={onChange} />
                <input 
                    type='text' 
                    placeholder='Phone' 
                    name='phone' 
                    value={phone} 
                    onChange={onChange} />
                <h5>Contact Type</h5>
                <input 
                    type='radio' 
                    name='type' 
                    value='personal' 
                    checked={type === 'personal'} 
                    onChange={onChange} />{' '}
                Personal{' '}
                <input 
                    type='radio' 
                    name='type' 
                    value='professional' 
                    checked={type === 'professional'} 
                    onChange={onChange} />{' '} 
                Professional{' '}
                <div>
                    <input 
                        type='submit' 
                        value={current ? 'Update Contact' : 'Add Contact'} 
                        className='btn btn-primary btn-block' /> 
                </div>
                {current && 
                    <div>
                        <button className='btn btn-light btn-block' onClick={clearAll}>Clear</button>
                    </div>}
            </form>
        </div>
    )
}

export default ContactForm
