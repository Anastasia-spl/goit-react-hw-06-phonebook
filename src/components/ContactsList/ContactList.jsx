import { createUseStyles } from 'react-jss';
import { connect } from 'react-redux';
import contactActions from '../../redux/contacts/contacts-actions';

const useStyles = createUseStyles({
  contactItem: {
    marginBottom: 15,
  },
  deleteBtn: {
    marginLeft: 25,
  },
});

const ContactList = ({ contacts, filter, onDeleteContact }) => {
  const { contactItem, deleteBtn } = useStyles();
  const visibleContacts =
    filter !== ''
      ? contacts.filter(({ name }) =>
          name.toLowerCase().includes(filter.toLowerCase()),
        )
      : contacts;
  return (
    <ul>
      {visibleContacts.map(({ name, number, id }) => (
        <li key={id} className={contactItem}>
          <span>
            {name}: {number}
          </span>
          <button
            type="button"
            className={deleteBtn}
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  contacts: state.contactsBook.items,
  filter: state.contactsBook.filter,
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
