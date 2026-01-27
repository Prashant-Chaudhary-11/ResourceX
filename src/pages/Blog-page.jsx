import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Latest');

  // Sample blog data - replace with your actual data source
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with React Development',
      excerpt: 'Learn the fundamentals of React and start building modern web applications with this comprehensive guide.',
      category: 'Tutorial',
      author: 'John Doe',
      date: 'Jan 15, 2026',
      readTime: '5 min read',
      image: 'https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?t=st=1769529981~exp=1769533581~hmac=6c07263c02d24c87a60043f8e11807195d704129c1c2845dc99d5e891641b949&w=2000',
    //   featured: true
    },
    {
      id: 2,
      title: 'Advanced JavaScript Patterns',
      excerpt: 'Explore advanced JavaScript design patterns and best practices for writing maintainable code.',
      category: 'Development',
      author: 'Jane Smith',
      date: 'Jan 12, 2026',
      readTime: '8 min read',
      image: 'https://img.freepik.com/free-vector/programmer-work-with-working-day-symbols-flat-illustration_1284-60322.jpg?t=st=1769530033~exp=1769533633~hmac=b5634dfb79c1cb49c267e5545ceba6628366a2b24ceaaace479adf46ca53509c&w=2000'
    },
    {
      id: 3,
      title: 'CSS Grid Layout Masterclass',
      excerpt: 'Master CSS Grid and create responsive layouts with ease using modern CSS techniques.',
      category: 'Design',
      author: 'Mike Johnson',
      date: 'Jan 10, 2026',
      readTime: '6 min read',
      image: 'https://img.freepik.com/free-vector/flat-design-graphic-designer-template_23-2150508687.jpg?t=st=1769530076~exp=1769533676~hmac=7c1f988552ec2f35772e635530cd79327b7fbe0096825aeb9f949d29b993acb5&w=2000'
    },
    {
      id: 4,
      title: 'Building REST APIs with Node.js',
      excerpt: 'A complete guide to building scalable REST APIs using Node.js and Express.',
      category: 'Backend',
      author: 'Sarah Wilson',
      date: 'Jan 8, 2026',
      readTime: '10 min read',
      image: 'https://img.freepik.com/free-vector/gradient-api-infographic_23-2149379657.jpg?t=st=1769530131~exp=1769533731~hmac=0a0b1a60d8995abea9ee900b29b03bb21bcb79e4475936966769d93c70e915cf&w=2000'
    },
    {
      id: 5,
      title: 'UI/UX Design Principles',
      excerpt: 'Essential design principles every developer should know to create better user experiences.',
      category: 'Design',
      author: 'Alex Brown',
      date: 'Jan 5, 2026',
      readTime: '7 min read',
      image: 'https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149051557.jpg?t=st=1769530160~exp=1769533760~hmac=b404cfd5684664136e14e1d1a84953a89cd3925f3f5205760feda2c01fb44ba8&w=2000'
    },
    {
      id: 6,
      title: 'State Management in React',
      excerpt: 'Understanding different state management solutions and when to use them in your React applications.',
      category: 'Tutorial',
      author: 'Emily Davis',
      date: 'Jan 3, 2026',
      readTime: '9 min read',
      image: 'https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169860.jpg?t=st=1769530194~exp=1769533794~hmac=e8c37eae53aa7ce8b16c40c76fcc1bb2e9152a0b40c93860135dca6b0e6857bc&w=2000'
    }
  ];

  const categories = ['All', 'Tutorial', 'Development', 'Design', 'Backend'];

  // Filter and sort posts
  const filteredPosts = blogPosts
    .filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === 'Latest') {
        return new Date(b.date) - new Date(a.date);
      } else if (sortBy === 'Oldest') {
        return new Date(a.date) - new Date(b.date);
      }
      return 0;
    });

  const featuredPost = filteredPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="blog-page">
      <div className="blog-container">
        {/* Hero Section */}
        <div className="blog-hero">
          <div className="blog-breadcrumb">
            <Link to="/" className="blog-link">Home</Link> / Blog
          </div>
          <h1 className="blog-title">Blog & Insights</h1>
          <p className="blog-subtitle">
            Discover tutorials, tips, and insights about web development, design, and technology.
            Stay updated with the latest trends and best practices.
          </p>

          {/* Filter Bar */}
          <div className="blog-filter-bar">
            <div className="blog-search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="Latest">Latest</option>
              <option value="Oldest">Oldest</option>
            </select>
          </div>
        </div>

        {/* Blog Section */}
        <div className="mt-3">
          <div className="blog-grid">
            {/* Featured Post */}
            {/* {featuredPost && (
              <Link to={`/blog/${featuredPost.id}`} className="featured-blog">
                <div className="featured-blog-content">
                  <span className="blog-category-badge">{featuredPost.category}</span>
                  <h2 className="featured-blog-title">{featuredPost.title}</h2>
                  <p className="featured-blog-excerpt">{featuredPost.excerpt}</p>
                  <div className="featured-blog-meta">
                    <span>By {featuredPost.author}</span>
                    <span>•</span>
                    <span>{featuredPost.date}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <img src={featuredPost.image} alt={featuredPost.title} className="featured-blog-image" />
              </Link>
            )} */}

            {/* Regular Posts */}
            {regularPosts.length > 0 ? (
              regularPosts.map(post => (
                <Link to={`/blog/${post.id}`} key={post.id} className="blog-card">
                  <img src={post.image} alt={post.title} className="blog-card-image" />
                  <div className="blog-card-content">
                    <span className="blog-card-category">{post.category}</span>
                    <h3 className="blog-card-title">{post.title}</h3>
                    <p className="blog-card-excerpt">{post.excerpt}</p>
                    <div className="blog-card-footer">
                      <div className="blog-card-author">
                        <span>By {post.author}</span>
                      </div>
                      <div className="blog-card-date">
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="blog-empty-state">
                <h3>No Articles Found</h3>
                <p>Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;