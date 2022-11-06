import Link from 'react-router-dom';
import Logo from '../../assets/logo'

const Home = () => {
return (
   <div>
<div className='header'>
      <img src='../../assets/logo.png'></img>
      <h2 style={{color: 'white'}}>Kavak</h2>
      <div className='menu'>
         <label>Comprar carro</label>
         <label>Vender carro</label>
         <label>App Kavak</label>
         <label>Sobre nós</label>
      </div>
   </div>
   <div>
         <div className='produto'>
            <label>produto</label>
         </div>
      </div>
   </div>
    
)
}

export default Home;