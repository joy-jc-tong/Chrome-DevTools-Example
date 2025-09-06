const Events = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Event Listener Breakpoints</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-lg text-gray-700 mb-4">
          學習如何設定事件監聽器中斷點，用於除錯使用者互動相關的程式碼執行。
        </p>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">學習重點：</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>滑鼠事件中斷點</li>
            <li>鍵盤事件中斷點</li>
            <li>觸控事件中斷點</li>
            <li>自訂事件中斷點</li>
            <li>事件冒泡除錯</li>
            <li>事件委派分析</li>
          </ul>
        </div>
        <div className="mt-6 p-4 bg-purple-50 rounded-lg">
          <h3 className="font-semibold text-purple-800 mb-2">實用技巧：</h3>
          <p className="text-purple-700">
            當您需要了解某個使用者操作觸發了哪些事件處理器時，事件中斷點可以幫助您追蹤整個事件流程。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Events;
