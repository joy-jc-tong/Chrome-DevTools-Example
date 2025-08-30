export default function Layout() {
  return (
    <div className="space-y-8">
      {/* 標題＋摘要 */}
      <header>
        <h1 className="text-2xl font-bold">Layout Pane（Flex / Grid Overlay）</h1>
        <p className="text-gray-700 leading-relaxed">
          Layout 面板提供 Flex 與 Grid 的可視化 overlay，可以在頁面上疊加輔助線，快速檢查軸線方向、
          對齊方式與間距。當排版出現子項目擠壓、對齊錯亂或 gap 無效等情況時，這個功能能幫助定位問題。
        </p>
      </header>

      {/* 功能要點 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">功能要點</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Flexbox overlay：顯示主軸、交叉軸、對齊方式。</li>
          <li>Grid overlay：顯示行列線、間距與命名區塊。</li>
          <li>可同時勾選多個容器，疊加多組輔助線。</li>
        </ul>
      </section>

      {/* 操作步驟 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">操作步驟</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>在 Elements 面板選取一個 Flex 或 Grid 容器。</li>
          <li>切換到右側的 <b>Layout</b> 區塊。</li>
          <li>勾選 <b>Display:flex</b> 或 <b>Display:grid</b> 對應的 overlay。</li>
          <li>觀察頁面上的輔助線與標示，檢查對齊與間距設定。</li>
        </ol>
      </section>

      {/* 互動練習 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">互動練習</h2>
        <div className="rounded-xl border p-4 bg-gray-50">
          <p className="text-gray-700 mb-3">使用下方示範頁（新分頁開啟）：</p>
          <div className="flex flex-wrap gap-2">
            <a
              className="px-3 py-1.5 rounded-lg bg-blue-600 text-white"
              href="/fixtures/elements/layout.html?mode=flex"
              target="_blank" rel="noreferrer"
            >
              Flex 排版（卡片不對齊）
            </a>
            <a
              className="px-3 py-1.5 rounded-lg bg-gray-200 text-gray-900"
              href="/fixtures/elements/layout.html?mode=grid"
              target="_blank" rel="noreferrer"
            >
              Grid 排版（間距問題）
            </a>
          </div>

          <ul className="list-decimal list-inside text-gray-700 mt-3 space-y-1">
            <li>在 Flex 模式下，勾選 overlay，找出是 <code>align-items</code> 還是 gap 設定錯誤。</li>
            <li>在 Grid 模式下，檢查欄寬與行間距是否正確，找出不規則對齊的原因。</li>
          </ul>
        </div>
      </section>

      {/* 小技巧 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">使用小技巧</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>搭配 <b>Computed</b> 檢查實際計算出的 gap 與 align 屬性。</li>
          <li>Overlay 顏色可自訂，避免與背景混淆。</li>
          <li>多個 overlay 疊加時，記得關閉不需要的容器以免干擾。</li>
        </ul>
      </section>
    </div>
  );
}
