import Header from "./components/header";
import styles from "./styles/body.module.css";
import ProductInformation from "./components/productInformation";
import Product from "./components/product";
import RelatedProductsCard from "./components/relatedProductsCard";
import EllipseIcon from "./assets/icons/ellipseIcon";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <section>
        <div className={styles.section}>
          <span className="primaryText sectionTitle">tv collection</span>
          <span>home / product / tv collection</span>
        </div>
        <Product />
        <ProductInformation />
        <div className={styles.relatedProductsContainer}>
          <h2>Related Products</h2>
          <div className={styles.cardsWrapper}>
            <div className="card-wrapper">
              <RelatedProductsCard
                badgeText="NEW"
                badgeColor="#12A05C"
                image="relatedImage1"
                product="Sony BRAVIA XR Android Tv"
                price="$800.22"
                originalPrice="$1000.66"
                likedProduct={true}
              />
            </div>
            <div className="card-wrapper">
              <RelatedProductsCard
                badgeText="-10%"
                badgeColor="#E73C17"
                image="relatedImage2"
                product="Mi P1 Smart Android HD TV"
                price="$400.00"
              />
            </div>
            <div className="card-wrapper">
              <RelatedProductsCard
                badgeText="HOT"
                badgeColor="#FF9900"
                image="relatedImage3"
                product="Konka OLED Android Tv"
                price="$700.00"
              />
            </div>
            <div className="card-wrapper">
              <RelatedProductsCard
                badgeText="2 Years Warranty"
                badgeColor="#7F7CF6"
                image="relatedImage4"
                product="TCL Roku Android Tv"
                price="$800.00"
              />
            </div>
          </div>
          <div className={styles.ellipses}>
            <EllipseIcon color="#E73C17" />
            <EllipseIcon />
            <EllipseIcon />
            <EllipseIcon />
          </div>
        </div>
        <div className={styles.newsletterContainer}>
          <div className={styles.newsletter}>
            <h2>Join our newsletter and get offers</h2>
            <span>Sign up our newsletter</span>
          </div>
          <div className={styles.newsletterInput}>
            <input type="email" placeholder="Enter your email" />
            <button>
              <span>subscribe</span>
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
