import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';

// Определение типов для пропсов страницы
interface Article {
  title: string;
  image: string;
  content: string;
}

interface ArticlePageProps {
  article: Article;
}

const ArticlePage: NextPage<ArticlePageProps> = ({ article }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>; // Отображение загрузки, если данные еще не получены
  }

  return (
    <article>
      <h1>{article.title}</h1>
      <img src={article.image} alt={article.title} />
      <p>{article.content}</p>
    </article>
  );
};

// Используем getServerSideProps для получения данных статьи с сервера
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  // Здесь должен быть запрос к API для получения данных статьи по ID
  // Для примера используем заглушку
  const article: Article = {
    title: "Название статьи",
    image: "/path/to/image.jpg",
    content: "Содержимое статьи..."
  };

  return { props: { article } };
};

export default ArticlePage;
