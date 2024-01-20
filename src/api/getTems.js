import { useState, useEffect } from "react";

function GetTems() {
    const [tems, setTems] = useState([])
    useEffect(() => {
        fetch('https://temtem-api.mael.tech/api/temtems')
            .then((res) => {return res.json()})
            .then((data) => {
                setTems(data)
                console.log(data)
            })
        },[])
}

export default GetTems;