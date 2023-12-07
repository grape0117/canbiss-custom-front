import './Gurantee.css'

import guyIMG  from '../../../assets/images/dashboard/guy.jpg'

const Gurantee = function () {
    return (
        <div className='gurantee'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <img src={guyIMG}></img>
                    </div>
                    <div className='col-lg-6'>
                        <div className='container'>
                            <h2>GHOST EXTRACTS CANNABIS</h2>
                            <p>we believe in providing top-shelf cannabis that you can enjoy any time of the day. we have bold and amazing flavors</p>
                            <br/><br/>
                            <h2>OUR GUARANTEE</h2>
                            <p>our approach involves blending high-potency thc oil with the finest quality, cannabis-derived terpenes.
                                our commitment is to use a proprietary combination of top-notch cannabis-derived terpenes and high-potency
                                distillate to maintain a consistent and dependable high</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gurantee;