export async function createUser(userData) {
  console.log(userData)
  try {
    const response = await fetch('http://localhost:8080/auth/signup', {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "content-type": 'application/json' }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // console.log("createUser into auth api ", response);
    const data = await response.json();
    return { data };
  } catch (error) {
    console.error('Error:', error);
    throw error; // Return a rejected Promise with the error
  }
}


export async function logOut() {


  return { data: 'success' }

}
// export async function verifyUser(userData) {
//   const { email } = userData;
//   const { password } = userData;
//   // console.log(email)
//   // console.log(userData)
//   console.log("this function is calling from the auth api page and funciton is the verify user")
//   try {
//     const response = await fetch('http://localhost:8080/auth/login/', {
//       method: "POST",
//       body: JSON.stringify(userData),
//       headers: { "content-type": 'application/json' }
//     });
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }

//     const data = await response.json();
//     if (data.length) {
//       if (data[0].password === password) {
//         console.log(data[0])
//         const newData = data[0];
//         return { newData }
//       }
//       else {
//         throw new Error('User not found');

//       }
//     }
//     else {
//       throw new Error('User not found');
//     }

//   } catch (error) {
//     console.error('Error:', error);
//     throw error; // Return a rejected Promise with the error
//   }
// }


export async function verifyUser(userData) {
  const { email } = userData;
  const { password } = userData;
  // console.log(email)
  // console.log(userData)
  // console.log("this function is calling from the auth api page and funciton is the verify user")
  try {
    const response = await fetch('http://localhost:8080/auth/login', {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "content-type": 'application/json' }
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log(" i am the data into auth api file ", data)
    return data

  } catch (error) {
    console.error('Error:', error);
    throw error; // Return a rejected Promise with the error
  }
}
