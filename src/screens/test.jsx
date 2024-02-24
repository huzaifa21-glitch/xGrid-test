import React, { useState, useEffect } from 'react';
import './test.css';


const TestPage = () => {


    const [modalOpen, setModalOpen] = useState(false);
    const [details, setDetails] = useState([]);

    const [userId, setUserId] = useState('')
    const [postId, setpostId] = useState('')
    const [title, setTile] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const [search,setSearch]= useState('')
    const fetchDetails = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setDetails(json)
            })

    }

    useEffect(() => {
        fetchDetails();

    }, []);
    const toggle = () => {

    }
    const openModal = (id) => {
        setModalOpen(true)
    }
    const deletecol = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
          });
          fetchDetails();
    }
    const closeModal = () => {
        setModalOpen(false);
    };
    const searchcol =(ser)=>{
        const filterDet = details.filter((item) =>
        item.id.includes(ser),
        setDetails(filterDet)
        
    
  );
    }

    return (
        <div className='main'>
            {/* <h1>Test</h1> */}
            <div>
            <input type="text" placeholder="type id" value={search}/>
            {/* <button onClick={searchcol(search)}>Search</button> */}
            </div>
            <table className="test-table">
                <thead className="name-table">
                    {/* <tr>
                        <th>id</th>
                        <th>user ID</th>
                        <th>title</th>
                        <th>body</th>


                    </tr> */}

                </thead>
                <tbody class="test-table">
                   
               
                    <div className="details">
                        {details.map((detail, index) => (
                            <div className="details-card" key={index}>
                                
                                <div >
                                    <td>{detail.id}</td>
                                    <td>{detail.userID}</td><br />
                                    <td>{detail.title}</td>
                                    <td>{detail.body}</td>
                                    {/* <button>edit</button> */}
                                    <button onClick={deletecol(detail.id)}>delete</button>
                                </div>
                            </div>

                        ))}
                    </div>


                
                </tbody>
            </table>
            {modalOpen && (
                        <div className='form-modal'>
                            {/* <div> */}
                            <h3>{details.id}</h3>
                            <p>{details.userID}</p><br />
                            <p>{details.title}</p>
                            <p>{details.body}</p>
                            {/* </div> */}
                            <button onClick={closeModal}>Close</button>
                        </div>
                    )}
                    <h1>FORM</h1>
            <form className='order-form' onSubmit={(e) => {
                e.preventDefault();
                const formData = {
                    name: e.target.name.value,
                    email: e.target.email.value,
                    userId: e.target.userId.value,
                    title: e.target.title.value,
                    postId: e.target.postId.value,

                };
                handleOrder(formData);
            }}>
                <input type="text" name="userId" placeholder="User ID" required />
                <input type="text" name="postId" placeholder="Post ID" required />
                <input type="text" name="title" placeholder="Title" required />
                <input type="text" name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Email" required />
               
            </form>
        </div >

    );
};

export default TestPage;
