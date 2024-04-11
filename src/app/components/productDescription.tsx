import styles from "../styles/body.module.css";

import MinusIcon from "../assets/icons/minusIcon";
import PlusIcon from "../assets/icons/plusIcon";
import StarIcon from "../assets/icons/starIcon";

export default function ProductDescription() {
  return (
    <div className={styles.productDescription}>
      <div className={styles.productSpecs}>
        <div className="secondaryText">
          <span>Brand: </span>
          <span>LG</span>
        </div>
        <div className="secondaryText">
          <span>Model: </span>
          <span>OLED42C2PSA</span>
        </div>
        <div className="secondaryText">
          <span>Availability: </span>
          <span>Only 2 in Stock</span>
        </div>
      </div>
      <div className={styles.productTitle}>
        <h3>
          LG C2 42 (106cm) 4K Smart OLED <br />
          evo TV | WebOS | Cinema HDR
        </h3>
      </div>
      <div className={styles.productRating}>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon fillColor="gray" />
        <StarIcon fillColor="gray" />
      </div>
      <div className={styles.productBullets}>
        <ul>
          <li>α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling</li>
          <li>
            Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume
          </li>
          <li>Hands-free Voice Control, Always Ready</li>
          <li>
            Dolby Vision IQ with Precision Detail, Dolby Atmos, Filmmaker Mode
          </li>
          <li>Eye Comfort Display: Low-Blue Light, Flicker-Free</li>
        </ul>
      </div>
      <div className={styles.productOptions}>
        <div className={styles.optionItem}>
          <span>106 cm (42)</span>
        </div>
        <div className={styles.optionItem}>
          <span>121 cm (48)</span>
        </div>
        <div className={styles.optionItem}>
          <span>139 cm (55)</span>
        </div>
        <div className={styles.optionItem}>
          <span>164 cm (65)</span>
        </div>
        <div className={styles.optionItem}>
          <span>196 cm (77)</span>
        </div>
        <div className={styles.optionItem}>
          <span>210 cm (83)</span>
        </div>
      </div>
      <div className={styles.productPrice}>
        <div className={styles.optionsContainer}>
          <div className={styles.priceContainer}>
            <div className="secondaryText">
              <span>USD</span>
              <span>(incl. of all taxes)</span>
            </div>
            <div className={styles.amount}>
              <span>$600.72</span>
              <span>$800.00</span>
            </div>
          </div>
          <button className={styles.buyButton}>
            <span>Buy Now</span>
          </button>
        </div>
        <div className={styles.optionsContainer}>
          <div className={styles.productCount}>
            <div>
              <MinusIcon />
            </div>
            <div className="productCount">
              <span>1</span>
            </div>
            <div>
              <PlusIcon />
            </div>
          </div>
          <button className={styles.addToCartButton}>
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
