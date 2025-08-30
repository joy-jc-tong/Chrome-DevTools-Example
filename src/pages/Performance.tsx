const Performance = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Performance 面板</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-lg text-gray-700">
          這是 Performance 面板的學習內容。在這裡您可以學習如何分析頁面效能、測量載入時間以及優化渲染效能。
        </p>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">學習重點：</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>頁面效能分析</li>
            <li>載入時間測量</li>
            <li>渲染效能優化</li>
            <li>效能瓶頸識別</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Performance;
