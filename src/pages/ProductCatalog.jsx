import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ShinyText from "./ShinyText";
import { products, CATEGORIES, DIFFICULTY } from "./products";

const SORTS = [
    { value: "popular", label: "Most Popular" },
    { value: "rating", label: "Highest Rated" },
    { value: "downloads", label: "Most Downloads" },
    { value: "priceLow", label: "Price: Low to High" },
    { value: "priceHigh", label: "Price: High to Low" },
];

export default function ProductCatalog({ defaultType = "All", pageTitle = "Products" }) {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [difficulty, setDifficulty] = useState("All");
    const [type, setType] = useState(defaultType);
    const [sort, setSort] = useState("popular");

    const featuredCollections = useMemo(() => {
        return products.filter((p) => p.type === "Collections" && p.featured);
    }, []);

    const filtered = useMemo(() => {
        let list = [...products];

        if (type !== "All") list = list.filter((p) => p.type === type);
        if (category !== "All") list = list.filter((p) => p.category === category);
        if (difficulty !== "All") list = list.filter((p) => p.difficulty === difficulty);

        const q = search.trim().toLowerCase();
        if (q) {
            list = list.filter((p) => {
                const hay = `${p.title} ${p.description} ${p.tags.join(" ")} ${p.category} ${p.type}`.toLowerCase();
                return hay.includes(q);
            });
        }

        // sorting
        list.sort((a, b) => {
            if (sort === "rating") return b.rating - a.rating;
            if (sort === "downloads") return b.downloads - a.downloads;
            if (sort === "priceLow") return (a.price ?? 0) - (b.price ?? 0);
            if (sort === "priceHigh") return (b.price ?? 0) - (a.price ?? 0);
            // popular default -> downloads weighted
            return b.downloads - a.downloads;
        });

        return list;
    }, [search, category, difficulty, type, sort]);

    return (
        <main className="product-page">
            {/* Header */}
            <section className="product-hero">
                <section className="faq-hero">
                    <div className="faq-hero-inner">
                        <div className="text-center">
                            <Link to="/" className="about-link">Home</Link> / {pageTitle}
                        </div>
                        <h1 className="main-heading about-heading-main text-center w-75 m-auto my-5">
                            <ShinyText
                                text={pageTitle}
                                speed={3.5}
                                delay={0}
                                color="#072929"
                                shineColor="#ffffff"
                                spread={120}
                                direction="left"
                                yoyo={false}
                                pauseOnHover={false}
                                disabled={false}
                            />
                        </h1>
                        <p>Browse notes, cheat sheets, collections and templates. Use filters to find what you need fast.</p>
                        <div className="filter-search w-75 me-3 d-none upper-search-product">
                            <img
                                width="20"
                                height="20"
                                src="https://img.icons8.com/ios/50/search--v1.png"
                                alt="search"
                            />
                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search resources..."
                            />
                        </div>
                    </div>
                </section>
                <div className="product-container">

                    {/* Filter Bar */}
                    <div className="filter-bar d-flex align-items-center justify-content-between">
                        <div className="filter-search w-75 me-3 lower-search-product">
                            <img
                                width="20"
                                height="20"
                                src="https://img.icons8.com/ios/50/search--v1.png"
                                alt="search"
                            />
                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search resources..."
                            />
                        </div>

                        <div className="d-flex select-column w-100">
                            <div className="d-flex w-100">
                                <select className="w-100 me-3 product-select" value={category} onChange={(e) => setCategory(e.target.value)}>
                                    {CATEGORIES.map((c) => (
                                        <option key={c} value={c}>{c}</option>
                                    ))}
                                </select>

                                <select className="w-100 me-3 product-select" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                                    {DIFFICULTY.map((d) => (
                                        <option key={d} value={d}>{d}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="d-flex w-100">
                                <select className="w-100 me-3 product-select" value={type} onChange={(e) => setType(e.target.value)}>
                                    <option value="All">All Types</option>
                                    <option value="Study Notes">Study Notes</option>
                                    <option value="Cheat Sheets">Cheat Sheets</option>
                                    <option value="Collections">Collections</option>
                                    <option value="Templates">Templates</option>
                                </select>

                                <select className="w-100 product-select" value={sort} onChange={(e) => setSort(e.target.value)}>
                                    {SORTS.map((s) => (
                                        <option key={s.value} value={s.value}>{s.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Bundles */}
            {featuredCollections.length > 0 && (
                <section className="product-section">
                    <div className="product-container">
                        <div className="section-head">
                            <h2>Featured Bundles</h2>
                            <p>Collections designed as learning paths — easiest way to finish a topic.</p>
                        </div>

                        <div className="featured-row">
                            {featuredCollections.map((p) => (
                                <Link key={p.id} to={`/product/${p.id}`} className="featured-card">
                                    <div className="featured-top">
                                        <span className="pill">Collection</span>
                                        <span className="featured-price">{p.price === 0 ? "Free" : `₹${p.price}`}</span>
                                    </div>
                                    <div className="featured-title">{p.title}</div>
                                    <div className="featured-desc">{p.description}</div>
                                    <div className="featured-meta d-flex justify-content-between align-items-center mt-3">
                                        <span className="d-flex align-items-center gap-2"><img width="20" height="20" src="https://img.icons8.com/pulsar-line/48/downloading-updates.png" alt="downloading-updates" /> {p.downloads} <span className="download-text">Downloads</span></span>
                                        <span className="d-flex align-items-center gap-2"><img width="20" height="20" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1" /> {p.rating}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Grid */}
            <section className="product-section">
                <div className="product-container">
                    <div className="section-head row-head">
                        <h2>All Items</h2>
                        <div className="count">{filtered.length} results</div>
                    </div>

                    <div className="product-grid">
                        {filtered.map((p) => (
                            <Link key={p.id} to={`/product/${p.id}`} className="product-card">
                                <div className="card-top">
                                    <div>
                                        <span className="type-chip me-2">{p.type}</span>
                                    </div>
                                    <span className="price-chip">{p.price === 0 ? "Free" : `₹${p.price}`}</span>
                                </div>

                                <h3 className="card-title">{p.title}</h3>
                                <p className="card-desc">{p.description}</p>

                                <div className="tag-row">
                                    <span className={`tag ${p.difficulty.toLowerCase() === 'beginner' ? 'bg-success-subtle' : p.difficulty.toLowerCase() === 'intermediate' ? 'bg-warning-subtle' : 'bg-danger-subtle'}`}>{p.difficulty}</span>
                                    {p.tags.slice(0, 4).map((t) => (
                                        <span key={t} className="tag">{t}</span>
                                    ))}
                                </div>

                                <div className="card-bottom d-flex justify-content-between align-items-center mt-3">
                                    <span className="d-flex align-items-center gap-2 meta"><img width="20" height="20" src="https://img.icons8.com/pulsar-line/48/downloading-updates.png" alt="downloading-updates" /> {p.downloads} <span className="download-text">Downloads</span></span>
                                    <span className="d-flex align-items-center gap-2 meta"><img width="20" height="20" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1" /> {p.rating}</span>
                                </div>
                            </Link>
                        ))}

                        {filtered.length === 0 && (
                            <div className="empty-state">
                                <h3>No results</h3>
                                <p>Try changing filters or search keywords.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}
