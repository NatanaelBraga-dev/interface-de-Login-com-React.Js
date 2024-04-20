import { useState } from 'react'
import logonerdsquare from './assets/logo_nerd_square.png'
import './styles.css'

function App() {

    const[email, setEmail] = useState("")
    const [password, setPassword] = useState("")

 return( 
 <div className="container">
    <div className="container-login">
        <div className="wrap-login">
            <form className="login-form">

                <span className="login-form-title">Bem Vindo!</span>

                <span className="login-form-title">
                    <img src={logonerdsquare} alt="Nerd Square" />
                </span>

                <div className="wrap-input">
                    
                    <input 
                    className={email !== "" ? 'has-val input' : 'input'} 
                    value={email} 
                    type="Email"
                    onChange={e => setEmail(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Email"></span>
                </div>

                <div className="wrap-input">
                    <input 
                    value={password}
                    onChange={e => setPassword (e.target.value)}
                    className={password !== "" ? 'has-val input' : 'input'}
                    type="password"/>
                    <span className="focus-input" data-placeholder="Password"></span>
                </div>

                <div className="container-login-form-btn">
                    <button className='login-form-btn'>Login</button>
                </div>

                <div className="text-center">
                    <span className='txt1'>não possui conta ?</span>

                    <a className='txt2' href="#">Criar conta.</a>
                </div>
    

            </form>
        </div>
    </div>
 </div>
                            
 )
}

export default App
