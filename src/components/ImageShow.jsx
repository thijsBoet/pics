import React from 'react';

const ImageShow = ({ image }) => {
	const { urls, description, alt_description } = image;
	return (
		<div className='max-w-sm rounded overflow-hidden shadow-lg my-6'>
			<img className='w-full' src={urls.thumb} alt={alt_description} />
			<div className='px-6 py-4'>
				<div className='font-bold text-xl mb-2 capitalize'>{alt_description}</div>
				<p className='text-gray-500 text-base capitalize'>{description}</p>
			</div>
		</div>
	);
};

export default ImageShow;
