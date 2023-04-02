import 'bootstrap/dist/css/bootstrap.min.css';
import mainbg from './mainbg.jpg'
import btm from './source/first.png'
import './first.css'


export default function First(){

    return(
        <>
        
        <div className='container bgfirst '>
        <nav className="navbar navbar-expand-lg navbar-light ">
        {/* <div className='col-lg-1'>&nbsp;</div> */}
        <input type='radio'></input>&nbsp;
  <a className="navbar-brand text-light " href="#">Univers</a>
  <button className="navbar-brand  btn btn-success " href="#">Personal</button>
  <a className="navbar-brand text-light" href="#">Business</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
<div className='col-lg-5'>&nbsp;</div>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link text-light dropdown" href="#">Features <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="#">Pricing</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light disabled" href="#">Help</a>
      </li>
      <li className='nav-item'>
      <a className="navbar-brand text-light" href="#">En</a>
      </li>
    </ul>
    
  </div>
</nav>
            <div className='row'>
                <div className='col-lg-6'>
                    <h1 className='mt-5 p-5 text-light'>Digitize your<br/>univers bank</h1>
                </div>
                <div className='col-lg-6'>
                    <h5 className='mt-5 p-5 text-light'>Money should be easy,it is time to say<br/>goodbye to banks & financial services<br/>companies that don't work for you</h5>
               </div>
               <div className='col-lg-2'> &nbsp;

               </div>
               <div className='col-lg-8'> 
               <img src={btm} className='col-lg-12 p-5'/>

               </div>
               <div className='col-lg-2'> &nbsp;

               </div>
                
               
            </div>


        </div>
        </>
    )
}