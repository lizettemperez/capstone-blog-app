import { useEffect, useState } from 'react';

function Blogs() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const username = localStorage.getItem('username');

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    setPosts(savedPosts);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      ...newPost,
      author: username || 'Anonymous',
      date: new Date().toLocaleString(),
    };
    const updatedPosts = [post, ...posts];
    setPosts(updatedPosts);
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    setNewPost({ title: '', content: '' });
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Community Blog</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <input
          type="text"
          placeholder="Post title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          required
          style={{ display: 'block', width: '100%', marginBottom: '1rem' }}
        />
        <textarea
          placeholder="Write your trading or educational post..."
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
          required
          rows={5}
          style={{ display: 'block', width: '100%', marginBottom: '1rem' }}
        />
        <button type="submit">Post</button>
      </form>

      <h2>Recent Posts</h2>
      {posts.map((post, index) => (
        <div key={index} style={{ borderBottom: '1px solid #ccc', padding: '1rem 0' }}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p style={{ fontSize: '0.8rem', color: '#666' }}>
            By {post.author} on {post.date}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
