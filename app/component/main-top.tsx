import Link from 'next/link';

export default function MainTop() {
	return (
		<div className="main-top">
		  <div className="container-fluid">
		    <div className="row">
		      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
		        <div className="text-slid-box">
		          <div id="offer-box" className="carouselTicker">
		            <ul className="offer-box">
		              <li>
		                <i className="fab fa-opencart" /> Off 10%! Shop Now Man
		              </li>		              
		            </ul>
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
		        <div className="custom-select-box">
		          <select
		            id="basic"
		            className="selectpicker show-tick form-control"
		            data-placeholder="$ USD"
		          >
		            <option>¥ JPY</option>
		            <option>$ USD</option>
		            <option>€ EUR</option>
		          </select>
		        </div>
		        <div className="right-phone-box">
		          <p>
		            Call US :- <Link href="#"> +11 900 800 100</Link>
		          </p>
		        </div>
		        <div className="our-link">
		          <ul>
		            <li>
		              <Link href="#">My Account</Link>
		            </li>
		            <li>
		              <Link href="#">Our location</Link>
		            </li>
		            <li>
		              <Link href="#">Contact Us</Link>
		            </li>
		          </ul>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>

	);
}