import './QualityProduct.css'

import extractionImg from "../../../assets/images/qualitycannabis/ghost-extraction.png";
import qualitycontrolImg from "../../../assets/images/qualitycannabis/ghost-quality-control.png";
import partytestingImg from "../../../assets/images/qualitycannabis/ghost-third-party-testing.png";

const QualityProduct = function () {
    return (
        <div className='quality'>
            <div className='container'>
                <h1> QUALITY CANNABIS PRODUCTS. </h1>
                <p>we keep the process that we use for our ghost extracts cannabis products simple.</p>
            </div>

            <div className='container'>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <img src={extractionImg}></img>
                        <h5>PREMIUM CANNABIS</h5>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <img src={partytestingImg}></img>
                        <h5>3rd party tested</h5>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <img src={qualitycontrolImg}></img>
                        <h5>QUALITY CONTROL CHECKED</h5>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default QualityProduct;