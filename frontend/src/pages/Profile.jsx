import { useEffect, useState } from 'react';

function Profile() {
  const username = localStorage.getItem('username');
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);

  useEffect(() => {
    const allPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const filtered = allPosts.filter(post =>
      post.bookmarkedBy && post.bookmarkedBy.includes(username)
    );
    setBookmarkedPosts(filtered);
  }, [username]);

  if (!username) {
    return (
      <div style={{ padding: '2rem' }}>
        <h1>Access Denied</h1>
        <p>You must be logged in to view your profile.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{username}'s Profile</h1>
      <p><strong>Username:</strong> {username}</p>
      <p><strong>Member Since:</strong> May 2025</p>

      <h2>My Dashboard</h2>
      <ul>
        <li>📖 Saved Blogs (coming soon)</li>
        <li>📊 Trade Logs (coming soon)</li>
        <li>⚙️ Edit Profile (future feature)</li>
      </ul>

      <h2 style={{ marginTop: '2rem' }}>🔖 My Bookmarked Posts</h2>
      {bookmarkedPosts.length === 0 ? (
        <p>You haven’t bookmarked any posts yet.</p>
      ) : (
        bookmarkedPosts.map((post, index) => (
          <div key={index} style={{ borderBottom: '1px solid #ccc', padding: '1rem 0' }}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            {post.tags && post.tags.length > 0 && (
              <p style={{ fontSize: '0.9rem', color: '#444' }}>
                Tags: {post.tags.map((tag, i) => <span key={i}>#{tag} </span>)}
              </p>
            )}
            <p style={{ fontSize: '0.8rem', color: '#666' }}>
              By {post.author} on {post.date}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default Profile;
