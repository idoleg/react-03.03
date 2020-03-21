import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateName } from '../../store/profileActions';

function ProfileContainer({ profile, dispatch }) {
  const [name, setName] = useState('');
  const updateProfileName = e => {
    e.preventDefault();

    dispatch(updateName({ name }));
  };

  return (
    <>
      <h3>Profile Page</h3>
      <form onSubmit={updateProfileName}>
        <input type="text" placeholder="Input new name" onInput={e => setName(e.target.value)} />
        <button type="submit">Update name</button>
      </form>
    </>
  );
}

const mapStateToProps = (store, props) => {
  const { profile } = store;

  return { profile };
};

export default connect(mapStateToProps)(ProfileContainer);
