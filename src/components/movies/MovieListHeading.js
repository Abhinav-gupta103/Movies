import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext'
import { Button, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const MovieListHeading = (props) => {
	const [error, setError] = useState("")
	const { currentUser, logout } = useAuth()
	const navigate = useNavigate()

	async function handleLogout() {
		setError('')
		try {
			await logout()
			navigate('login')
		} catch {
			setError('Failed to log out')
		}
	}
	return (
		<div className='col'>
			<h1>{props.heading}</h1>
			{error && <Alert variant="danger">{error}</Alert>}
			<strong>Email:</strong> {currentUser.email}
			<div className="w-100 text-center mt-2">
				<Button variant="link" onClick={handleLogout}>Log Out</Button>
			</div>
		</div>
	);
};

export default MovieListHeading;
