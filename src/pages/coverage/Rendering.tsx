const Rendering = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Rendering</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-lg text-gray-700 mb-4">
          Rendering 面板提供各種渲染相關的除錯工具，幫助您分析頁面的渲染效能和視覺效果。
        </p>
        
        <div className="space-y-4">
          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="font-semibold text-purple-800 mb-2">渲染除錯工具：</h3>
            <ul className="list-disc list-inside space-y-1 text-purple-700">
              <li><strong>Paint flashing:</strong> 高亮顯示重繪區域</li>
              <li><strong>Layout Shift Regions:</strong> 顯示佈局偏移區域</li>
              <li><strong>Layer borders:</strong> 顯示圖層邊界</li>
              <li><strong>Frame Rendering Stats:</strong> 幀渲染統計</li>
            </ul>
          </div>

          <div className="p-4 bg-indigo-50 rounded-lg">
            <h3 className="font-semibold text-indigo-800 mb-2">效能分析：</h3>
            <ul className="list-disc list-inside space-y-1 text-indigo-700">
              <li>重繪區域識別</li>
              <li>佈局偏移檢測</li>
              <li>圖層合成分析</li>
              <li>渲染阻塞識別</li>
            </ul>
          </div>

          <div className="p-4 bg-pink-50 rounded-lg">
            <h3 className="font-semibold text-pink-800 mb-2">最佳化建議：</h3>
            <ul className="list-disc list-inside space-y-1 text-pink-700">
              <li>減少不必要的重繪</li>
              <li>優化 CSS 動畫效能</li>
              <li>使用 GPU 加速</li>
              <li>避免佈局偏移</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rendering;
