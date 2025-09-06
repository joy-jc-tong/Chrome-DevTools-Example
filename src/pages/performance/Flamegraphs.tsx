const Flamegraphs = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Main / Bottom-Up / Call Tree 讀法</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-lg text-gray-700">
          這是 Flamegraphs 和 Call Tree 功能的學習內容。在這裡您可以學習如何讀取和分析火焰圖，以及如何理解 Main、Bottom-Up 和 Call Tree 三種不同的檢視模式。
        </p>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">學習重點：</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>火焰圖 (Flamegraph) 讀取技巧</li>
            <li>Main 檢視模式分析</li>
            <li>Bottom-Up 檢視模式分析</li>
            <li>Call Tree 檢視模式分析</li>
            <li>效能瓶頸識別方法</li>
            <li>函數執行時間分析</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Flamegraphs;
