const Coverage = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Coverage 面板</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-lg text-gray-700">
          這是 Coverage 面板的學習內容。在這裡您可以學習如何檢視程式碼覆蓋率、識別未使用的程式碼以及進行程式碼優化。
        </p>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">學習重點：</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>程式碼覆蓋率檢視</li>
            <li>未使用程式碼識別</li>
            <li>程式碼優化分析</li>
            <li>測試覆蓋率改善</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Coverage;
