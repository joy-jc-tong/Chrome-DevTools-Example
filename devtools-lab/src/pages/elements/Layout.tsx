export default function Layout() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Layout Pane</h1>
      <p className="text-lg text-gray-700 leading-relaxed">
        Layout Pane 提供了頁面佈局的詳細視覺化資訊，包括元素的盒模型、定位、邊距、內邊距和邊框等屬性。
        這個面板對於理解 CSS 佈局、調試排版問題以及優化頁面設計非常有用。您可以即時調整這些數值來
        預覽效果，並且能夠清楚地看到元素之間的空間關係。這對於響應式設計和複雜佈局的調試特別有幫助。
      </p>
    </div>
  );
}
