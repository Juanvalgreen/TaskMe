import BaseUrl from '../enviroment/env';



//post new user

export async function createUser(userData) {
    return await fetch(`${BaseUrl}/user/${userData.uid}.json`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(response => response.json())
      .then(data => {
        return data;
      });
  }