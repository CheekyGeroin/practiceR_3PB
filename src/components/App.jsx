import { Component } from 'react';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    this.setState({
      contacts: [...savedContacts],
    });
  }
  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  addNewContact = ({ name, number }) => {
    const { contacts } = this.state;

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in your contacts!`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  onChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContact = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    const filteredContact = this.getFilteredContact();
    return (
      <Container>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addNewContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.onChangeFilter} />
        <ContactList contacts={filteredContact} onDelete={this.deleteContact} />
      </Container>
    );
  }
}
