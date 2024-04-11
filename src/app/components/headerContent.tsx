import BurgerIcon from "../assets/icons/burgerIcon";
import CartIcon from "../assets/icons/cartIcon";
import HeartIcon from "../assets/icons/heartIcon";
import SearchIcon from "../assets/icons/searchIcon";
import UserIcon from "../assets/icons/userIcon";
import styles from "../styles/header.module.css";
import Dropdown from "./dropdown";

export default function HeaderContent() {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.headerContent}>
        <div className={styles.burgerWrapper}>
          <BurgerIcon />
        </div>
        <h1 className="primaryText title">Needus </h1>
        <div className={styles.inputWrapper}>
          <div className={styles.inputContainer}>
            <input type="text" placeholder="Search Products" />
            <button>
              <SearchIcon />
            </button>
          </div>
          <div className={styles.dropdownWrapper}>
            <Dropdown arrowColor="black" />
            <div className={styles.loginContainer}>
              <a>Login</a>
              <span>|</span>
              <a>Signup</a>
            </div>
          </div>
        </div>
        <div className={styles.logoWrapper}>
          <div className={styles.mobileIcons}>
            <SearchIcon color="black" />
            <UserIcon />
          </div>
          <HeartIcon />
          <div className="cart">
            <CartIcon />
            <div className="badge">
              <span>3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
