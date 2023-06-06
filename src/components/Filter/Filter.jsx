import { useDispatch } from 'react-redux';

import { filterContact } from 'redux/filterSlice';

import { Input, Title } from './Filter.styled';

export function Filter() {
  const dispatch = useDispatch();

  return (
    <div>
      <Title>Find contacts by name</Title>
      <label>
        <Input
          type="text"
          name="filter"
          required
          onChange={e => dispatch(filterContact(e.currentTarget.value))}
          // value={value}
        />
      </label>
    </div>
  );
}
