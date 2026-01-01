import React, { use} from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../firebaseContext/AuthContext';
import { GoogleAuthProvider } from 'firebase/auth';
import { FaFacebook, FaGoogle } from 'react-icons/fa6';

const Login = () => {
// const [isLoggedIn, setIsLoggedIn] = useState(false)
const navigate = useNavigate();
    // login with Email
    const { logInWithEmailAndPassword, createGoogleUser } = use(AuthContext)
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const logData = new FormData(form);
        const logEntries = Object.fromEntries(logData);
        const { email, password } = logEntries;
        // console.log(logEntries, email, password)

        // log in user
        logInWithEmailAndPassword(email, password).then((res) => {
            const user = res.user;
            console.log(user)
            // setIsLoggedIn(true)
            navigate('/')
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode, errorMessage)
            })
    }

    // log in with google
    const handleGoogleSignup = () => {
        createGoogleUser().then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(token, user)
             navigate('/')
            // setIsLoggedIn(true)
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                console.log(errorCode, errorMessage, email, credential)
            });
            
    }

    

    // logOut


    return (
        <div className='bg-[url(../../src/assets/imgs/login-bg.png)] bg-cover bg-center h-auto py-20'>
            <div className='max-w-96 p-5 mx-auto  bg-amber-600/10 backdrop-blur-sm rounded-lg'>
                <h1 className='text-4xl text-amber-600/30 font-semibold  text-center py-10'>
                    Welcome back friend
                </h1>

                <form onSubmit={handleLogin} className='flex flex-col gap-5 w-80 mx-auto'>
                    <input type='email' className='p-2 bg-amber-50 w-full text-amber-950 rounded-lg' name='email' placeholder='Please Enter Your Email' />
                    <input type='password' className='p-2 bg-amber-50 w-full text-amber-950 rounded-lg' name='password' placeholder='Please Enter Your Password' />
                    <p>Forget password ?</p>
                    <button type='submit' className='bg-[#6F4E37] p-2 rounded-lg text-lg font-bold'>Log in</button>
                </form>
                <div className='flex justify-center gap-4 mt-5'>
                    <button onClick={handleGoogleSignup} type='submit' className='bg-[#6F4E37] p-2 rounded-lg text-lg font-bold '><FaGoogle /></button>
                    <button type='submit' className='bg-[#6F4E37] p-2 rounded-lg text-lg font-bold '><FaFacebook /></button>
                </div>
                <Link to="/signup" className='text-amber-600/50 hover:text-amber-600/75 text-center block mt-4'>
                    <p>Don't have an account? Register</p>
                </Link>

            </div>
        </div>
    );
};

export default Login;