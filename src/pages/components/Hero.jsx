import { Link } from "react-router-dom"

export const Hero = (props) => {
	return (
		<header id='header'>
			<div className='intro'>
				<div className='overlay hero-img'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-8 col-md-offset-2 intro-text'>
								<img src="img/logo.png" alt="Nachos Logo" style={{ height: "400px" }} />
								<h1>Nachos</h1>
								<p>Nachos (aka NachiOS) is an interface/simulation software for Nachi Robotic Manipulator.</p>
								<Link to="/coding">
									<button className='btn btn-custom btn-lg page-scroll'>
										&lt; Start Coding &gt;
									</button>
								</Link>
								{/* <a href='' className='btn btn-custom btn-lg page-scroll'>Get Started</a> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
