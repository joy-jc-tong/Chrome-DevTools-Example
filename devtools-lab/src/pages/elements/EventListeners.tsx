export default function EventListeners() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Event Listeners</h1>
      <p className="text-lg text-gray-700 leading-relaxed">
        Event Listeners 面板讓您能夠檢視和管理附加到特定 DOM 元素上的事件監聽器。您可以查看所有已註冊的事件處理器，
        包括點擊、滑鼠移動、鍵盤輸入等各種事件類型。這個功能對於理解頁面互動行為、
        調試事件處理邏輯以及識別可能的事件記憶體洩漏非常有用。您還可以移除不需要的事件監聽器或
        在事件觸發時設置中斷點進行調試。
      </p>
    </div>
  );
}
