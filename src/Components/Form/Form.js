import PropTypes from 'prop-types';
import './Form.css';
import {  useState } from "react";
import shortid from "shortid";

function Form({onSubmit}) {

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    
    const nameInputId = shortid.generate();
    const numInputId = shortid.generate();

    const handleInputChange = (e) => {
        const { value, name } = e.currentTarget;
        switch (name) {
            case 'name':
                setName(value)
                break
            case 'number':
                setNumber(value)
                break
            default: return
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(name,number);
        reset();
    }
    const reset = () => {
        setNumber('');
        setName('');
    }
    
    
        return (
            <form onSubmit={handleSubmit}>
          <label htmlFor={nameInputId}>Name</label>
          <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          value= {name}
          id= {nameInputId}
          required
          onChange={handleInputChange}
          />
          <br/>
          <br/>
          <label htmlFor={numInputId}>Number</label>
          <input
            type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          value= {number}
          id ={numInputId}
          required
          onChange={handleInputChange}
          />
          <br/>
          <br/>
          <button type="submit" >Add contact</button>
        </form>
        );
    

}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default Form;