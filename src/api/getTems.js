import { useState, useEffect } from "react";
import TemCardsListView from '../components/temCardsListView'

function GetTems({search, onSearchChange}) {
    const [tems, setTems] = useState([])
    useEffect(() => {
        fetch('https://temtem-api.mael.tech/api/temtems')
            .then((res) => {return res.json()})
            .then((data) => {
                setTems(data)
            })
        },[])

    if(tems.length != 0) {
        // console.log(tems)
        return(
            <div>
                <div className='searchBar'>
                    <input type='text' 
                    id='search' 
                    placeholder='Enter a TemTem Name to Search'
                    value={search}
                    onChange={(e) => onSearchChange(e.target.value)}/>
                </div>
                <div>
                    <TemCardsListView tems={tems}/>
                </div>
            </div>
        )
    }
}

export default GetTems;