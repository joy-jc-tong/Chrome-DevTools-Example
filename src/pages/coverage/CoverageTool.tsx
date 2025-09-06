const CoverageTool = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Coverage Tool</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-lg text-gray-700 mb-4">
          Coverage Tool 是 Chrome DevTools 中用於分析程式碼覆蓋率的工具。它可以幫助您識別未使用的 CSS 和 JavaScript 程式碼。
        </p>
        
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">主要功能：</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-700">
              <li>JavaScript 程式碼覆蓋率分析</li>
              <li>CSS 程式碼覆蓋率分析</li>
              <li>即時覆蓋率監控</li>
              <li>未使用程式碼識別</li>
            </ul>
          </div>

          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">使用步驟：</h3>
            <ol className="list-decimal list-inside space-y-1 text-green-700">
              <li>開啟 Chrome DevTools</li>
              <li>切換到 Coverage 面板</li>
              <li>點擊「Start instrumenting coverage」開始記錄</li>
              <li>與頁面互動以觸發程式碼執行</li>
              <li>點擊「Stop instrumenting coverage」停止記錄</li>
              <li>檢視覆蓋率報告</li>
            </ol>
          </div>

          <div className="p-4 bg-yellow-50 rounded-lg">
            <h3 className="font-semibold text-yellow-800 mb-2">覆蓋率指標：</h3>
            <ul className="list-disc list-inside space-y-1 text-yellow-700">
              <li><strong>Used Bytes:</strong> 已使用的位元組數</li>
              <li><strong>Total Bytes:</strong> 總位元組數</li>
              <li><strong>Unused Bytes:</strong> 未使用的位元組數</li>
              <li><strong>Coverage:</strong> 覆蓋率百分比</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverageTool;
