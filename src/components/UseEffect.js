import React, {useEffect,useState} from 'react'

const UseEffect = () => {

    const [resourceType,setResourceType] = useState('posts');
    const [items,setItems] = useState([])
    const [windowWidth,setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        console.log('resize');
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize',handleResize)
        return () => {
            window.removeEventListener('resize',handleResize)
        }
    },[])

    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
        console.log('resource changed')
        return () => {
            console.log("removed")
        }
    },[resourceType])
    console.log("reloads")
    return (
        <>
        <div>
        <button onClick={()=>setResourceType('posts')}>Posts</button>
        <button onClick={()=>setResourceType('users')}>Users</button>
        <button onClick={()=>setResourceType('comments')}>Comments</button>
        <h1>{resourceType}</h1>
        </div>
        <h1>{windowWidth}</h1>
        {items.map(item => <pre>{JSON.stringify(item)}</pre>)}
        </>
    )

}

export default UseEffect