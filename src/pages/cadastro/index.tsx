
const handleChange = (event : any) => {}

const handleSubmit = (event : any) => {}

const Cadastro = () => {
return (
    <div className='container'>
         <div className='form-container'>
            <h2>Cadastre-se</h2>
            <form onSubmit={handleSubmit} noValidate >
               <div className='name'>
                  <label>Nome Completo</label>
                  <input type='text' name='name' onChange= {handleChange}/>
               </div>
               <div className='email'>
                  <label>Email</label>
                  <input type='email' name='email' onChange={handleChange}/>
               </div>
               <div className='password'>
                  <label>Senha</label>
                  <input type='password' name='password' onChange={handleChange}/>
               </div>              
               <div className='submit'>
                  <button>Cadastrar</button>
               </div>
          </form>
      </div>
   </div>
)
}

export default Cadastro;