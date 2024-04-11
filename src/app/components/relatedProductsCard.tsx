"use client";
import CartIcon from "../assets/icons/cartIcon";
import styles from "../styles/body.module.css";
import Image from "../../../node_modules/next/image";
import HeartIcon from "../assets/icons/heartIcon";
import styled from "styled-components";

export type CardProps = {
  badgeText: string;
  badgeColor: string;
  product: string;
  image: string;
  price: string;
  originalPrice?: string;
  likedProduct?: boolean;
};
type Props ={
  badgeColor: string
}
const BadgeWrapper = styled.div<Props>`
    background-color: ${(props) => props.badgeColor};
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10rem;
    min-width: 65px;
    padding: 0 0.5rem;
    height: 26px;
    & span {
      color: #fff;
      font-size: 12px;
      font-weight: 500;
    }
  `;

export default function RelatedProductsCard(props: CardProps) {
  const {
    likedProduct,
    image,
    badgeColor,
    badgeText,
    product,
    price,
    originalPrice,
  } = props;
  const heartBorderColor = likedProduct ? "#E73C17" : undefined;
  const heartColor = likedProduct ? "#E73C17" : undefined;
  
  return (
    <div className={styles.relatedProductsCard}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <BadgeWrapper badgeColor={badgeColor}>
            <span>{badgeText}</span>
          </BadgeWrapper>
          <div className={styles.heartContainer}>
            <HeartIcon borderColor={heartBorderColor} color={heartColor} />
          </div>
        </div>
        <div className={styles.cardImageWrapper}>
          <Image
            src={`/images/${image}.png`}
            width={257}
            height={257}
            style={{objectFit: "contain"}}
            alt={`${image}`}
          />
        </div>
        <div className={styles.cardButtonWrapper}>
          <button className={styles.cardButton}>
            <CartIcon />
            <span>Add to cart</span>
          </button>
        </div>
      </div>
      <div className={styles.cardInformation}>
        <span>{product}</span>
        <div className={styles.cardPrice}>
          <span>{price}</span>
          {originalPrice && (
            <span className="originalPrice">{originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
}
