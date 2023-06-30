import  { useState,useEffect } from 'react';
import { userContext } from './userContext';



export default function ProviderComponent({children}){


    const [loggedUser,setLoggedUser] = useState(null);


    const logUser = (user) => {

        setLoggedUser(user);
    }

    const logOutUser = () => {

        setLoggedUser(null);
    }

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          setLoggedUser(JSON.parse(storedUser));
        }
      }, []);
    
      useEffect(() => {
        localStorage.setItem('user', JSON.stringify(loggedUser));

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
