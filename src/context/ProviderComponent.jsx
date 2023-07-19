import  { useState,useEffect } from 'react';
import { userContext } from './userContext';



export default function ProviderComponent({children}){

    const storedUser = JSON.stringify(localStorage.getItem('user'));

    const [loggedUser,setLoggedUser] = useState(storedUser != null ? storedUser : null);

    // console.log(storedUser);
    // if (storedUser) {
    //     setLoggedUser(JSON.parse(storedUser));
    // }



    const logUser = (user) => {

        setLoggedUser(user);
        localStorage.setItem('user', user);
    }

    const logOutUser = () => {

        setLoggedUser(null);
        localStorage.deleteItem('user');
    }


    
    useEffect(() => {

        localStorage.setItem('user', loggedUser);

    }, [loggedUser]);

    return(
        <userContext.Provider
        value={{
            loggedUser,
            logUser,
            logOutUser
        }}
        >
        
            {children}
        
        </userContext.Provider>





    );














}
