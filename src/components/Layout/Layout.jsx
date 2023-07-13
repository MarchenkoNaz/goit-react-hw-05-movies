import Header from 'components/Header/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<ToastContainer />
		</>
	)
}

export default Layout