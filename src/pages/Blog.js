import React from 'react';
import '../styles/Blog.css';

const BlogPost = ({ title, content }) => (
  <div className="blog-post">
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

const BlogPage = () => {
  // Sample data for blog posts
  const blogPosts = [
    {
      title: 'Exploring Responsible Dog Breeding',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
    },
    {
      title: 'Tips for Training Your New Puppy',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
    },
    
    // Add more blog posts as needed
  ];

  return (
    <div className="blog-page">
      
      {blogPosts.map((post, index) => (
        <BlogPost key={index} title={post.title} content={post.content} />
      ))}
    </div>
  );
};

export default BlogPage;
