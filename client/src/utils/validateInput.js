function validateInput() {
    const regexName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const regexUsername = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
    const regexNumber = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    const minLengthPassword = 8;

    return {
        required: (value) => value.length > 0,
        name: (nameValue) => regexName.test(nameValue),
        username: (username) => regexUsername.test(username),
        phoneNumber: (numberString) => regexNumber.test(numberString),
        minLength: (value) => value.length >= minLengthPassword,
    };
}

export { validateInput };
