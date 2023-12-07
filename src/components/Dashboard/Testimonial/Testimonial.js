import './Testimonial.css'
import clientIMG  from '../../../assets/images/dashboard/client.png'

const Testimonials = function () {
  return (
      <div className="testimonial">
          <div className='container'>
            <h2>GHOSTCARTS.COM CLIENT REVIEWS</h2>
            <div className='row'>
                <div className='col-lg-4'>
                    <div className='card'>
                        <div class="card-header">
                            <img src={clientIMG}></img>      
                        </div>
                          <div class="card-body">
                              <p>
                                GHOST Cannabis Extract pens are at the TOP of my Pen list. I love the flavor here,
                                I also use the dispensary-grade GHOST for their potent ghost torch Pen, but I was
                                so excited to see this FIRE BRAND being sold really affordable to everyone. Hope to
                                see many more GHOST PEN choices in the near future. HIGHLY recommended
                              </p>
                          </div>
                          <div class="card-footer">
                              Lonnie Francisco<br/>
                              Verified Buyer
                          </div>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='card'>
                        <div class="card-header">
                            <img src={clientIMG}></img>      
                        </div>
                          <div class="card-body">
                              <p>
                                GHOST Cannabis Extract pens are at the TOP of my Pen list. I love the flavor here,
                                I also use the dispensary-grade GHOST for their potent ghost torch Pen, but I was
                                so excited to see this FIRE BRAND being sold really affordable to everyone. Hope to
                                see many more GHOST PEN choices in the near future. HIGHLY recommended
                              </p>
                          </div>
                          <div class="card-footer">
                              Lonnie Francisco<br/>
                              Verified Buyer
                          </div>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='card'>
                        <div class="card-header">
                            <img src={clientIMG}></img>      
                        </div>
                          <div class="card-body">
                              <p>
                                GHOST Cannabis Extract pens are at the TOP of my Pen list. I love the flavor here,
                                I also use the dispensary-grade GHOST for their potent ghost torch Pen, but I was
                                so excited to see this FIRE BRAND being sold really affordable to everyone. Hope to
                                see many more GHOST PEN choices in the near future. HIGHLY recommended
                              </p>
                          </div>
                          <div class="card-footer">
                              Lonnie Francisco<br/>
                              Verified Buyer
                          </div>
                    </div>
                </div>
            </div>
          </div>
         
    </div>
  );
}

export default Testimonials;