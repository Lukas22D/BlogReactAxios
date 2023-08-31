import { useState, useEffect} from 'react'
import blogFetch from '../axios/config.js';
import { useParams, Link } from 'react-router-dom';

const ViewMore = () => {

    //Puxando Post para mostrar na tela
    const [post, setPost] = useState();
    const { id } = useParams();
    const getPost = async () => {
        const { data } = await blogFetch.get(`/posts/${id}`);
        setPost(data);
    }

    useEffect(() => {
        getPost();
    }, []);

    


  return (
    <div className='post'>
        <h1>View More:</h1>
            <h2>{post?.title}</h2>
            <p>{post?.body}</p>
            <Link to={`/`} className='btn'> voltar</Link>
             
    </div>
  )
}

export default ViewMore