const WebSocket = () => {
  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">WebSocket / Events 檢視器</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-lg text-gray-700">
          這是 WebSocket / Events 檢視器頁面的學習內容。在這裡您可以學習如何監控 WebSocket 連線，檢視即時事件訊息，以及除錯雙向通訊問題。
        </p>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">學習重點：</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>WebSocket 連線監控</li>
            <li>即時事件訊息檢視</li>
            <li>雙向通訊除錯</li>
            <li>連線狀態管理</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WebSocket;
