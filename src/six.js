import 'bootstrap/dist/css/bootstrap.min.css';
import './six.css'
import one from './source/sixone.png'
import two from './source/sixtwo.png'
import three from './source/sixthree.png'
import four from './source/sixfour.png'


export default function Six(){

    return(
        <>
       <div className='prime container-fluid mt-5 '>
       <h6 className=' text text-center mt-5'>Teamwork makes the dream work</h6>
            <h1 className=' text-center text-light mt-1 ml-5'>Discover the meaning of efficiency<br/>with Univers Business</h1>
        {/* <div className='row'> */}


        {/* first line */}
        
            <div className='col-lg-12 mt-3'>
                <div className='row'>
                <div className='col-lg-1'>&nbsp;</div>
                <div className=' fir col-lg-4'>
                    <h3 className='p-3'>Send and recive<br/>without borders</h3>
                    <p>Explore Payment</p>
                    <img src={one} className='col-lg-12'/>
                </div>
                <div className='col-lg-1'>&nbsp;</div>
                <div className='dk col-lg-5 '>
                    <h3 className='mt-3 text-light'>Invoices that work smarter</h3>
                    <p className='text-success'>learn more about invoices</p>
                    <img src={two} className='p-5 col-lg-12'/>
                </div>
                <div className='col-lg-1'>&nbsp;</div>
                </div>
            </div>


            {/* second line */}

            <div className='col-lg-12 mt-3'>
                <div className='row'>
                <div className='col-lg-1'>&nbsp;</div>
                    <div className='dk col-lg-6 p-5'>
                        <div className='col-lg-12'>
                            <h1 className='text-light'>Smart company debit cards help<br/>you and your team go futther</h1>
                            <p className='text-primary'> learn more about Cards</p>
                            <img src={three} className='col-lg-8 ml-5 p-5'/>
                        </div>
                    </div>

                <div className='col-lg-1'>&nbsp;</div>
                <div className=' dk col-lg-3 p-3'>
                    <h1 className=''>Exchange,<br/>send and spend <br/>at greate rates</h1>
                </div>
                <div className='col-lg-1'>&nbsp;</div>
                </div>
            </div>


            {/* third line */}


            <div className='col-lg-12 mt-3'>
                <div className='row'>
                <div className='col-lg-1'>&nbsp;</div>
                    <div className='dk col-lg-10 p-5x'>
                        <div className='row'>
                        <div className='col-lg-5'>
                            <h1 className='text-light'>
                                set and changeteam <br/>permissions with a tap
                            </h1>
                            <p>stay in total control of your team's spending by<br/>
                            managing their permission and leaves of access.<br/>
                            Create custome roles and choose the combination of <br/>
                            apps and features you want them to us</p>
                            <h6 className='text-success mt-5'>Discover Revolut Business →</h6>
                        </div>
                        <div className='col-lg-2'>&nbsp;</div>
                        <div className='col-lg-5'>
                                <img src={four} className='col-lg-12'/>
                            </div>
                        </div>
                    </div>
                <div className='col-lg-1'>&nbsp;</div>
                </div>
            </div>


            {/* fourth line */}


            <div className='container text-center mt-5'>
                    <h1 className='text-light'>Control all your spend<br/>with smart rules</h1>
                <div className='row'>
                    <div className='col-lg-2'>&nbsp;</div>
                    <div className='dk col-lg-8 p-3 mt-3'> cosmetic    march 25,2022    $100</div>
                    <div className='col-lg-2'>&nbsp;</div>

                    <div className='col-lg-2'>&nbsp;</div>
                    <div className='dk col-lg-8 p-3 mt-3'> cosmetic    march 25,2022    $100</div>
                    <div className='col-lg-2'>&nbsp;</div>

                    <div className='col-lg-2'>&nbsp;</div>
                    <div className='dk col-lg-8 p-3 mt-3'> cosmetic    march 25,2022    $100</div>
                    <div className='col-lg-2'>&nbsp;</div>


                    <div className='col-lg-2'>&nbsp;</div>
                    <div className='dk col-lg-8 p-3 mt-3'> cosmetic    march 25,2022    $100</div>
                    <div className='col-lg-2'>&nbsp;</div>

                    <div className='col-lg-2'>&nbsp;</div>
                    <div className='dk col-lg-8 p-3 mt-3 mb-5'> cosmetic    march 25,2022    $100</div>
                    <div className='col-lg-2'>&nbsp;</div>
                </div>
            </div>

           
        {/* </div> */}
       </div>
        </>
    )
}