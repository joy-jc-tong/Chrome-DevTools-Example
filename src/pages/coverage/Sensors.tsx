export default function SensorsPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Sensors（地理、方向、時區、裝置尺寸）</h1>
        <p className="text-gray-700">
          Sensors 面板可以模擬 地理位置、裝置方向、時區，還能切換不同的行動裝置尺寸。
          用它可以測試網站在不同環境下的行為。
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-2">為什麼要用？</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>想驗證網站在不同地點會回傳什麼數據（例如 Tokyo vs New York）。</li>
          <li>想檢查網站的時間顯示是否會隨時區正確改變。</li>
          <li>想測試 RWD 在不同螢幕尺寸與方向下的排版效果。</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">怎麼用？</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>打開 More tools → Sensors。</li>
          <li>設定地理位置（例：Tokyo）與時區。</li>
          <li>在頁面上觸發操作（例：取得定位、顯示當地時間），確認數值是否正確。</li>
          <li>切換裝置尺寸與方向，觀察版面是否正常響應。</li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">互動練習</h2>
        <div className="rounded-xl border p-4 bg-gray-50">
          <a className="px-3 py-1.5 rounded-lg bg-blue-600 text-white"
             href={`${import.meta.env.BASE_URL}fixtures/coverage/sensors.html`} target="_blank" rel="noreferrer">
            開啟示範頁（定位 / 時區 / 尺寸）
          </a>
        </div>
      </section>
    </div>
  );
}
