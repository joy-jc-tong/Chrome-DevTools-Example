const XhrFetch = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">XHR/Fetch Breakpoints</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-lg text-gray-700 mb-4">
          學習如何在中斷點面板中設定 XHR 和 Fetch 請求的中斷點，用於除錯網路請求相關的問題。
        </p>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">學習重點：</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>XHR 請求中斷點</li>
            <li>Fetch 請求中斷點</li>
            <li>URL 模式匹配</li>
            <li>請求參數檢查</li>
            <li>回應資料分析</li>
            <li>網路錯誤除錯</li>
          </ul>
        </div>
        <div className="mt-6 p-4 bg-green-50 rounded-lg">
          <h3 className="font-semibold text-green-800 mb-2">使用場景：</h3>
          <p className="text-green-700">
            當您需要檢查 API 請求的參數、回應資料，或是除錯網路相關的問題時，XHR/Fetch 中斷點是非常有用的工具。
          </p>
        </div>
      </div>
    </div>
  );
};

export default XhrFetch;
