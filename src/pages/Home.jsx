import { Link } from "react-router-dom"

const Hero = () => {
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
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

const HomeNavigation = () => {
	return (
		<nav id='menu' className='navbar navbar-default navbar-fixed-top'>
			<div className='container'>
				<div className='navbar-header'>
					<button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#nachos-navbar'>
						<span className='sr-only'>Toggle navigation</span>
						<span className='icon-bar'></span>
						<span className='icon-bar'></span>
						<span className='icon-bar'></span>
					</button>
					<Link to="/" className="navbar-brand">Nachos</Link>
				</div>

				<div className='collapse navbar-collapse' id='nachos-navbar'>
					<ul className='nav navbar-nav navbar-left'>
						<li><Link to="/coding">&lt; Start Coding &gt;</Link></li>
					</ul>
					<ul className='nav navbar-nav navbar-right'>
						<li><a href={"https://github.com/hadeneh/nachos/tree/main/docs/manuals"} target="_blank" rel="noopener noreferrer">Docs</a></li>
						<li><a href={"https://github.com/hadeneh/nachos/issues"} target="_blank" rel="noopener noreferrer">Help</a></li>
					</ul>
				</div>
			</div>
		</nav>
	)
}


function Home() {
	return (
		<div>
			<HomeNavigation />
			<Hero />
		</div>
	);
}


export default Home;
