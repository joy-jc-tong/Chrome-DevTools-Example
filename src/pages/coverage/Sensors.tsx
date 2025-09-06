const Sensors = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Sensors</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-lg text-gray-700 mb-4">
          Sensors 面板允許您模擬各種設備感應器，包括地理位置、加速度計、陀螺儀等，用於測試響應式設計和感應器相關功能。
        </p>
        
        <div className="space-y-4">
          <div className="p-4 bg-teal-50 rounded-lg">
            <h3 className="font-semibold text-teal-800 mb-2">可模擬的感應器：</h3>
            <ul className="list-disc list-inside space-y-1 text-teal-700">
              <li><strong>Location:</strong> GPS 地理位置</li>
              <li><strong>Accelerometer:</strong> 加速度計</li>
              <li><strong>Gyroscope:</strong> 陀螺儀</li>
              <li><strong>Orientation:</strong> 設備方向</li>
            </ul>
          </div>

          <div className="p-4 bg-cyan-50 rounded-lg">
            <h3 className="font-semibold text-cyan-800 mb-2">測試場景：</h3>
            <ul className="list-disc list-inside space-y-1 text-cyan-700">
              <li>地理位置相關應用測試</li>
              <li>移動設備手勢測試</li>
              <li>響應式設計驗證</li>
              <li>感應器 API 除錯</li>
            </ul>
          </div>

          <div className="p-4 bg-emerald-50 rounded-lg">
            <h3 className="font-semibold text-emerald-800 mb-2">使用方式：</h3>
            <ol className="list-decimal list-inside space-y-1 text-emerald-700">
              <li>開啟 Chrome DevTools</li>
              <li>按 Ctrl+Shift+P 開啟命令面板</li>
              <li>搜尋「Sensors」並選擇</li>
              <li>設定感應器參數</li>
              <li>測試應用程式行為</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sensors;
