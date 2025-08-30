export default function ProfilesPage() {
  return (
    <div className="space-y-8">
      {/* 標題＋摘要 */}
      <header>
        <h1 className="text-2xl font-bold">Profiles via Console（console.profile / profileEnd）</h1>
        <p className="text-gray-700 leading-relaxed">
          除了 Performance 面板可以全域錄製，Console 也能用 <code>console.profile()</code> /
          <code>console.profileEnd()</code> 針對特定程式段落建立 CPU Profile。
          適合比較「優化前後」的執行差異，或針對單一互動操作鎖定效能熱點。
        </p>
      </header>

      {/* 功能要點 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">功能要點</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><b>console.profile('name')</b>：開始一個帶名稱的 CPU profile。</li>
          <li><b>console.profileEnd('name')</b>：結束錄製；結果會自動出現在 Performance 面板。</li>
          <li>多個 profile 可同時進行，但要用不同名稱。</li>
          <li>適合測試優化前後的演算法或渲染流程。</li>
        </ul>
      </section>

      {/* 操作步驟 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">操作步驟</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>開啟下方示範頁。</li>
          <li>點「執行 heavy work」按鈕前，先在 Console 執行 <code>console.profile('heavy')</code>。</li>
          <li>再點按鈕 → 觀察 Console 印出「heavy work done」。</li>
          <li>輸入 <code>console.profileEnd('heavy')</code>，結束錄製。</li>
          <li>切到 Performance 面板 → Profiles 標籤，即可看到剛剛的取樣結果。</li>
        </ol>
      </section>

      {/* 互動練習 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">互動練習</h2>
        <div className="rounded-xl border p-4 bg-gray-50">
          <p className="text-gray-700 mb-3">使用下方示範頁（新分頁開啟）：</p>
          <a
            className="px-3 py-1.5 rounded-lg bg-blue-600 text-white"
            href="/fixtures/console/profiles.html"
            target="_blank" rel="noreferrer"
          >
            開啟示範頁（heavy work 測試）
          </a>

          <ul className="list-decimal list-inside text-gray-700 mt-3 space-y-1">
            <li>在 Console 輸入 <code>console.profile('heavy')</code>。</li>
            <li>點「執行 heavy work」→ 等待完成。</li>
            <li>輸入 <code>console.profileEnd('heavy')</code>，然後去 Performance 面板檢查 CPU 熱點。</li>
            <li>修改程式（例如調小迴圈次數），再跑一次對照差異。</li>
          </ul>
        </div>
      </section>

      {/* 小技巧 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">使用小技巧</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>搭配程式中的條件，例如只在 debug 模式時執行 <code>console.profile()</code>。</li>
          <li>可命名多個 profile，分別觀察不同函式的效能。</li>
          <li>Profile 結果會保存在 DevTools session 中，可在 Performance → Profiles tab 回放。</li>
        </ul>
      </section>
    </div>
  );
}
