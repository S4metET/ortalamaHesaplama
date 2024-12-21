const notlar = [85, 70, 40, 61, 80];
const sonuc = ortHesaplama(notlar);
function ortHesaplama(notlar) {
    let toplam = 0;
    for (let i = 0; i < notlar.length; i++){
      toplam += notlar[i];
    }
    const ortalama = toplam / notlar.length;
    let harfNotu;
    if (ortalama >= 90){
      harfNotu = 'A';
    }
    else if (ortalama >= 80){
      harfNotu = 'B';
    }
    else if (ortalama >= 70){
      harfNotu = 'C';
    }
    else if (ortalama >= 60){
      harfNotu = 'D';
    }
    else{
      harfNotu = 'F';
    }
    return{
      ortalama: ortalama.toFixed(2),
      harfNotu: harfNotu
    };
  }
  console.log(`Ortalama: ${sonuc.ortalama}, Harf Notu: ${sonuc.harfNotu}`);