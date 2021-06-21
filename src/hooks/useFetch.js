import {useState, useEffect} from 'react'

import API from '../api'

const useFetch = (url) => {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);

    useEffect(() => {
		const fetchData = async () => {
		
		try {
			const result = await API.get(url);
			setResponse(result.data.results);
      	} catch (error) {
        	setError(error);
      	}
	}

		fetchData();
	}, [url])

	return {response, error}
}

export default useFetch
