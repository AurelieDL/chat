import React from 'react';
import Add from '../img/addAvatar.png';

const Login = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Ceci est un Chat!</span>
                <span className='title'>S'enregistrer</span>
            <form>
                <input type='text' placeholder='pseudo'></input>
                <input type='email' placeholder='email'></input>
                <input type='password' placeholder='mot de passe'></input>
                
                <button>Se connecter</button>
            </form>
            <p>Vous n'avez pas de compte? S'enregistrer</p>
            </div>
        </div>
    );
};

export default Login;