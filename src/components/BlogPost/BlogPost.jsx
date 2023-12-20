//import react from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
    const { id } = useParams(); //Get post ID from URL

    //Sample or example post data
    const post = {
        id: id,
        title: `Blog Post ${id}`,
        content: `Content for blog post ${id}...`,
        //In a real app, you'd fetch this data from the backend
    };
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>

        </div>
    )
}

export default BlogPost;