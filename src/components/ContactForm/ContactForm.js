import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { submitContacts } from '../../redux/phonebook-actions';
import shortid from 'shortid';
import { getContacts } from '../../redux/phonebook-selectors';
import s from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onSubmit = contact => dispatch(submitContacts(contact));

  const onSubmitForm = e => {
    e.preventDefault();
    resetForm();
    checkContactList();
  };

  const onFormChange = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const addContact = () => {
    const newContactId = shortid.generate();
    const newContact = { name, number, id: newContactId };
    onSubmit(newContact);
  };

  const checkContactList = () => {
    const normalizedName = name.toLocaleLowerCase();
    contacts.find(
      contact => contact.name.toLocaleLowerCase() === normalizedName,
    )
      ? alert(`${name} is already in contacts`)
      : addContact();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={onSubmitForm}>
      <label className={s.label} htmlFor={shortid.generate()}>
        <span className={s.span}>Name</span>
        <input
          className={s.input}
          type="text"
          name="name"
          placeholder="Григор Григорян"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={onFormChange}
          id={shortid.generate()}
        />
      </label>
      <label className={s.label} htmlFor={shortid.generate()}>
        <span className={s.span}>Number</span>
        <input
          className={s.input}
          type="tel"
          name="number"
          placeholder="111-22-33"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={onFormChange}
          id={shortid.generate()}
        />
      </label>
      <button className={s.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}
