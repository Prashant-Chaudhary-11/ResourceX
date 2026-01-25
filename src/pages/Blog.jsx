export const Blog = () => {
    const blogs = [
        {
            tag: "Study Tips",
            title: "How Smart Notes Can Improve Your Exam Scores by 40%",
            author: "Prashant Chaudhary",
            role: "Learning Designer",
            date: "16 January, 2026",
            image: "/public/blog_1.png"
        },
        {
            tag: "AI Learning",
            title: "How AI Study Tools Are Changing the Way Students Learn",
            author: "Team YourBrand",
            role: "Product & Research",
            date: "15 January, 2026",
            image: "/public/blog_2.png"
        },
        {
            tag: "Career",
            title: "Resume Templates That Actually Get You Shortlisted",
            author: "Career Team",
            role: "Career & Placement",
            date: "10 January, 2026",
            image: "/public/blog_3.png"
        }
    ];

    return (
        <div className="blog-section">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>Go further</h1>
                <button className="primary-button">Visit the blog</button>
            </div>

            {/* Cards */}
            <div className="row">
                {blogs.map((blog, index) => (
                    <div className="col-12 col-md-4 mb-4" key={index}>
                        <div className="blog-card shadow-sm rounded-5 h-100">
                            
                            <img 
                                src={blog.image} 
                                alt={blog.title} 
                                className="w-100 rounded-top-4 mb-3 blog-image"
                            />
                            <div className="p-4">
                                <span className="blog-tag">{blog.tag}</span>

                                <h3 className="mt-3">{blog.title}</h3>

                                <div className="blog-meta mt-3">
                                    <strong>By {blog.author}</strong>
                                    <p className="mb-3">{blog.role}</p>
                                    <small>{blog.date}</small>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
