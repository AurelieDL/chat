import React from 'react';

const Register = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'></div>
                <span className='logo'>Super Chat!</span>
                <span className='title'>S'enregistrer</span>
            <form>
                <input type='text' placeholder='pseudo'></input>
                <input type='email' placeholder='email'></input>
                <input type='password' placeholder='mot de passe'></input>
                <input type='file'></input>
                <button>S'enregistrer</button>
            </form>
            <p>Vous avez déjà un compte? Se connecter</p>
        </div>
    )
}

export default Register