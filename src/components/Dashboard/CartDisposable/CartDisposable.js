import './CartDisposable.css'
import ProductIMG from '../../../assets/images/dashboard/Mockup_Product.png'

const CartDisposable = function () {
    return (
        <div className='cartdisposable'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>

                        <h3>GHOST CART DISPOSABLES BULK BUY NOW</h3><br/>
                        <p>If you’re looking to stock up on Ghost Cart disposables in bulk,
                            you’ve come to the right place. Buying in bulk can save you money
                            and ensure that you always have plenty of disposables on hand when you need them.<br/><br/>

                            When you buy Ghost Cart disposables in bulk or fryd carts, you can rest assured
                            that you’re getting a high-quality product. Our disposables are made with the
                            highest standards in mind and are lab-tested to ensure quality and purity.<br/><br/>

                            Buying in bulk is also a great way to save money on your ghost products. We offer
                            competitive pricing on all of our bulk orders, so you can get more for your money.
                            Plus, with our fast and reliable shipping, you can have your bulk order delivered
                            right to your door in no time.</p>

                    </div>
                    <div className='col-lg-6'>
                        <img src = {ProductIMG}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartDisposable;