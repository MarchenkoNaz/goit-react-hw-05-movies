import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<>
			<nav className='navbar navbar-expand-lg bg-body-tertiary'>
				<div className="container-fluid">
					<ul className='navbar-nav me-auto mb-2 mb-lg-0 flex-row'>
						<li className='nav-item m-2'>
							<Link className='nav-item nav-link active' to='/'>Home</Link>
						</li>
						<li className='nav-item m-2'>
							<Link className='nav-link' to='/movies'>Movies</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	)
}

export default Header