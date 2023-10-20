import { Contact } from 'components/Contact/Contact';
import { Component } from 'react';
import { List } from './ContactList.styled';

export class ContactList extends Component {
  render() {
    const { contacts, onDelete } = this.props;
    return (
      <List>
        {contacts.length > 1 &&
          contacts.map(({ id, name, number }) => (
            <Contact
              key={id}
              id={id}
              name={name}
              number={number}
              onDelete={onDelete}
            />
          ))}
      </List>
    );
  }
}
