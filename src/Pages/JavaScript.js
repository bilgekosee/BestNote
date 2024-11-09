import React from "react";
import "./JavaScript.css";
function JavaScript() {
  return (
    <div className="js-container">
      <img
        src="https://images.unsplash.com/photo-1667372393096-9c864313e868?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width="500px"
        height="300px"
      ></img>
      <div className="content-js">
        <h2>JavaScript Nedir?</h2>
        <p>
          JavaScript, web sayfalarına interaktif özellikler eklemek için
          kullanılan popüler bir programlama dilidir. HTML ve CSS ile birlikte
          çalışarak kullanıcı etkileşimlerine yanıt verebilen dinamik içerikler
          oluşturur.
        </p>
        <ul className="ul-style">
          <li>HTML sayfanın yapısını,</li>
          <li>CSS sayfanın stilini,</li>
          <li>JavaScript ise sayfanın davranışını kontrol eder.</li>
        </ul>
      </div>

      <div className="content-js">
        <h2>JavaScript Nasıl Çalışır?</h2>
        <p>
          JavaScript kodları, bir web tarayıcısı tarafından çalıştırılır ve web
          sayfasında kullanıcı etkileşimlerine yanıt verir. Basit bir örnekle
          JavaScript’in HTML içine nasıl yerleştirildiğini gösterelim.
        </p>
        <p style={{ marginTop: "10px" }}>
          <strong>JavaScript’i HTML’ye Ekleme</strong>:
        </p>
        <div className="example-css">
          <pre>
            <code>
              {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Example</title>
</head>
<body>

<h1>Merhaba, JavaScript!</h1>

<!-- JavaScript kodlarımızı buraya ekleyeceğiz -->
<script>
    alert("Hoş geldin! Bu bir JavaScript alert mesajıdır.");
</script>

</body>
</html>

`}
            </code>
          </pre>
        </div>
        <p>
          Bu kodu bir HTML dosyası olarak kaydedip tarayıcıda açtığınızda, "Hoş
          geldin! Bu bir JavaScript alert mesajıdır." şeklinde bir uyarı
          penceresi çıkacaktır. Bu, JavaScript'in çalıştığını doğrulamanın kolay
          bir yoludur.
        </p>
      </div>

      <div className="content-js">
        <h2>Temel JavaScript Kavramları</h2>
        <p>JavaScript’e giriş yaparken öğreneceğimiz bazı temel kavramlar:</p>
        <ul className="ul-style-title">
          <li>
            <strong>Değişkenler</strong>: Veriyi saklamak için kullanılır.
          </li>
          <li>
            <strong>Veri Tipleri</strong>: Sayılar, metinler, nesneler gibi
            farklı veri tipleri vardır.
          </li>
          <li>
            <strong>Koşullar</strong>: Kodun belirli bir koşulda çalışmasını
            sağlar.
          </li>
          <li>
            <strong>Döngüler</strong>: Belirli bir işlemi tekrar etmek için
            kullanılır.
          </li>
          <li>
            <strong>Fonksiyonlar</strong>: Belirli bir görevi yerine getiren kod
            bloklarıdır.
          </li>
        </ul>
        <p>Öncelikle değişkenlerle başlayalım mı?</p>
      </div>
    </div>
  );
}
export default JavaScript;
