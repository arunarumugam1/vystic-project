import 'bootstrap/dist/css/bootstrap.min.css';
import './five.css'


export default function Five(){

    return(
        <>
       <div className='main container mt-5'>
        <div className='row p-5'>
            <div className='col-lg-6'>
              <h6 className='first text-secondary mt-5 ml-5'>Transfers</h6>
              <h1 className='head ml-5 text-light'>International<br/>payments for<br/>your business</h1>
              <p className='mt-3 ml-5'>Join thousand of business saving on fees<br/> with fast local and international<br/>transfers</p>
              <button className='btn btn-success text-dark ml-5'>Get started</button>&nbsp; &nbsp;
            <button className='btn btn-dark text-light'>Contact sales</button>
            </div>
            {/* <div className='col-lg-2'></div> */}
            <div className='col-lg-4 bgcolor '>
                    
            </div>
        </div>
       </div>
        </>
    )
}