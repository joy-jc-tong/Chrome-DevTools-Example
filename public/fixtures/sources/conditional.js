function processInput(text){
    // 在這行加「條件式中斷點」：例如 text === 'error'
    const normalized = text.trim().toLowerCase();
    if (normalized === 'error') {
      console.warn('觸發錯誤流程');
    }
    return normalized.split('').reverse().join('');
  }
  document.getElementById('go').addEventListener('click', ()=>{
    const text = document.getElementById('txt').value;
    const out = processInput(text);
    document.getElementById('log').textContent = '結果：' + out;
  });
  