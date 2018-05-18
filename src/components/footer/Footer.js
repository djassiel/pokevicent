import React from 'react'
import './Footer.css'

const Footer = () => {
	return (
<footer className="page-footer font-small indigo pt-0">
    <div className="container">
        <div className="row">
            <div className="col-md-12 py-5">
                <div className="mb-5 flex-center redes">
                    <a className="fb-ic" href="https://www.facebook.com/djassiel26">
                        <i className="fa fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                    </a>
                    <a className="tw-ic" href="https://twitter.com/davidjvicent">
                        <i className="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                    </a>
                    <a className="ins-ic" href="https://www.instagram.com/davidjvicent/">
                        <i className="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div className="footer-copyright py-3 text-center">
		Hecho con <span role="img" aria-label="">💓</span> por <strong>David Vicent</strong>
    </div>

</footer>
		)
}

export default Footer