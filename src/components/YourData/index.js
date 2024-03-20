export const data = [
  {
    id: "1",
    text: "Telefon",
    placeholder: "Numer telefonu",
    message: "Nie podałeś/aś swojego numeru telefonu!",
    type: "tel",
    validation: {
      pattern: {
        value: /^\d{9}$/,
      },
    },
  },
  {
    id: "2",
    text: "E-mail",
    placeholder: "Adres e-mail",
    message: "Nie podałeś/aś swojego adresu e-mail!",
    type: "email",
    validation: {
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i,
      },
    },
  },
];
