import styles from "../styles/header.module.css";
import Dropdown from "./dropdown";
import HeaderContent from "./headerContent";
import ArrowIcon from "../assets/icons/arrowIcon";
import BurgerIcon from "../assets/icons/burgerIcon";
import ContactIcon from "../assets/icons/contactIcon";

export default function Header() {
  const nav = [
    { name: "home" },
    { name: "about" },
    { name: "product" },
    { name: "pages" },
    { name: "contact" },
  ];
  return (
    <header className={styles.header}>
      <div className={styles.firstContent}>
        <div className={styles.descriptionWrapper}>
          <h3 className="secondaryText">
            Welcome to Needus & Get the best product
          </h3>
        </div>
        <div className={styles.languageWrapper}>
          <span className="secondaryText">ENG</span>
          <ArrowIcon />
          <span className="secondaryText">|</span>
          <span className="secondaryText">USD</span>
          <ArrowIcon />
        </div>
      </div>
      <HeaderContent />
      <div className={styles.navigationWrapper}>
        <div className={styles.dropdownContainer}>
          <BurgerIcon />
          <Dropdown />
        </div>
        <div className={styles.navBar}>
          <ul className={styles.navigation}>
            {nav.map((el) => {
              return (
                <div className={styles.items} key={el.name}>
                  <li>{el.name}</li>
                  <ArrowIcon />
                </div>
              );
            })}
          </ul>
        </div>
        <div className={styles.contactInfo}>
          <ContactIcon />
          <div>
            <span>contact us 24/7 </span>
            <span>+12012987481</span>
          </div>
        </div>
      </div>
    </header>
  );
}
