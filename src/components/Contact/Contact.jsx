import { Component } from 'react';
import { Item, Text, Button } from './Contact.styled';

export class Contact extends Component {
  render() {
    const { id, name, number, onDelete } = this.props;
    return (
      <Item>
        <Text>
          {name}: {number}
        </Text>
        <Button type="button" onClick={() => onDelete(id)}>
          Delete
        </Button>
      </Item>
    );
  }
}
