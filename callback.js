// Program Callback Synchronous *Tugas 3

function beli(makanan) {
    alert(`kamu ingin membeli ${makanan}`)
}

function tampilkan(tanya) {
    const makanan = prompt(`mau beli apa ?`)
    tanya(makanan)
}

tampilkan(beli)

// Program Callback Asynchronous *Tugas 4

setTimeout(() => {
    console.log('terima kasih');
  }, 2000)
  
  function callback(umur, cb) {
    setTimeout(() => {
       cb(`nama saya haekal, umur saya ${umur}`)
    }, 1000)
  }
  
  callback(18, (kenal) => {
      console.log(kenal);
    })
  
  console.log('perkenalkan');