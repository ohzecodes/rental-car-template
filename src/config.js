export const config = {
  footer: {
    address: process.env.REACT_APP_ADDRESS,
    phoneNumber: process.env.REACT_APP_PHONE_NUMBER
  },
  idField: {
    delimiter: process.env.REACT_APP_DELIMITER,
    delimiterNumber: [

(Number(process.env.REACT_APP_DELIMITER_NUMBER0)),
(Number(process.env.REACT_APP_DELIMITER_NUMBER1))
    ],
    label: process.env.REACT_APP_IDLABEL,
    digits: Number(process.env.REACT_APP_DIGITS)
  }
};
