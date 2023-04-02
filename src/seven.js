import 'bootstrap/dist/css/bootstrap.min.css';
import './seven.css'



export default function Seven(){

    return(
        <>
        <div className='container-fluid bg-light p-4'></div>
        <div className='row'>
            <div className='col-lg-2'>&nbsp;</div>

            <div className='col-lg-8'>
                <p className='text-center'>What are you waiting for?</p>
                <h1 className='text-center'>Make your business<br/>spending smarter</h1>
                <button className='btnn btn-success text-dark'>Try Revolut business now</button>&nbsp;
                <button className='btnn '>contact sales</button>
            </div>

            <div className='col-lg-2'>&nbsp;</div>
        </div>
        </>
    )
}