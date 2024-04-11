import FacebookIcon from "../assets/icons/facebookIcon";
import InstagramIcon from "../assets/icons/instagramIcon";
import LocationIcon from "../assets/icons/locationIcon";
import PhoneIcon from "../assets/icons/phoneIcon";
import WhatsappIcon from "../assets/icons/whatsappIcon";
import YoutubeIcon from "../assets/icons/youtubeIcon";
import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInfo}>
        <div className={styles.aboutUs}>
          <h2>About us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            aliquet lacinia nulla ut laoreet. Quisque ultricies et tortor nec
            laoreet.
          </p>
          <div className={styles.media}>
            <FacebookIcon />
            <WhatsappIcon />
            <InstagramIcon />
            <YoutubeIcon />
          </div>
        </div>
        <div className={styles.commonInfo}>
          <h2>Information</h2>
          <div className={styles.infoItems}>
            <span>About</span>
            <span>Delivery information</span>
            <span>Privacy Policy</span>
            <span>Sales</span>
            <span>Terms & Conditions </span>
            <span>EMI Payment</span>
          </div>
        </div>
        <div className={styles.commonInfo}>
          <h2>account</h2>
          <div className={styles.infoItems}>
            <span>My Account</span>
            <span>My Orders</span>
            <span>Returns</span>
            <span>Shipping</span>
            <span>Wishlist</span>
            <span>Account Details</span>
          </div>
        </div>
        <div className={styles.commonInfo}>
          <h2>store</h2>
          <div className={styles.infoItems}>
            <span>Affiliate</span>
            <span>Discounts</span>
            <span>Sale</span>
            <span>Contact</span>
            <span>All Collections</span>
          </div>
        </div>
        <div className={styles.contactUs}>
          <h2>Contact us</h2>
          <div className={styles.contactInfo}>
            <span>If you have any query, please contact us</span>
            <span className="email-details">needus24@gmail.com</span>
          </div>
          <div className={styles.commonIcon}>
            <LocationIcon />
            <span>California, USA</span>
          </div>
          <div className={styles.commonIcon}>
            <PhoneIcon />
            <span>+12012987481</span>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <span>Copyright. 2023 All Right Reserved</span>
      </div>
    </footer>
  );
}
