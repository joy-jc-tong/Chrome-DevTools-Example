export default function Accessibility() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Accessibility</h1>
      <p className="text-lg text-gray-700 leading-relaxed">
        Accessibility 面板幫助您檢查和改善網頁的可存取性，確保所有用戶（包括使用輔助技術的用戶）
        都能夠順利使用您的網站。這個面板會顯示元素的 ARIA 屬性、角色、標籤等資訊，
        並指出可能存在的可存取性問題。它對於創建包容性設計、符合 WCAG 指南要求以及
        提供更好的用戶體驗非常重要。您可以即時調整這些屬性來測試其效果。
      </p>
    </div>
  );
}
