import React, { useState } from 'react';


function LoginForm({ login, error }) {


   const [details, setDetails] = useState ({ime: "", korime: "", lozinka: ""});
   const submitHandler = e => {
    e.preventDefault();

    login(details);
   }
   return (

    <form onSubmit = {submitHandler}>
        <div className='form-inner'>
            <h2>Prijava</h2>
            {(error !== "") ? (<div className='error'>{error}</div>) : ""}
            <div className='form-group'>
            <label htmlFor='name'>Ime:</label>
            <input type="text" name="ime" id="ime" 
            onChange={e => setDetails({...details, ime: e.target.value})} value={details.ime}/>
            </div>
            <div className="form-group">
                <label htmlFor='korime'>Korisničko ime:</label>
                <input type="text" name="korime" id="korime" 
               onChange={e => setDetails({...details, korime: e.target.value})} value={details.korime}/>
                
            </div>
            <div className='form-group'>
                <label htmlFor='lozinka'>Lozinka:</label>
                <input type="password" name="lozinka" id="lozinka" 
                onChange={e => setDetails({...details, lozinka: e.target.value})} value={details.lozinka}/>
                
            </div>
            <div className='form-group'>
             <input type="submit" value="Prijava"/>

            </div>
        </div>
    </form>
  )
}

export default LoginForm;