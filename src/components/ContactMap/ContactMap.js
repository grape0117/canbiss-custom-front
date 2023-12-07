const ContactMap = function () {
    return (
        <>
            <div className="row">
                <div className="col-lg-6">
                    <h5>Location</h5>
                    <p>123 Main Street, Canberra</p>
                </div>
                <div className="col-lg-6">
                    <h5>Working Hours</h5>
                    <p>Mon-Fri: 9am-5pm</p>
                </div>
            </div>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1480.2623497404734!2d-72.49067236102408!3d42.09623218305824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e6e85bbff9963d%3A0xfb59d681b48aa804!2sNova%20Patologia!5e0!3m2!1sen!2sru!4v1701617702157!5m2!1sen!2sru" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            <div >
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/d/embed?mid=17ru_tWm4hSV3al1xhdb-jG0FPto&hl=en&ehbc=2E312F"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </>
    )
}

export default ContactMap;