// import React, { useState } from 'react';

// const CreatePost = () => {
//     const [title, setTitle] = useState('');
//     const [content, setContent] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Implement post creation logic here
//         console.log('Creating Post:', title, content);
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label>Title:</label>
//                 <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
//             </div>
//             <div>
//                 <label>Content:</label>
//                 <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
//             </div>
//             <button type="submit">Create Post</button>
//         </form>
//     );
// };

// export default CreatePost;