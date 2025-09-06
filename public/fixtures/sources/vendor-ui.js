// 模擬第三方 UI 包把你的 handler 包起來
function wrap(fn){
    return function wrapped(...args){
      try { return fn.apply(this, args); }
      catch (e) { console.error('Vendor handled error', e); throw e; }
    }
  }
  window.vendorWrap = wrap;
  