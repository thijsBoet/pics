import React, { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
	const [term, setTerm] = useState('');

	const handleClick = (e) => {
		e.preventDefault();
		onSubmit(term);
	};

	const handleChange = (e) => {
		setTerm(e.target.value);
	};

	return (
		<form onSubmit={e => handleClick(e)}>
			<input
				type='text'
				placeholder='Search Images'
				value={term}
				onChange={handleChange}
				className='px-4 py-2 border-gray-400 border-2 rounded focus:ring-blue-400 focus:ring-2 focus:outline-none focus:border-transparent'
			/>
			<button
				type='submit'
				onClick={handleClick}
				className='ml-1 bg-gray-300 px-4 py-2 border-2 border-blue-400 rounded text-blue-400'
			>
				Search
			</button>
		</form>
	);
};

export default SearchBar;
