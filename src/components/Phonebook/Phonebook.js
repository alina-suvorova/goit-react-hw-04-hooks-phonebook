import React, { useState} from 'react';
import PhonebookInput from './PhoneBookInput/PhonebookInput';


const Phonebook = ({addContacts}) => {
    const [contact, setContact] = useState({
        name: '',
        number: ''
    });

    const onChangeInpuntName = (e) => {
        const {name, value} = e.target
        setContact((prev)=>({...prev, [name]: value}))
    }
    const onSubmitContacts = (e) => {
        e.preventDefault();
        addContacts(contact.name, contact.number)
        setContact({name: "", number: ""}) 
    }
    const {name, number} = contact
    return (
        <PhonebookInput 
            name={name} 
            number={number} 
            onChangeInpuntName={onChangeInpuntName} 
            onSubmitContacts={onSubmitContacts}/>
    );
}

export default Phonebook;

