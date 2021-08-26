import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDelete }) => (
    <ul>
          {contacts.map(({name,id,number}) =>
              <li key={id}>{name} {number}
                  <button type="button" onClick={() => onDelete(id)}>Delete</button>
              </li>
            )}
    </ul>
)

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default ContactList;