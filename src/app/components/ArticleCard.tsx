// components/ArticleCard.tsx
import Link from 'next/link';
import styles from './ArticleCard.module.css'; // Импорт стилей

const ArticleCard = ({ id, title, image }) => {
  return (
    <Link href={`/article/${id}`}>
      <a className={styles.card}>
        <img src={image} alt={title} className={styles.image} />
        <h2 className={styles.title}>{title}</h2>
      </a>
    </Link>
  );
};

export default ArticleCard;
