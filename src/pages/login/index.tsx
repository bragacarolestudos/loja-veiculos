// import Logo from '../../assets/logo.svg'
const handleChange = (event : any) => {}

const handleSubmit = (event : any) => {}

const Login = () => {
return (
    <div className='container'>
      {/* <img src='../../assets/logo.svg' alt=""></img> */}
         <div className='form-container'>
            <h2>Entre com a sua conta</h2>
            <form onSubmit={handleSubmit} noValidate >
               <div className='email'>
                  <label>Email</label>
                  <input type='email' name='email' onChange={handleChange}/>
               </div>
               <div className='password'>
                  <label>Senha</label>
                  <input type='password' name='password' onChange={handleChange}/>
               </div>              
               <div className='submit'>
                  <button>Entrar</button>
               </div>
          </form>
      </div>
   </div>
)
}

export default Login;

