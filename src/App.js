import React, {useState} from 'react'


const App = () => {

  const [fullname, setfullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    /* const value = event.target.value;
    const name = event.target.name; */
    const {name, value} = event.target;

    setfullName((preValue) => {
      console.log(preValue);

      return {
        ...preValue,
        [name] : value,
      };
      /* if(name === 'fName'){
        return{
          fname: value,
          lname: preValue.lname,
          email: preValue.email,
          phone: preValue.phone,
        }
      }else if(name === 'lName'){
        return{
          fname: preValue.fname,
          lname: value,
          email: preValue.email,
          phone: preValue.phone,
        }
      }else if(name === 'email'){
        return{
          fname: preValue.fname,
          lname: preValue.lname,
          email: value,
          phone: preValue.phone,
        }
      }else if(name === 'phone'){
        return{
          fname: preValue.fname,
          lname: preValue.lname,
          email: preValue.email,
          phone: value,
        }
      } */
    });
    
  };

  const onSubmit = (event) => {
    event.preventDefault();
    alert('form submitted')
  };

 

  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmit}>
          <div>
            <h1>
              Hello {fullname.fname} {fullname.lname}
            </h1>
            <p>{fullname.email}</p>
            <p>{fullname.phone}</p>
            <input 
              type="text"
              placeholder="Enter Your First Name"
              name='fname'
              onChange={inputEvent}
              value={fullname.fname}
              />
              <input 
              type="text"
              placeholder="Enter Your Last Name"
              name='lname'
              onChange={inputEvent}
              value={fullname.lname}
              />
              <input 
              type="email"
              placeholder="Enter Your Email"
              name='email'
              onChange={inputEvent}
              value={fullname.email}
              />
              <input 
              type="number"
              placeholder="Enter Your Phone Number"
              name='phone'
              onChange={inputEvent}
              value={fullname.phone}
              />
              <br />
              <button type="submit" onClick={onSubmit}>Submit Me</button>
          </div>
        </form>
      </div>
      
    </>
  );
};

export default App