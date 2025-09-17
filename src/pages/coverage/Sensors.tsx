export default function SensorsPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Sensors（地理、方向、時區、裝置尺寸）</h1>
        <p className="text-gray-700">
          於 <b>More tools → Sensors</b> 模擬地理位置、裝置方向與時區，也能套用各種行動裝置尺寸。
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-2">操作步驟</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>開示範頁 → Sensors 面板設定位置（例如 Tokyo）與時區。</li>
          <li>點「取得定位」與「顯示當地時間」驗證數值。</li>
          <li>切換裝置尺寸與方向，觀察 layout 反應。</li>
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
