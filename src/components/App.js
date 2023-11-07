import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';


export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = newContact => {
    const { contacts } = this.state;
    const normalizedName = newContact.name.toLowerCase();
    let contactName = contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );

    if (contactName) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...newContact, id: nanoid() }],
    }));
  };

  deleteContact = evt => {
    const { contacts } = this.state;

    contacts.forEach(element => {
      if (element.name === evt.target.id) {
        const del = contacts.indexOf(element);
        contacts.splice(del, 1);

        this.setState({
          contacts: contacts,
        });
      }
    });
  };

  onFilter = evt => {
    let name = evt.target.value;
    this.setState({ filter: name });
  };

  getFiltereContacts = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
  );
};

render() {
  const { filter } = this.state;
  const filtereContacts = this.getFiltereContacts();

  return (
    <div className='numberCard'>
      <h1>Phonebook</h1>
      <ContactForm onAdd={this.addContact} />

      <h2>Contacts</h2>
      <Filter inputValue={filter} handleChange={this.onFilter} />
      <ContactList contacts={filtereContacts} onDelete={this.deleteContact} />
    </div>
  );
  }
  
}