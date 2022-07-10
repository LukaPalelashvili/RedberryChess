import { useEffect, useState } from 'react'
import axios from 'axios'

export const useGrandMastersService = () => {
	const [data, setData] = useState([])

	useEffect(() => {
		axios
			.get('https://chess-tournament-api.devtest.ge/api/grandmasters')
			.then(res => setData(res.data))
	}, [])

	const grandMasters = data.map(item => ({
		id: item.id,
		name: item.name,
		image: `https://chess-tournament-api.devtest.ge/${item.image}`,
	}))

	return { grandMasters }
}
