export default function Changes() {
  return (
    <div className="space-y-8">
      {/* 標題＋摘要 */}
      <header>
        <h1 className="text-2xl font-bold">Changes Pane</h1>
        <p className="text-gray-700 leading-relaxed">
          Changes Pane 會記錄你在 DevTools 裡做的修改，像改了樣式、屬性或直接在 Sources 編輯檔案。
          它會用差異（diff）方式顯示，方便你回顧或複製回專案。
        </p>
      </header>

      {/* 為什麼要用 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">為什麼要用？</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>臨時調整 UI 樣式後 → 想把改動複製回專案。</li>
          <li>快速 Demo → 看哪些地方被動過手。</li>
          <li>同一個檔案改了好幾處 → 一次比對所有修改。</li>
        </ul>
      </section>

      {/* 怎麼用 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">怎麼用？</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>在頁面上做修改（例如改 CSS 樣式或元素屬性）。</li>
          <li>開啟 More tools → Changes。</li>
          <li>面板會顯示檔案的新增/刪除行差異。</li>
          <li>點檔名可看詳細內容，也能複製 patch 貼回專案。</li>
        </ol>
      </section>

      {/* 互動練習 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">互動練習</h2>
        <div className="rounded-xl border p-4 bg-gray-50">
          <p className="text-gray-700 mb-3">開啟示範頁（新分頁）：</p>
          <div className="flex flex-wrap gap-2">
            <a
              className="px-3 py-1.5 rounded-lg bg-blue-600 text-white"
              href={`${import.meta.env.BASE_URL}fixtures/elements/changes.html`}
              target="_blank" rel="noreferrer"
            >
              開啟示範頁
            </a>
          </div>

          <div className="mt-3">
            <p className="font-medium mb-1">請在 DevTools 內完成以下三組修改（至少三處）：</p>
            <ol className="list-decimal list-inside text-gray-700 space-y-1">
              <li>
                <b>Styles 調整：</b>把 <code>.cta</code> 的按鈕改成更醒目的主色與更大 padding（例如
                <code>background</code>、<code>padding</code>、<code>border-radius</code>）。
              </li>
              <li>
                <b>文案/屬性：</b>把「微弱提示」那段的文字色調深（修正低對比）
                ，並替 CTA 加上 <code>aria-label</code> 或 <code>title</code>。
              </li>
              <li>
                <b>小型 Refactor：</b>在內嵌 <code>&lt;style&gt;</code> 中直接新增一條 <code>.cta:hover</code> 規則，
                或移除無用的 <code>.unused-rule</code>。
              </li>
            </ol>
            <p className="text-gray-700 mt-2">
              完成後，打開 <b>More tools → Changes</b> 檢視 diff；嘗試複製 patch。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
