import { useEffect, useState } from 'react'

import './App.css'

function App() {

  const [formData,setFormData]=useState([
    {
      id:"1",
    fname:'',
    lname:'',
    age:'',
    gender:'',
    mobile:'',
    email:'',
    password:'',
  }]
)
  
  const [theme,setTheme]=useState(false)

  const handleThemeChange=()=> setTheme(!theme)

  useEffect(()=>{
    if(theme==true){
      document.body.classList.add("dark")
    }else{
      document.body.classList.remove("dark")
    }
  })
  

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData)
  }
  
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData((prev)=>{
      return{...prev,[name]:value}
    })
  }

  return (
    <>
    <section>
      <h1>Data Collection from User</h1>
      <button onClick={handleThemeChange}>{theme?"Dark":"Light"}</button>
      <hr />
    </section>
    <section>
      <form onSubmit={handleSubmit}>
        <div className="inputField">
          <label htmlFor="fname">First Name</label>
          <input type="text" name="fname"value={formData.fname} onChange={handleChange}/>
          
        </div>
        <div className="inputField">
          <label htmlFor="lname">Last Name</label>
          <input type="text" name="lname" value={formData.lname} onChange={handleChange}/>
        </div>
        <div className="inputField">
          <label htmlFor="age">Age</label>
          <input type="text" name="age" value={formData.age}onChange={handleChange}/>
        </div>
        <div className="inputField">
          <label htmlFor="gender">Gender</label>
          <input type="text" name="gender" value={formData.gender} onChange={handleChange}/>
        </div>
        <div className="inputField">
          <label htmlFor="mobile">First Name</label>
          <input type="text" name="mobile" value={formData.mobile} onChange={handleChange}/>
        </div>
        <div className="inputField">
          <label htmlFor="email">First Name</label>
          <input type="email" name="email" value= {formData.email} onChange={handleChange}/>
        </div>
        <div className="inputField">
          <label htmlFor="password">First Name</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange}/>
        </div>
        <div className="inputField">
          <button type='submit'>Update Data</button>
        </div>
      </form>
    </section>
    <section>
{
  formData.map((data)=>(
    <div key={data.id}>
      <p>{data}</p>
    </div>
  ))
}
    
      </section>
    
    </>
  )
}

export default App
