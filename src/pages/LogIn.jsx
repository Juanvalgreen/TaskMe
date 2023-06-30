import {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../context/userContext';



import {signInWithEmailAndPassword} from 'firebase/auth';


import {auth} from '../base'




export default function LogIn(){

    const {loggedUser, logUser} = useContext(userContext);
    const [user, setUser] = useState(null)
    
    const navigate = useNavigate();

    const [logInData, setLogInData] = useState({
        email: '',
        password: ''
    });


    const handleChange = (e) => {
        
      
        setLogInData((prevFormData) => ({
          ...prevFormData,
          [e.target.name]: e.target.value
        }));

        setUser(null);
    };

    const signIn = (e) => {

        e.preventDefault()

        signInWithEmailAndPassword(auth, logInData.email, logInData.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setUser(user);

            console.log(userCredential);
            console.log(user);
            logUser(user);
            navigate('/Pending')
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage);
            setUser(false);

        });
        
    }

    


    return(
        <>
            <div className="flex w-25 flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                        Log in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" onSubmit={signIn}>
                    <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                        Email address
                    </label>
                    <div className="mt-2">
                        <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        onChange={handleChange}
                        required
                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>

                    <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                        Password
                        </label>
                        <span className='font-semibold text-xs ml-4 duration-300 leading-6 text-lime-700 hover:text-lime-600 cursor-pointer'>Forgot your password?</span>
                    </div>
                    <div className="mt-2">
                        <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>

                    <div>
                    {user === false ? <p className="text-center text-sm text-red-400 m-2" >Email or password are not correct</p> : null}
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-lime-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm duration-300 hover:bg-lime-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Sign in
                    </button>
                    </div>
                </form>
                <p className="mt-10 text-center text-sm text-gray-400">
                    Don't have an account?
                    <span onClick={() => navigate('/Register')} className="font-semibold  ml-4 duration-300 leading-6 text-lime-700 hover:text-lime-600 cursor-pointer">
                    Register
                    </span>
                </p>
            </div>
        </div>
        </>




    );
}