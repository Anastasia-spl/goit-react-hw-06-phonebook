import { connect } from 'react-redux';
import contactActions from '../../redux/contacts/contacts-actions';

const Filter = ({ value, onFilterChange }) => {
  return (
    <div className="filter-wrapper">
      <h3>Find contacts by name:</h3>
      <input type="text" value={value} onChange={onFilterChange} />
    </div>
  );
};

const mapStateToProps = state => ({
  value: state.contactsBook.filter,
});

const mapDispatchToProps = dispatch => ({
  onFilterChange: event =>
    dispatch(contactActions.filterContact(event.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
