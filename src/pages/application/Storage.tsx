export default function Storage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Clear Storage（清乾淨環境）</h1>
        <p className="text-gray-700">
          Clear Storage 可以一鍵清掉網站的所有狀態，包括 LocalStorage、SessionStorage、IndexedDB、Cache、Cookies 和 Service Worker。
          用它就能讓網頁回到「剛開啟時的乾淨狀態」。
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-2">為什麼要用？</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>測試時，網站被快取或舊資料影響，結果不準。</li>
          <li>想確認程式在「第一次載入」時的表現。</li>
          <li>想清掉 Service Worker 或離線快取，模擬全新使用者環境。</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">怎麼用？</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>打開 Application 面板 → Clear storage。</li>
          <li>勾選要清的項目（建議全勾）。</li>
          <li>點 Clear site data，網站的狀態會被清空。</li>
          <li>回到頁面操作，驗證所有 Storage / Cache / Cookies / SW 都已經被清除。</li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">互動練習</h2>
        <div className="rounded-xl border p-4 bg-gray-50">
          <a className="px-3 py-1.5 rounded-lg bg-blue-600 text-white"
             href={`${import.meta.env.BASE_URL}fixtures/application/clear-storage.html`} target="_blank" rel="noreferrer">
            開啟示範頁（灌資料 → 一鍵清）
          </a>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
            <li>勾選「Unregister service workers」一起移除 SW 控制。</li>
            <li>清除後重整，確認應用回到初始狀態。</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
