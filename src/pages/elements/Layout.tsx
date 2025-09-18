export default function Layout() {
  return (
    <div className="space-y-8">
      {/* 標題＋摘要 */}
      <header>
        <h1 className="text-2xl font-bold">Layout Pane</h1>
        <p className="text-gray-700 leading-relaxed">
          Layout Pane 可以幫你在頁面上疊加 輔助線，用來檢查 Flexbox 和 Grid 的排版。
          它會把軸線、間距、格線都標示出來，讓你一眼看清楚元素是怎麼排的。
        </p>
      </header>

      {/* 為什麼要用 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">為什麼要用？</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>元素擠在一起，對齊怪怪的 → 開 overlay 看主軸與交叉軸。</li>
          <li>Grid 的間距或 gap 不生效 → 用格線檢查位置。</li>
          <li>想一次比對多個容器 → 可以同時勾選多組 overlay 疊加。</li>
        </ul>
      </section>

      {/* 怎麼用 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">怎麼用？</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>在 Elements 面板 選一個 Flex 或 Grid 容器。</li>
          <li>右邊切到 Layout 區塊。</li>
          <li>勾選 Display: flex 或 Display: grid 的 overlay。</li>
          <li>回到頁面看輔助線，檢查對齊、間距、格線設定是否正確。</li>
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
              href={`${import.meta.env.BASE_URL}fixtures/elements/layout.html?mode=flex`}
              target="_blank" rel="noreferrer"
            >
              Flex 排版（卡片不對齊）
            </a>
            <a
              className="px-3 py-1.5 rounded-lg bg-gray-200 text-gray-900"
              href={`${import.meta.env.BASE_URL}fixtures/elements/layout.html?mode=grid`}
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
    </div>
  );
}
