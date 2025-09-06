const Cls = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Web Vitals Lane & Layout Shift Regions</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-lg text-gray-700">
          這是 Cumulative Layout Shift (CLS) 和 Layout Shift Regions 功能的學習內容。在這裡您可以學習如何識別和分析頁面載入過程中的佈局偏移問題。
        </p>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">學習重點：</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>Cumulative Layout Shift (CLS) 測量</li>
            <li>Layout Shift Regions 識別</li>
            <li>Web Vitals Lane 分析</li>
            <li>佈局偏移原因診斷</li>
            <li>CLS 優化策略</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cls;
