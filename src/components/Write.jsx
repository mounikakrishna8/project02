//import React from 'react';

const Write = () => {
    //sample Data
    // const blogs = [
    //     { id: 1, title: 'Blog Post 1', content: 'content for blog post1.....' },
    //     { id: 2, title: 'Blog Post 2', content: 'content for blog post2.....' },
    //     //Fetch real data from your backend API

    // ];

    return (
        <div>
            {Write.map(blog => (
                <div key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.content}</p>
                </div>
            ))}
        </div>
    );

};

export default Write;