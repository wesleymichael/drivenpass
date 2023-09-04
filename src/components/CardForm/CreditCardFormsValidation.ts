const creditCardValidation = {
  number: {
    required: { value: true, message: 'digite o numero do cartão' },
    custom: {
      isValid: (value: string) => {
        const sanitizedValue = value?.replaceAll(' ', '');
        const length = sanitizedValue?.length;
        return length >= 13 && length <= 19;
      },
      message: 'Digite um numero válido para o cartão',
    }
  },
  name: {
    required: { value: true, message: 'digite o nome' }
  },
  expiry: {
    required: { value: true, message: 'digite a data de expiração' },
    pattern: { value: '^[0-9]{2}/[0-9]{2}$', message: 'digite a data em formato válido "xx/xx"' }
  },
  cvc: {
    required: { value: true, message: 'digite o cvv' },
    custom: {
      isValid: (value: string) => {
        const length = parseInt(value?.length.toString(), 10);
        return length === 3 || length === 4;
      },
      message: 'cvv deve possuir três ou quatro dígitos',
    }
  },
};

export default creditCardValidation;
