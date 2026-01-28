import { Link } from "react-router-dom";
import Blog_1 from "/blog_1.png";
import Blog_2 from "/blog_2.png";
import Blog_3 from "/blog_3.png";

export const Blog = () => {
    const blogs = [
        {
            tag: "Study Tips",
            title: "How Smart Notes Can Improve Your Exam Scores by 40%",
            author: "Prashant Chaudhary",
            role: "Learning Designer",
            date: "16 January, 2026",
            image: Blog_1
        },
        {
            tag: "AI Learning",
            title: "How AI Study Tools Are Changing the Way Students Learn",
            author: "Team YourBrand",
            role: "Product & Research",
            date: "15 January, 2026",
            image: Blog_2
        },
        {
            tag: "Career",
            title: "Resume Templates That Actually Get You Shortlisted",
            author: "Career Team",
            role: "Career & Placement",
            date: "10 January, 2026",
            image: Blog_3
        },
        {
            tag: "Productivity",
            title: "Top 10 Templates to Boost Your Productivity in 2026",
            author: "Product Team",
            role: "Product & Research",
            date: "10 January, 2026",
            image: Blog_1
        },
    ];

    return (
        <div className="blog-section blog-section-container">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>Go further</h1>
                <button className="primary-button"><Link to="/blog">Visit the blog</Link></button>
            </div>

            {/* Cards */}
            <div className="row">
                {blogs.map((blog, index) => (
                    <div className="col-6 blog-col-card col-md-3 mb-4" key={index}
                    >
                        <Link to="/blog">
                            <div className="blog-card shadow-sm rounded-5 h-100">
                                
                                <img 
                                    src={blog.image} 
                                    alt={blog.title} 
                                    className="w-100 rounded-top-4 mb-3 blog-image"
                                />
                                <div className="blog-content">
                                    <span className="blog-tag">{blog.tag}</span>

                                    <h3 className="mt-3 blog-heading">{blog.title}</h3>

                                    <div className="blog-meta mt-3">
                                        <strong className="blog-author">By {blog.author}</strong>
                                        <p className="mb-3 blog-role">{blog.role}</p>
                                        <small className="blog-date">{blog.date}</small>
                                    </div>
                                </div>

                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};
