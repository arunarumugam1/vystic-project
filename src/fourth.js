import 'bootstrap/dist/css/bootstrap.min.css';
import './fourth.css'
import one from './source/fourone.png'
import two from './source/fourtwo.png'

export default function Fourth(){

    return(
        <>
       <div className='main container '>
        <div className='row'>
            <div className='col-lg-6'>
                <h1 className='head mt-4 ml-5 text-light'>Make an impression<br/>with metal</h1>
                <p className=' text mt-3 ml-5'>Get our iconic metel cards forged from <br/>
                dtainless steel, for you and your power players.<br/>
                Add your company name to the front for an<br/>
                extra proffession touch. Exclusuvely for paid plans.<br/>
                Subject to additionnal fees</p>

                <h5 className='mt-5 ml-5 mb-5 text-success'> Order a metel card → </h5>
            </div>
            <div className='col-lg-6'>
                <div className='row'>
                    <div className='col-lg-4'>&nbsp;

                    </div>
                    <div className='col-lg-8'>
                        <img src={one} className='col-lg-12'/>

                    </div>
                    <div className='col-lg-12'>
                        <img src={two} className='col-lg-12'/>

                    </div>

                </div>

            </div>
        </div>
       </div>
        </>
    )
}