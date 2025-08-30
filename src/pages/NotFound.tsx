import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="max-w-4xl text-center">
      <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">頁面未找到</h2>
      <p className="text-lg text-gray-600 mb-8">
        抱歉，您要尋找的頁面不存在。請檢查網址是否正確，或返回首頁繼續瀏覽。
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
      >
        返回首頁
      </Link>
    </div>
  );
};

export default NotFound;
