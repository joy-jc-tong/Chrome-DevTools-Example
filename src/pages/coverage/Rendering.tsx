export default function RenderingTools() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Rendering（Paint flashing / FPS / Layers）</h1>
        <p className="text-gray-700">
          透過 <b>More tools → Rendering</b> 面板開啟「Paint flashing」「FPS meter」「Layers borders」，
          快速定位過度重繪與複雜分層。
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-2">操作步驟</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>開示範頁 → 在 Rendering 面板勾選 <b>Paint flashing</b> 與 <b>FPS meter</b>。</li>
          <li>切換「抖動模式」觀察哪個區域一直閃（熱區）。</li>
          <li>勾 <b>Show layer borders</b> 檢查分層是否過多。</li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold">互動練習</h2>
        <a className="px-3 py-1.5 rounded-lg bg-blue-600 text-white"
           href="/fixtures/coverage/rendering-hot.html" target="_blank" rel="noreferrer">
          開啟示範頁（重繪熱區）
        </a>
        <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
          <li>指出反覆重繪的熱區與原因（使用 `offsetTop` 造成 layout thrash 等）。</li>
          <li>把高頻操作改為 transform 置換，重測閃爍與 FPS。</li>
        </ul>
      </section>
    </div>
  );
}
