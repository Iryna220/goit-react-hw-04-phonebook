import css from './ContactItem.module.css';
const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={css.listItem}>
      <p className={css.contactItem}>
        {name} {number}
      </p>
      <button
        className={css.btnDeleteContact}
        type="submit"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
