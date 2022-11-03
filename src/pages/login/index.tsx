
const handleChange = (event : any) => {}

const handleSubmit = (event : any) => {}

const Cadastro = () => {
return (
    <div className='container'>
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

export default Cadastro;