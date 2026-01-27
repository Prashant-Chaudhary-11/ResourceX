import React from 'react';
import { Link, useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();

  // Sample blog data - replace with API call or your data source
  const blogPost = {
    id: 1,
    title: 'Getting Started with React Development',
    category: 'Tutorial',
    author: 'John Doe',
    date: 'Jan 15, 2026',
    readTime: '5 min read',
    image: 'https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?t=st=1769529981~exp=1769533581~hmac=6c07263c02d24c87a60043f8e11807195d704129c1c2845dc99d5e891641b949&w=2000',
    content: `
      <p>React has revolutionized the way we build user interfaces. In this comprehensive guide, we'll explore the fundamentals of React and help you get started with modern web development.</p>

      <h2>What is React?</h2>
      <p>React is a JavaScript library for building user interfaces, particularly single-page applications. It was developed by Facebook and is now maintained by Facebook and a community of individual developers and companies.</p>

      <h3>Key Features of React</h3>
      <ul>
        <li><strong>Component-Based Architecture:</strong> Build encapsulated components that manage their own state</li>
        <li><strong>Virtual DOM:</strong> Efficient updates and rendering of components</li>
        <li><strong>JSX Syntax:</strong> Write HTML-like code in JavaScript</li>
        <li><strong>Unidirectional Data Flow:</strong> Makes your code more predictable and easier to debug</li>
      </ul>

      <h2>Setting Up Your Development Environment</h2>
      <p>Before you start building React applications, you'll need to set up your development environment. Here's what you need:</p>

      <blockquote>
        "The best way to learn React is by building real projects. Start small and gradually increase complexity as you become more comfortable with the concepts."
      </blockquote>

      <h3>Prerequisites</h3>
      <ol>
        <li>Node.js and npm installed on your machine</li>
        <li>A code editor (VS Code is recommended)</li>
        <li>Basic understanding of HTML, CSS, and JavaScript</li>
      </ol>

      <h2>Creating Your First React App</h2>
      <p>The easiest way to create a new React application is using Create React App. This tool sets up a modern web development environment with no configuration required.</p>

      <h3>Best Practices</h3>
      <p>As you continue your React journey, keep these best practices in mind:</p>
      <ul>
        <li>Keep components small and focused</li>
        <li>Use functional components with hooks</li>
        <li>Implement proper error boundaries</li>
        <li>Follow consistent naming conventions</li>
        <li>Write clean, readable code with proper comments</li>
      </ul>

      <h2>Conclusion</h2>
      <p>React is a powerful tool for building modern web applications. With its component-based architecture and efficient rendering, it's become the go-to choice for many developers. Keep practicing, building projects, and exploring the React ecosystem to become proficient.</p>
    `,
    tags: ['React', 'JavaScript', 'Web Development', 'Frontend', 'Tutorial']
  };

  // Sample related posts
  const relatedPosts = [
    {
      id: 2,
      title: 'Advanced JavaScript Patterns',
      excerpt: 'Explore advanced JavaScript design patterns and best practices.',
      category: 'Development',
      author: 'Jane Smith',
      date: 'Jan 12, 2026',
      readTime: '8 min read',
      image: 'https://img.freepik.com/free-vector/programmer-work-with-working-day-symbols-flat-illustration_1284-60322.jpg?t=st=1769530033~exp=1769533633~hmac=b5634dfb79c1cb49c267e5545ceba6628366a2b24ceaaace479adf46ca53509c&w=2000'
    },
    {
      id: 6,
      title: 'State Management in React',
      excerpt: 'Understanding different state management solutions in React.',
      category: 'Tutorial',
      author: 'Emily Davis',
      date: 'Jan 3, 2026',
      readTime: '9 min read',
      image: 'https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169860.jpg?t=st=1769530194~exp=1769533794~hmac=e8c37eae53aa7ce8b16c40c76fcc1bb2e9152a0b40c93860135dca6b0e6857bc&w=2000'
    },
    {
      id: 3,
      title: 'CSS Grid Layout Masterclass',
      excerpt: 'Master CSS Grid and create responsive layouts with ease.',
      category: 'Design',
      author: 'Mike Johnson',
      date: 'Jan 10, 2026',
      readTime: '6 min read',
      image: 'https://img.freepik.com/free-vector/flat-design-graphic-designer-template_23-2150508687.jpg?t=st=1769530076~exp=1769533676~hmac=7c1f988552ec2f35772e635530cd79327b7fbe0096825aeb9f949d29b993acb5&w=2000'
    }
  ];

  return (
    <div className="blog-page">
      <div className="blog-container">
        {/* Hero Section */}
        <div className="blog-detail-hero">
          <div className="blog-breadcrumb">
            <Link to="/" className="blog-link">Home</Link> / <Link to="/blog" className="blog-link">Blog</Link> / {blogPost.title}
          </div>
          
          <span className="blog-category-badge">{blogPost.category}</span>
          <h1 className="blog-title">{blogPost.title}</h1>
          
          <div className="blog-detail-meta">
            <span>By {blogPost.author}</span>
            <span>•</span>
            <span>{blogPost.date}</span>
            <span>•</span>
            <span>{blogPost.readTime}</span>
          </div>

          <img src={blogPost.image} alt={blogPost.title} className="blog-detail-image" />
        </div>

        {/* Blog Content */}
        <div className="blog-detail-content">
          <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />

          {/* Tags */}
          <div className="blog-detail-tags">
            {blogPost.tags.map(tag => (
              <span key={tag} className="blog-tag">{tag}</span>
            ))}
          </div>
        </div>

        <Link to="/blog" className="back-to-blog">← Back to Blog</Link>

        {/* Related Posts */}
        <div className="related-posts-section">
          <h2>Related Articles</h2>
          <div className="blog-grid">
            {relatedPosts.map(post => (
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;