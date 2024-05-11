// pages/index.js
import ArticleCard from '../components/ArticleCard';

const Home = () => {
  const articles = [
    { id: 1, title: 'Статья 1', image: '/path/to/image1.jpg' },
    { id: 2, title: 'Статья 2', image: '/path/to/image2.jpg' },
    // Добавьте другие статьи
  ];

  return (
    <div>
      {articles.map(article => (
        <ArticleCard key={article.id} {...article} />
      ))}
    </div>
  );
};

export default Home;
