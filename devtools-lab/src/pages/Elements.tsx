const Elements = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Elements 面板</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-lg text-gray-700">
          這是 Elements 面板的學習內容。在這裡您可以學習如何檢視與調整 DOM 結構、CSS 樣式、排版佈局以及可存取性資訊。
        </p>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">學習重點：</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>DOM 樹狀結構檢視</li>
            <li>CSS 樣式即時編輯</li>
            <li>排版與佈局調整</li>
            <li>可存取性檢查</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Elements;
