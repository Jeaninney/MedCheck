import React from 'react';
// import {Link} from 'react-router-dom';
// import Footer from '../../components/Footer';
import HomeButton from '../../components/HomeButton';
import AddApptBtn from '../../components/AddApptBtn';

function Appointments() {
  return (
    <div>
      <div
        style={{
			height: '20%', clear: 'both', paddingTop: 20, paddingBottom: 20, textAlign: 'center',
		  }}
		id="m3"
      >
        <p>APPOINTMENTS</p>
      </div>
      <div className="container">
		<div className="row row-striped">
			<div className="col-2 text-right">
				<h1 className="display-4"><span className="badge badge-secondary">23</span></h1>
				<h2>OCT</h2>
			</div>
			<div className="col-10">
				<h3 className="text-uppercase"><strong>Ice Cream Social</strong></h3>
				<ul className="list-inline">
				    <li className="list-inline-item"><i className="fa fa-calendar-o" aria-hidden="true"></i> Monday</li>
					<li className="list-inline-item"><i className="fa fa-clock-o" aria-hidden="true"></i> 12:30 PM - 2:00 PM</li>
					<li className="list-inline-item"><i className="fa fa-location-arrow" aria-hidden="true"></i> Cafe</li>
				</ul>
				<p>Lorem ipsum dolsit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			</div>
		</div>
    </div>
		<AddApptBtn />
      <HomeButton />
    </div>
  
  );
}

export default Appointments;
