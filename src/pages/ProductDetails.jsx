import { Link, useParams } from "react-router-dom";
import { products } from "./products";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <main className="product-page">
        <div className="product-container" style={{ padding: "60px 0" }}>
          <h2>Not found</h2>
          <p>This item does not exist.</p>
          <Link className="back-link" to="/product">← Back to Products</Link>
        </div>
      </main>
    );
  }

  const isFree = product.price === 0;

  return (
    <main className="product-page">
      <section className="product-hero">
        <div className="product-container">
          <div className="product-breadcrumb">
            <Link to="/" className="product-link">Home</Link> /{" "}
            <Link to="/product" className="product-link">Products</Link> / {product.title}
          </div>

          <div className="details-grid">
            <div className="details-left">
              <div className="details-top">
                <span className="type-chip me-3">{product.type}</span>
                <span className="price-chip">{isFree ? "Free" : `₹${product.price}`}</span>
              </div>

              <h1 className="details-title">{product.title}</h1>
              <p className="details-desc">{product.description}</p>

              <div className="details-meta">
                <span className="d-flex align-items-center gap-2"><img width="20" height="20" src="https://img.icons8.com/pulsar-line/48/downloading-updates.png" alt="downloading-updates" /> {product.downloads} <span className="">Downloads</span></span>
                <span className="d-flex align-items-center gap-2"><img width="20" height="20" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1" /> {product.rating}</span>
              </div>

              <div className="details-tags">
                <span className={`tag ${product.difficulty.toLowerCase() === 'beginner' ? 'bg-success-subtle' : product.difficulty.toLowerCase() === 'intermediate' ? 'bg-warning-subtle' : 'bg-danger-subtle'}`}>{product.difficulty}</span>
                {product.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>

              <div className="details-actions mb-3">
                <button className="primary-action">
                  {isFree ? "Download" : "Buy Now"}
                </button>
                <button className="secondary-action">Preview</button>
              </div>
            </div>

            <div className="details-right d-flex w-100 gap-2">
              <div className="details-card w-100">
                <h3>Preview</h3>
                <ul className="p-2">
                  {product.preview?.map((x) => (
                    <li className="d-flex gap-2 align-items-center" key={x}><img width="20" height="20" src="https://img.icons8.com/ios-filled/50/checked-2--v1.png" alt="checked-2--v1"/> {x}</li>
                  ))}
                </ul>
              </div>

              <div className="details-card w-100">
                <h3>What’s inside</h3>
                <ul className="p-2">
                  {product.whatsInside?.map((x) => (
                    <li className="d-flex gap-2 align-items-center" key={x}><img width="20" height="20" src="https://img.icons8.com/ios-filled/50/checked-2--v1.png" alt="checked-2--v1"/> {x}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        <Link className="back-link d-flex align-items-center gap-2 mb-3" to="/product"><img width="20" height="20" src="https://img.icons8.com/ios/50/left--v1.png" alt="left--v1"/> Back to Products</Link>
        <iframe className="product-iframe" src={product.pdf} frameborder="0"></iframe>
        </div>
      </section>
    </main>
  );
}
