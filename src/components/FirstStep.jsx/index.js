export const stepOne = [
  {
    id: "1",
    text: "Prenume",
    placeholder: "Prenume",
    speech: "Pamiętaj aby zgadzało się z imieniem z dowodu osobistego",
    message: "Te rugăm să introduci prenumele",
    type: "text",
    valueName: "firstName",
    validation: {
      minLength: {
        value: 3,
      },
    },
  },
  {
    id: "2",
    text: "Numele de familie",
    placeholder: "Numele de familie",
    speech: "Pamiętaj aby zgadzało się z nazwiskiem z dowodu osobistego",
    message: "Te rugăm să introduci numele de familie",
    type: "text",
    valueName: "lastName",
    validation: {
      minLength: {
        value: 3,
      },
    },
  },
  {
    id: "3",
    text: "Cod numeric personal",
    placeholder: "Cod numeric personal",
    speech: "Podaj swój numer PESEL, sprawdż czy wpisany jest poprawnie",
    message: "Te rog tramsmite o carte de identitate valida",
    type: "phone",
    valueName: "personalCode",
    validation: {
      minLength: {
        value: 11,
      },
      maxLength: {
        value: 11,
      },
    },
  },
  {
    id: "4",
    text: "Telefon",
    placeholder: "Telefon",
    speech:
      "Zwróć uwagę czy jest aktywny, na niego otrzymasz kody weryfikacyjne",
    message: "Te rugăm să introduci numărul de telefon",
    type: "tel",
    valueName: "phone",
    validation: {
      pattern: {
        value: /^\d{9}$/,
      },
    },
  },
  {
    id: "5",
    text: "Email",
    placeholder: "Email",
    speech: "Na niego otrzymasz wszystkie dokumenty udzielonej pożyczki",
    message: "Te rugăm să introduci emailul",
    type: "email",
    valueName: "email",
    validation: {
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i,
      },
    },
  },
];
