import { useState, useEffect } from "react";
import TemCardsListView from '../components/temCardsListView'

function GetTems({ search, onSearchChange }) {
    const [tems, setTems] = useState([])
    const [filteredTems, setFilteredTems] = useState([])
    // const [loading, setLoading] = useState([]) 

    // function debounce(func, wait) {
    //     let timeout
    // }

    // return function executedFunction(...args) {
    //     const later = () => {
    //         clearTimeout(timeout)
    //         func(...args)
    //     }

    //     clearTimeout(timeout)
    //     timeout = setTimeout(later, wait)
    // }

    // const debouncedHandleFilterChange = debounce(handleFilterChange, 300)

    function handleFilterChange(query) {
        setFilteredTems(tems.filter((tem) => tem.name.toUpperCase().includes(query))
        )
    }

    useEffect(() => {
        fetch('https://temtem-api.mael.tech/api/temtems')
            .then((res) => { return res.json() })
            .then((data) => {
                setTems(data)
            })
    }, [])

    const isEmpty = filteredTems.length

    if (tems.length !== 0) {
        return (
            <div>
                <div className="searchBar">
                    <input
                        type="text"
                        id="search"
                        placeholder="Enter a TemTem Name to Search"
                        onChange={(e) => handleFilterChange(e.target.value.toUpperCase())}
                    />
                </div>
                <div>
                    {isEmpty ? (
                        <TemCardsListView tems={filteredTems} />
                    ) : (
                        <TemCardsListView tems={tems} />
                    )}
                </div>
            </div>
        )
    }
}

export default GetTems;