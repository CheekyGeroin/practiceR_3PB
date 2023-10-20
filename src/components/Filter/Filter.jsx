import { Component } from 'react';
import { Label, Input } from './Filter.styled';

export class Filter extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <Label>
        Find contacts by name
        <Input type="text" value={value} onChange={onChange} />
      </Label>
    );
  }
}
