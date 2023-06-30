import { useDispatch } from 'react-redux';
import { MdNightlightRound, MdLightMode } from 'react-icons/md';

import { themeTogle } from 'redux/themeSlice';

import { Button } from 'components/Button';

export const TogleTheme = () => {
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => dispatch(themeTogle())}
      text={
        <>
          <MdNightlightRound />
          <MdLightMode />
        </>
      }
    />
  );
};
