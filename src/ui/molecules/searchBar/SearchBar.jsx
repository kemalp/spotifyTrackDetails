import './SearchBar.scss'

//React and dependencies
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchResultsAsync } from '../../../redux/searchResultsSlice'

//Components
import Button from '../../atoms/button/Button'
import Input from '../../atoms/input/Input'

//Imports
import { FaSearch } from 'react-icons/fa'

const SearchBar = props => {

	//Redux Hooks
	const dispatch = useDispatch()
	

	const [searchTerm, setSearchTerm] = useState('')

	const searchValue = () => {
		dispatch(searchResultsAsync(searchTerm, 0))
	}

	return (
		<div className="SearchBar">
			<Input value={searchTerm} icon={<FaSearch />} placeholder="Search Track or Artist on Spotify" onChange={e => setSearchTerm(e.target.value)} />
			<Button onClick={searchValue}>Search</Button>
		</div>
	)
}

export default SearchBar