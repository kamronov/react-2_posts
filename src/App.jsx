import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([])
  const [posts, setPosts] = useState([])
  const [idD, setId] = useState(0)

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=> res.json())
    .then((data)=> setData(data))
  },[])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=> res.json())
    .then((data)=> setPosts(data))
  },[])
  return (
    <div className="App">
        <ul>
            {
              data && data.map(({id,name})=>(
                <li className='list' key={id}> {name}
                  <button className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=> setId(id)}>open</button>
                </li>
              ))
            }
        </ul>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                   {
                    posts && posts.map(({id,userId,title})=>(
                      <li>{userId === idD ? id +' Title -'+ title: ''}</li>
                    ))
                   }
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
  );
}

export default App;



