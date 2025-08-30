const Monitor = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Monitor</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-lg text-gray-700 mb-4">
          Monitor 功能提供強大的監控能力，可以追蹤函數調用、事件觸發和物件變化，幫助開發者深入了解應用程式的執行流程。
        </p>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">監控功能：</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>函數調用追蹤與參數記錄</li>
            <li>DOM 事件監控與觸發統計</li>
            <li>物件屬性變化追蹤</li>
            <li>效能計時與統計分析</li>
            <li>自定義監控規則設定</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Monitor;
