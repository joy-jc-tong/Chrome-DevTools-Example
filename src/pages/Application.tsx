const Application = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Application 面板</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-lg text-gray-700">
          這是 Application 面板的學習內容。在這裡您可以學習如何管理儲存空間、快取設定以及服務工作者配置。
        </p>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">學習重點：</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>儲存空間管理</li>
            <li>快取設定與管理</li>
            <li>服務工作者配置</li>
            <li>應用程式狀態檢查</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Application;
