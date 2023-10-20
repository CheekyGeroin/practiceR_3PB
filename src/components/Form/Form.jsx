import { Component } from 'react';
import { FormContainer, Label, Input, Button } from './Form.styled';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  submitForm = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };
  reset = () => {
    this.setState({
      name: ' ',
      number: ' ',
    });
  };
  render() {
    const { name, number } = this.state;
    return (
      <FormContainer onSubmit={this.submitForm}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
            value={name}
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
            value={number}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormContainer>
    );
  }
}
