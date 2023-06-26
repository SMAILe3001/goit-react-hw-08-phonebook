import { useDispatch, useSelector } from 'react-redux';

import { getContactsFilter } from 'redux/filter/filterSelectors';
import { filterContacts } from 'redux/filter/filterSlice';

import { Input, Title } from './Filter.styled';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getContactsFilter);

  return (
    <div>
      <Title>Find contacts by name</Title>
      <label>
        <Input
          type="text"
          name="filter"
          required
          onChange={e => dispatch(filterContacts(e.currentTarget.value))}
          value={filter}
        />
      </label>
    </div>
  );
}
