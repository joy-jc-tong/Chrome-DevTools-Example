const Profiles = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Profiles</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-lg text-gray-700 mb-4">
          Profiles 功能允許您創建和管理 JavaScript 效能分析檔案，透過 console.profile() 和 console.profileEnd() 來分析程式碼的執行效能。
        </p>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">效能分析功能：</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>JavaScript 執行時間分析</li>
            <li>函數調用堆疊追蹤</li>
            <li>記憶體使用量監控</li>
            <li>效能瓶頸識別</li>
            <li>分析報告匯出與分享</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
