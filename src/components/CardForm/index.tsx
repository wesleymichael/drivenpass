import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { toast } from 'react-toastify';
import { useForm } from '../../hooks/useForm';
import creditCardValidation from './CreditCardFormsValidation';
import { useState } from 'react';
import styles from './styles.module.scss';

export default function CardForm( ) {
  const [cardInfo, setCardInfo] = useState({
    title: "",
    isVirtual: false,
    isCredit: false,
    isDebit: false,
  });
  
  function handleNewChange(event) {
    const { name, value, type, checked } = event.target;
  
    if (type === "checkbox") {
      setCardInfo((prevInfo) => ({
        ...prevInfo,
        [name]: checked,
      }));
    } else {
      setCardInfo((prevInfo) => ({
        ...prevInfo,
        [name]: value,
      }));
    }
  }

  const {
    handleSubmit,
    handleChange,
    data,
    errors,
    customHandleChange,
  } = useForm({
    validations: creditCardValidation,

    //TODO
    onSubmit: async() => { 
      try {
        //Enviar para o db
        toast('Sucesso!');
      } catch ( error ) {
        toast('Deu erro!');
      };
    },

    initialValues: {
      number: '',
      expiry: '',
      cvc: '',
      name: '',
      focus: '',
    },
  });

  console.log(data);
  
  return (
    <>
      <div className={styles.cardForms}>
        <Cards
          number={data.number}
          expiry={data.expiry}
          cvc={data.cvc}
          name={data.name}
          focused={data.focus}
        />
        <form className={styles.formContainer}>
          <div className={styles.formContent}>
            <label>Informe o título/apelido para o cartão:</label>
            <input
              name="title"
              type="text"
              value={cardInfo.title}
              onChange={handleNewChange}
            />
          </div>

          <div className={styles.formContent}>
            <label>Número do cartão:</label>
            <input
              name="number"
              type="text"
              value={data.number}
              onClick={(e) => customHandleChange('focus')(e.target.name)}
              onChange={handleChange('number')}
            />
            {errors.number ? <small>{errors.number}</small> : <small></small>}
          </div>

          <div className={styles.formContent}>
            <label>Nome:</label>
            <input
              name="name"
              type="text"
              value={data.name}
              onClick={(e) => customHandleChange('focus')(e.target.name)}
              onChange={handleChange('name')}
            />
            {errors.name && <small>{errors.name}</small>}
          </div>

          <div className={styles.formContent}>
            <label>Validade:</label>
            <input
              name="expiry"
              type="text"
              value={data.expiry}
              onClick={(e) => customHandleChange('focus')(e.target.name)}
              onChange={handleChange('expiry')}
            />
            {errors.expiry ? <small className='paymentInputExpiry'>{errors.expiry}</small > : <small className='paymentInputExpiry'></small>}
          </div>

          <div className={styles.formContent}>
            <label>CVV:</label>
            <input
              name="cvc"
              type="text"
              value={data.cvc}
              onClick={(e) => customHandleChange('focus')(e.target.name)}
              onChange={handleChange('cvc')}
            />
            {errors.cvc && <small className='paymentInputCvc'>{errors.cvc}</small>}
          </div>

          <div className={`${styles.formContent} ${styles.inputCheck}`}>
            <label>Cartão Virtual:</label>
            <input
              name="isVirtual"
              type="checkbox"
              checked={cardInfo.isVirtual}
              onChange={handleNewChange}
            />
          </div>

          <div className={`${styles.formContent} ${styles.inputCheck}`}>
            <label>Cartão de Crédito:</label>
            <input
              name="isCredit"
              type="checkbox"
              checked={cardInfo.isCredit}
              onChange={handleNewChange}
            />
          </div>

          <div className={`${styles.formContent} ${styles.inputCheck}`}>
            <label>Cartão de Débito:</label>
            <input
              name="isDebit"
              type="checkbox"
              checked={cardInfo.isDebit}
              onChange={handleNewChange}
            />
          </div>

        </form>
        <button onClick={ handleSubmit } className={styles.button}>
          Enviar dados
        </button>
      </div>
    </>
  );
};
