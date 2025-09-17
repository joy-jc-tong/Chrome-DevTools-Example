function doWork(){ // 真正的錯在這
    const x = null;
    return x.toString(); // 會丟錯
  }
  document.getElementById('boom').addEventListener('click', window.vendorWrap(doWork));
  