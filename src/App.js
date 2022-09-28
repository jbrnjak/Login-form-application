import React, { useState } from 'react';
import LoginForm from './components/LoginForm';


function App() {
  const adminUser = {
    korime: "josip",
    lozinka: "1303"
  }

  const [user, setUser] = useState({ime: "",korime: ""});
  const [error, setError] = useState("");

const login = details => {
  console.log(details);

  if(details.korime === adminUser.korime && details.lozinka === adminUser.lozinka){
    console.log("Prijavljeni ste");
    setUser({
      ime: details.ime,
      korime: details.korime
    });
  }
  else{
    setError("Neuspješna prijava, korisničko ime/lozinka nisu točni!")
  }
}
const logout = () => {
 setUser({ime: "", korime: ""});

}

  return (
    <div className="App">
      {(user.korime !== "") ? (
        <div className='welcome'>
          <h2>Dobrodošli, <span>{user.ime}</span></h2>
          <button onClick={logout}>Odjava</button>
        </div>
      ) : (
      <LoginForm login={login} error={error}/>
      )}
    </div>
  );
}


export default App;
