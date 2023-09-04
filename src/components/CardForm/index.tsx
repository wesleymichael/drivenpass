import { useState } from 'react';
import { toast } from 'react-toastify';
import Cards from 'react-credit-cards-2';
import styles from './styles.module.scss';
import { useForm } from '../../hooks/useForm';
import useCreateCard from '@/hooks/api/useCreateCard';
import { useCardsContext } from '@/hooks/useCardContext';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import creditCardValidation from './CreditCardFormsValidation';
import { AxiosError } from 'axios';
import router from 'next/router';

export default function CardForm( ) {
  const { createCard } = useCreateCard();
  const { cardsData, setCardsData } = useCardsContext();

  const {
    handleSubmit,
    handleChange,
    data,
    errors,
    customHandleChange,
  } = useForm({
    validations: creditCardValidation,

    onSubmit: async() => { 
      const body = {
        title: data.title,
        number: data.number,
        name: data.name,
        cvv: data.cvc,
        exp: data.expiry,
        password: data.password,
        isVirtual: data.isVirtual,
        isCredit: data.isCredit,
        isDebit: data.isDebit
      }
      try {
        const res = await createCard(body);
        
        if(res instanceof AxiosError) {
          toast(res.response?.data.message);
        } else {
          toast('Success!');
          setCardsData([...cardsData, { ...res, password: body.password, cvv: body.cvv }]);
          router.push('/cards');
        }
      } catch ( error ) {
        toast('Deu erro!');
      };
    },

    initialValues: {
      title: '',
      number: '',
      expiry: '',
      cvc: '',
      name: '',
      focus: '',
      password: '',
      isVirtual: false,
      isCredit: false,
      isDebit: false,
    },
  });
  
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
              value={data.title}
              onChange={handleChange('title')}
            />
          </div>

          <div className={styles.formContent}>
            <label>Número do cartão:</label>
            <input
              name="number"
              type="text"
              value={data.number}
              onFocus={(e) => customHandleChange('focus')(e.target.name)}
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
              onFocus={(e) => customHandleChange('focus')(e.target.name)}
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
              onFocus={(e) => customHandleChange('focus')(e.target.name)}
              onChange={handleChange('expiry')}
            />
            {errors.expiry ? <small>{errors.expiry}</small > : <small></small>}
          </div>

          <div className={styles.formContent}>
            <label>CVV:</label>
            <input
              name="cvc"
              type="text"
              value={data.cvc}
              onFocus={(e) => customHandleChange('focus')(e.target.name)}
              onChange={handleChange('cvc')}
            />
            {errors.cvc && <small>{errors.cvc}</small>}
          </div>

          <div className={styles.formContent}>
            <label>Senha:</label>
            <input
              name="password"
              type="text"
              value={data.password}
              onChange={handleChange('password')}
            />
          </div>

          <div className={`${styles.formContent} ${styles.inputCheck}`}>
            <label>Cartão Virtual:</label>
            <input
              name="isVirtual"
              type="checkbox"
              checked={data.isVirtual}
              onChange={handleChange('isVirtual')}
            />
          </div>

          <div className={`${styles.formContent} ${styles.inputCheck}`}>
            <label>Cartão de Crédito:</label>
            <input
              name="isCredit"
              type="checkbox"
              checked={data.isCredit}
              onChange={handleChange('isCredit')}
            />
          </div>

          <div className={`${styles.formContent} ${styles.inputCheck}`}>
            <label>Cartão de Débito:</label>
            <input
              name="isDebit"
              type="checkbox"
              checked={data.isDebit}
              onChange={handleChange('isDebit')}
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
