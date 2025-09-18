export default function RenderingTools() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Rendering（Paint flashing / FPS / Layers）</h1>
        <p className="text-gray-700">
          Rendering 面板提供一些可視化工具，幫助檢查網頁繪製效能。
          像 Paint flashing 會高亮重繪區域，FPS meter 會顯示幀率，Layers borders 會標出分層邊界。
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-2">為什麼要用？</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>想找出頁面哪裡在不停重繪（可能造成卡頓）。</li>
          <li>想觀察頁面幀率（FPS），檢查是否順暢。</li>
          <li>想確認分層是否過多，避免 GPU 壓力過大。</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">怎麼用？</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>打開 More tools → Rendering 面板。</li>
          <li>勾選 Paint flashing 與 FPS meter，觀察重繪區域與幀率變化。</li>
          <li>切換互動模式（例：抖動模式），看看哪些地方一直閃。</li>
          <li>勾選 Show layer borders，檢查是否產生過多的分層。</li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">互動練習</h2>
        <div className="rounded-xl border p-4 bg-gray-50">
          <a className="px-3 py-1.5 rounded-lg bg-blue-600 text-white"
             href={`${import.meta.env.BASE_URL}fixtures/coverage/rendering-hot.html`} target="_blank" rel="noreferrer">
            開啟示範頁（重繪熱區）
          </a>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
            <li>指出反覆重繪的熱區與原因（使用 `offsetTop` 造成 layout thrash 等）。</li>
            <li>把高頻操作改為 transform 置換，重測閃爍與 FPS。</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
