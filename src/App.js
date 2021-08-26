import { useState, useEffect } from "react";
import shortid from "shortid";
import './App.css';
import Form from "./Components/Form";
import Filter from "./Components/Filter";
import ContactList from "./Components/ContactList";

const initialContacts = [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? initialContacts});
    
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  
  const addContact = ( name, number ) => {
    
    const contact = {
      id: shortid(),
      name,
      number,
    };

    if (contacts.map(contact => contact.name).includes(name)) {
      alert(`${name} is already in contacs.`)
    } else {
      setContacts(prevState => [contact, ...prevState]);
    }
  };
      

  const  changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getVisibleContacts = () => {
    

    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );
  }
  

  const deleteContact = contactId => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
  };

  return (
      <div>

        <h1>Phonebook</h1>

        <Form onSubmit={addContact} />

        <h2>Contacts</h2>

        <Filter
          value={filter}
          onChange={changeFilter}
          />

        <ContactList
          contacts={getVisibleContacts()}
          onDeleteContact={deleteContact}
        />
        
      </div>
    )
  }
