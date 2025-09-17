export default function Storage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Clear Storage（清乾淨環境）</h1>
        <p className="text-gray-700">
          當狀態被快取 / Storage / Service Worker 汙染時，到 Application → <b>Clear storage</b> →
          勾選要清的項目 → <b>Clear site data</b>，可一鍵清空並回到乾淨初始態。
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-2">操作步驟</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>開啟下方示範頁，先按「灌資料」。</li>
          <li>DevTools → Application → <b>Clear storage</b>，全勾 → <b>Clear site data</b>。</li>
          <li>回頁面按「檢查狀態」，驗證 Local/Session/IDB/Cache/Cookies/SW 已清。</li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold">互動練習</h2>
        <a className="px-3 py-1.5 rounded-lg bg-blue-600 text-white"
           href={`${import.meta.env.BASE_URL}fixtures/application/clear-storage.html`} target="_blank" rel="noreferrer">
          開啟示範頁（灌資料 → 一鍵清）
        </a>
        <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
          <li>勾選「Unregister service workers」一起移除 SW 控制。</li>
          <li>清除後重整，確認應用回到初始狀態。</li>
        </ul>
      </section>
    </div>
  );
}
