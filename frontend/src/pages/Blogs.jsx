import { useEffect, useState } from 'react';

function TagDropdown({ selected, onChange }) {
  const allTags = [
    { label: '📈 Stocks', value: 'stocks' },
    { label: '💰 Crypto', value: 'crypto' },
    { label: '💱 Forex', value: 'forex' },
    { label: '📊 Options', value: 'options' },
    { label: '⚡ Day Trading', value: 'daytrading' },
    { label: '📚 Education', value: 'education' },
  ];

  const [open, setOpen] = useState(false);

  const toggleTag = (value) => {
    if (selected.includes(value)) {
      onChange(selected.filter(tag => tag !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  return (
    <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          padding: '0.6rem 1rem',
          fontSize: '1rem',
          border: '1px solid #ccc',
          borderRadius: '6px',
          cursor: 'pointer',
          backgroundColor: '#f1f1f1',
        }}
      >
        {selected.length > 0 ? `Tags (${selected.length})` : 'Choose Tags'}
      </button>

      {open && (
        <div
          style={{
            position: 'absolute',
            background: '#fff',
            border: '1px solid #ccc',
            padding: '0.75rem',
            width: '100%',
            zIndex: 10,
            maxHeight: '200px',
            overflowY: 'auto',
            marginTop: '0.25rem',
            borderRadius: '6px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          {allTags.map(tag => (
            <label key={tag.value} style={{ display: 'block', marginBottom: '0.5rem' }}>
              <input
                type="checkbox"
                checked={selected.includes(tag.value)}
                onChange={() => toggleTag(tag.value)}
              />{' '}
              {tag.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

function Blogs() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', content: '', tags: [] });
  const username = localStorage.getItem('username');

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    setPosts(savedPosts);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      title: newPost.title,
      content: newPost.content,
      tags: newPost.tags,
      author: username || 'Anonymous',
      date: new Date().toLocaleString(),
      likes: 0,
      bookmarkedBy: [],
    };
    const updatedPosts = [post, ...posts];
    setPosts(updatedPosts);
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    setNewPost({ title: '', content: '', tags: [] });
  };

  const handleDelete = (indexToDelete) => {
    const updatedPosts = posts.filter((_, i) => i !== indexToDelete);
    setPosts(updatedPosts);
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
  };

  const handleLike = (indexToLike) => {
    const updatedPosts = posts.map((post, i) =>
      i === indexToLike ? { ...post, likes: post.likes + 1 } : post
    );
    setPosts(updatedPosts);
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
  };

  const handleBookmark = (index) => {
    const updatedPosts = posts.map((post, i) => {
      if (i !== index) return post;
      const alreadyBookmarked = post.bookmarkedBy.includes(username);
      const updatedBookmarks = alreadyBookmarked
        ? post.bookmarkedBy.filter(u => u !== username)
        : [...post.bookmarkedBy, username];
      return { ...post, bookmarkedBy: updatedBookmarks };
    });
    setPosts(updatedPosts);
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Community Blog</h1>

      <form onSubmit={handleSubmit} style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '1.5rem',
        marginBottom: '2.5rem',
        backgroundColor: '#fafafa',
        boxShadow: '0 1px 6px rgba(0,0,0,0.05)'
      }}>
        <input
          type="text"
          placeholder="Post title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          required
          style={{
            display: 'block',
            width: '100%',
            marginBottom: '1rem',
            padding: '0.75rem',
            borderRadius: '6px',
            border: '1px solid #ccc',
            fontSize: '1rem'
          }}
        />

        <textarea
          placeholder="Write your trading or educational post..."
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
          required
          rows={5}
          style={{
            display: 'block',
            width: '100%',
            marginBottom: '1rem',
            padding: '0.75rem',
            borderRadius: '6px',
            border: '1px solid #ccc',
            fontSize: '1rem'
          }}
        />

        <TagDropdown selected={newPost.tags} onChange={(tags) => setNewPost({ ...newPost, tags })} />
        <button
          type="submit"
          style={{
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          Post
        </button>
      </form>

      <h2 style={{ marginBottom: '1rem' }}>Recent Posts</h2>
      {posts.length === 0 && <p>No posts yet. Be the first to share something!</p>}
      {posts.map((post, index) => (
        <div key={index} style={{
          borderBottom: '1px solid #ddd',
          padding: '1rem 0',
          marginBottom: '1rem'
        }}>
          <h3 style={{ marginBottom: '0.25rem' }}>{post.title}</h3>
          <p>{post.content}</p>

          {post.tags.length > 0 && (
            <p style={{ fontSize: '0.9rem', color: '#555', marginTop: '0.5rem' }}>
              Tags: {post.tags.map((tag, i) => <span key={i}>#{tag} </span>)}
            </p>
          )}

          <p style={{ fontSize: '0.8rem', color: '#777', marginTop: '0.25rem' }}>
            By {post.author} on {post.date}
          </p>

          <div style={{ marginTop: '0.75rem' }}>
            <button onClick={() => handleLike(index)} style={{ marginRight: '1rem' }}>
              👍 {post.likes}
            </button>
            <button onClick={() => handleBookmark(index)} style={{ marginRight: '1rem' }}>
              🔖 Bookmark
            </button>
            {post.author === username && (
              <button onClick={() => handleDelete(index)}>🗑️ Delete</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
