import axios from 'axios';

const searchImages = async (searchTerm) => {
	const response = await axios.get('https://api.unsplash.com/search/photos', {
		headers: {
			Authorization: 'Client-ID ax1rWKHrAInrK463DKyl_UyAcrSuzvjx03CqZNR8M4w',
		},
		params: {
			query: searchTerm,
		},
	});

	return response.data.results;
};

export default searchImages;