const Screenshots = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Screenshots / Filmstrip</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-lg text-gray-700">
          這是 Screenshots 和 Filmstrip 功能的學習內容。在這裡您可以學習如何檢視頁面載入過程中的截圖序列，以及如何分析視覺載入時間。
        </p>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">學習重點：</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>頁面載入截圖序列分析</li>
            <li>Filmstrip 時間軸檢視</li>
            <li>視覺載入時間測量</li>
            <li>First Contentful Paint (FCP) 識別</li>
            <li>Largest Contentful Paint (LCP) 分析</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Screenshots;
