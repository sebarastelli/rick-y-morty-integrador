
// eslint-disable-next-line import/no-anonymous-default-export
export default (data) => {
    let errors = {};

    if (!/\S+@\S+\.\S+/.test(data.email)){
        errors.email = 'Email is not a valid email address';
    }
    if (!data.email) {
        errors.email = 'Insert email'
    }
    if (data.email.length > 35) {
        errors.email = 'El email debe contener menos de 35 caracteres'
    }
    if (!/\d/.test(data.password)) {
        errors.pass = "Al menos debe tener un numero!"
    }
    if (data.password.length <6 || data.password.length>15) {
        errors.pass = "Debe ser entre 6 y 15 caracteres"
    }
    return errors
    }
 
        