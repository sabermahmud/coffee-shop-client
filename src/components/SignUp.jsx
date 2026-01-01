import React, {  useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../firebaseContext/AuthContext';
import { FaFacebook, FaGoogle } from 'react-icons/fa6';
import { GoogleAuthProvider } from 'firebase/auth';






const SignUp = () => {

    const navigate = useNavigate();
    const { createEmailUser, createGoogleUser } = useContext(AuthContext)
    // console.log(createGoogleUser)




    // const [newUser, setNewUser] = useState({})

    const handleSignup = (e) => {
        e.preventDefault();
        // signup logic here
        const form = e.target;
        const formData = new FormData(form);
        const formEntries = Object.fromEntries(formData);
        const { email, password, confirmPassword } = formEntries;
        
        if (password !== confirmPassword) {
            alert("Password did not match")
        }
        else {
            // create user with email
            createEmailUser(email, password)
                .then((res) => {
                    const user = res.user;
                    console.log(user)


                    navigate('/')
                    // sendEmailVerification(user)
                    //     .then(() => {
                    //         alert("Verification email sent. Please check your email.");
                    //     });

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorCode, errorMessage)
                })

        }
    }
    const handleGoogleSignup = () => {
        createGoogleUser().then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(token, user)
            // IdP data available using getAdditionalUserInfo(result)
            // ...
            navigate('/')
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
    return (
        <div className='bg-[url(../../src/assets/imgs/login-bg.png)] bg-cover bg-center h-auto py-20'>
            <div className='max-w-96 p-5 mx-auto  bg-amber-600/10 backdrop-blur-sm rounded-lg'>
                <h1 className='text-4xl text-amber-300/20 font-semibold  text-center py-10'>
                    Welcome as our new friend!
                </h1>

                <form onSubmit={handleSignup} className='flex flex-col gap-5 w-80 mx-auto'>
                    <input type='text' className='p-2 bg-amber-50 w-full text-amber-950 rounded-lg' name='name' placeholder='Please enter your full name' />
                    <input type='number' className='p-2 bg-amber-50 w-full text-amber-950 rounded-lg' name='age' placeholder='How old are you' />
                    <input type='email' className='p-2 bg-amber-50 w-full text-amber-950 rounded-lg' name='email' placeholder='Please enter your email' />
                    <input type='number' className='p-2 bg-amber-50 w-full text-amber-950 rounded-lg' name='phone' placeholder='Please enter your phone number' />
                    <input type='password' className='p-2 bg-amber-50 w-full text-amber-950 rounded-lg' name='password' placeholder='Please enter your password' />
                    <input type='password' className='p-2 bg-amber-50 w-full text-amber-950 rounded-lg' name='confirmPassword' placeholder='Please re-enter your password' />

                    <button type='submit' className='bg-[#6F4E37] p-2 rounded-lg text-lg font-bold'>Sign Up</button>

                </form>
                <div className='flex justify-center gap-4 mt-5'>
                    <button onClick={handleGoogleSignup} type='submit' className='bg-[#6F4E37] p-2 rounded-lg text-lg font-bold '><FaGoogle /></button>
                    <button type='submit' className='bg-[#6F4E37] p-2 rounded-lg text-lg font-bold '><FaFacebook /></button>
                </div>

                <Link to="/login" className='text-amber-600/50 hover:text-amber-600/75 text-center block mt-4'>
                    <p>Already have an account? Login</p>
                </Link>
            </div>
        </div>
    );
};

export default SignUp;