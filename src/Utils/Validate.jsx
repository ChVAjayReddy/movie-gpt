export const validateData=(email,password)=>{
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let isEmail=regex.test(email);
    const isPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);
        if(!isPassword) return "Password is not valid";
    if(!isEmail) return "Email is not valid";

    return null;


}
