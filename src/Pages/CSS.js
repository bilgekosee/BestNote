import React from "react";
import "./CSS.css";
function CSS() {
  return (
    <div className="css-container">
      <img
        src="https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width="500px"
        height="300px"
      ></img>
      <div className="content-css">
        <h2>CSS Nedir?</h2>
        <p>
          CSS (Cascading Style Sheets), Web sitelerinde daha etkili ,düzenli ve
          kullanıcı dostu hale getirmek için kullanılan bir stil dilidir. Html
          ile sayfa yapısı oluşturuken, Css ile renk, boyut, konumlandırma gibi
          görsel özellikleri tanımlayabilirsiniz.
        </p>
      </div>
      <div className="content-css">
        <h2>CSS Yazım Yöntemleri</h2>
        <ul className="ul-content">
          <li>
            <strong>Inline CSS</strong>: HTML öğğesine style özelliği ekleyerek
          </li>
          <li>
            <strong>Internal CSS</strong>: &lt;style&gt; etiketi ile HTML
            dosyasının &lt;head&gt; kısmında,
          </li>
          <li>
            <strong>External CSS</strong>: Harici bir .css dosyasında tanımlanır
            ve &lt;link&gt; etiketiyle HTML’ye bağlanır.
          </li>
        </ul>
      </div>
      <div className="content-css">
        <h2>CSS Temel Yapısı</h2>

        <li>
          CSS kuralları seçici(selector) ve deklarasyon bloğu (declaration
          block) ile tanımlanır.
        </li>
        <div className="example-css">
          <pre>
            <code>
              {`selector {
  property: value;
}
`}
            </code>
          </pre>
          <pre>
            <code>
              {`p {
  color: blue;
  font-size: 16px;
}

`}
            </code>
          </pre>
        </div>
      </div>

      <div className="content-css">
        <h2>CSS Seçiciler</h2>
        <ul style={{ marginLeft: "20px" }}>
          <li>
            <strong>Evrensel Seçici (*)</strong>: Tüm elementleri seçer.
          </li>
          <li>
            <strong>Element Seçiciler (p, h1, div vs.)</strong>: HTML
            etiketlerine doğrudan uygulanır. Örneğin p, h1, div.
          </li>
          <li>
            <strong>ID Seçiciler (#id)</strong>: # sembolü ile tekil bir öğeye
            stil vermek için kullanılır. Örneğin #header.
          </li>
          <li>
            <strong>Class Seçiciler (.class)</strong>: . sembolü ile aynı sınıfa
            sahip birden fazla öğeye stil vermek için kullanılır. Örneğin
            .button.
          </li>
          <li>
            <strong>Ayrıntılı Seçiciler</strong>:
            <li style={{ marginLeft: "40px" }}>
              <strong>Descendant Seçici</strong>: Belirli bir öğe içinde yer
              alan başka bir öğeyi seçer. Örneğin, div p tüm div içindeki p
              öğelerini seçer.
            </li>
            <li style={{ marginLeft: "40px" }}>
              <strong>Child Seçici</strong>: Yalnızca doğrudan çocuk öğeleri
              seçer (&gt; sembolü ile). Örneğin, div &gt; p.
            </li>
          </li>
        </ul>
        <ul>
          <li style={{ marginLeft: "20px" }}>
            <strong>Kapsam ve Öncelik Sıralaması</strong>:
            <li style={{ marginLeft: "40px" }}>
              <strong>Öncelik sırasına göre</strong>: Inline &gt; ID &gt; Class
              &gt; Element &gt; Evrensel.
            </li>
            <li style={{ marginLeft: "40px" }}>
              !important ile bir stilin her şeyden önce uygulanmasını sağlama
              (önerilmez ama bazı özel durumlar için kullanılır).
            </li>
          </li>
        </ul>
        <div className="example-css">
          <pre>
            <code>
              {`/* Evrensel Seçici */
* {
    font-family: Arial, sans-serif;
}

/* Sınıf Seçici */
.highlight {
    color: yellow;
    background-color: black;
}

/* ID Seçici */
#unique-element {
    color: green;
    font-size: 20px;
}

/* Grup Seçici */
h1, h2, p {
    margin-bottom: 10px;
}

`}
            </code>
          </pre>
          <ul>
            <li>
              .highlight sınıfı tüm “highlight” sınıfına sahip elemanlara
              uygulanır.
            </li>
            <li>#unique-element ID’si tek bir elemana uygulanmalıdır.</li>
            <li>h1, h2 ve p etiketleri aynı stil özelliklerine sahip olur.</li>
          </ul>
        </div>
        <div className="exercise">
          <ol>
            <p>
              <strong>ALIŞTIRMA</strong>
            </p>
            <li value="1">
              HTML’de bir ID (#special) ve bir sınıf (.highlighted) tanımlayın
              ve her birine farklı CSS stilleri uygulayın.
            </li>
            <li value="2">
              Highlighted sınıfını birden fazla elemanda kullanın.
            </li>
          </ol>
        </div>
      </div>
      <div className="content-css">
        <h2>CSS Renkler, Arkaplanlar ve Yazı Stilleri</h2>
        <li>
          <strong>Renk Tanımları</strong>:
          <ul style={{ marginLeft: "30px" }}>
            <li>
              <strong>İsimle</strong>: color:red;
            </li>
            <li>
              <strong>Hexadecimal</strong>: color: #ff0000;
            </li>
            <li>
              <strong>RGB</strong>: color: rgb(255, 0, 0);
            </li>
            <li>
              <strong>RGBA</strong>: color: rgba(255, 0, 0, 0.5);
            </li>
          </ul>
        </li>
        <div className="example-css">
          <pre>
            <code>
              {`/* Renk Tanımları */
.color-sample {
    color: #3498db;
    background-color: rgba(255, 0, 0, 0.3);
}

/* Yazı Stilleri */
.font-sample {
    font-family: 'Courier New', Courier, monospace;
    font-size: 18px;
    font-weight: bold;
    font-style: italic;
}


`}
            </code>
          </pre>
          <ul>
            <li>
              color-sample sınıfı mavi renk ve yarı saydam kırmızı arka plana
              sahiptir.
            </li>
            <li>
              font-sample yazı tipi Courier New, 18 piksel boyutunda, kalın ve
              italiktir.
            </li>
          </ul>
        </div>
        <div className="exercise">
          <ol>
            <p>
              <strong>ALIŞTIRMA</strong>
            </p>
            <li value="1">Farklı RGB ve HSL renkleri deneyin.</li>
            <li value="2">
              HTML’e birkaç paragraf ekleyin ve her birine farklı font stilleri
              uygulayın.
            </li>
          </ol>
        </div>
        <li>
          <strong>Arka Plan (Background) Özellikleri</strong>:
          <ul style={{ marginLeft: "30px" }}>
            <li>
              <strong>Background Color</strong>: background-color: lightblue;
            </li>
            <li>
              <strong>Background Image</strong>: background-image:
              url("image.jpg");
            </li>
            <li>
              <strong>Background Repeat</strong>: repeat, no-repeat, repeat-x,
              repeat-y.;
            </li>
            <li>
              <strong>Background Position</strong>: center, top left, 50% 50%
              gibi konumlandırmalar.
            </li>
            <li>
              <strong>Background Size</strong>: cover, contain, 100px 100px gibi
              boyutlandırmalar.
            </li>
          </ul>
        </li>
        <li>
          <strong>Yazı Stilleri</strong>:
          <ul style={{ marginLeft: "30px" }}>
            <li>
              <strong>Font-Family</strong>: Yazı tipi seçimi. font-family:
              "Arial", sans-serif;
            </li>
            <li>
              <strong>Font-Size</strong>: Yazı boyutu. font-size: 16px;
            </li>
            <li>
              <strong>Font-Weight</strong>: normal, bold, lighter, 100 ile 900
              arası değerler.
            </li>
            <li>
              <strong>Font-Style</strong>: Yazıyı italik yapma. font-style:
              italic;
            </li>
          </ul>
        </li>
      </div>
      <div className="content-css">
        <h2>Box Model ve Ölçülendirme</h2>
        <ul style={{ marginLeft: "15px" }}>
          <li>
            <strong>Box Model Detayları</strong>:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Margin</strong>: Kutunun dış boşluğu.
              </li>
              <li>
                <strong>Border</strong>: Kutunun kenarlığı. border: 1px solid
                black;
              </li>
              <li>
                <strong>Padding</strong>: Kutunun iç boşluğu, içerik ile sınır
                arasındaki boşluk.
              </li>
              <li>
                <strong>Content</strong>: Kutunun içindeki içerik.
              </li>
            </ul>
          </li>
        </ul>

        <img src="./css.png" style={{ margin: 0, marginLeft: "40px" }}></img>
        <ul style={{ marginLeft: "15px" }}>
          <li>
            <strong>Width ve Height Özellikleri</strong>:width, height,
            max-width, min-height gibi özelliklerle kutuları boyutlandırmak için
            kullanılır.
          </li>
        </ul>
        <ul style={{ marginLeft: "15px" }}>
          <li>
            <strong>Border ve Padding Extraları</strong>:
            <ul style={{ marginLeft: "15px" }}>
              <li>
                <strong>Tek değerli kullanım</strong>: border-radius:10px;
              </li>
              <li>
                <strong>Çift değerli kullanım</strong>: border-radius:20px 50px;
              </li>
              <li>
                <strong>
                  Farklı Köşeler İçin Farklı Border-radius Değerleri
                </strong>
                : border-radius:10px 20px 30px 40px;
              </li>
              <li>
                <strong>Daire için</strong>: border-radius:50%;
              </li>
              <div className="border-example">
                <div className="boxtekDeger">Border radius 10px</div>
                <div className="ciftDeger">Border radius 20px 50px</div>
                <div className="cokDeger">
                  Border radius 10px 20px 30px 40px
                </div>
                <div className="daire">daire</div>
              </div>
            </ul>
          </li>
        </ul>
      </div>
      <div className="content-css">
        <h2>Düzen ve Konumlandırma</h2>
        <ul style={{ marginLeft: "15px" }}>
          <li>
            <strong>Display özellikleri</strong>:display: block;, display:
            inline;, display: inline-block;, display: none;
          </li>
          <div className="display-example">
            <div>
              <h1>The display Property</h1>

              <h2>display: none:</h2>
              <div>
                Lorem ipsum dolor.... <p class="ex1">HELLO WORLD!</p> Vestibulum
                volutpat tellus diam....
              </div>

              <h2>display: inline:</h2>
              <div>
                Lorem ipsum dolor.... <p class="ex2">HELLO WORLD!</p> Vestibulum
                volutpat tellus diam....
              </div>

              <h2>display: block:</h2>
              <div>
                Lorem ipsum dolor.... <p class="ex3">HELLO WORLD!</p> Vestibulum
                volutpat tellus diam....
              </div>

              <h2>display: inline-block:</h2>
              <div>
                Lorem ipsum dolor.... <p class="ex4">HELLO WORLD!</p> Vestibulum
                volutpat tellus diam....
              </div>
            </div>
            <div>
              <pre>
                <code>
                  {`<!DOCTYPE html>
<html>
<head>
<style>
p {color: red;}

p.ex1 {display: none;}
p.ex2 {display: inline;}
p.ex3 {display: block;}
p.ex4 {display: inline-block;}
</style>
</head>
<body>
<h1>The display Property</h1>

<h2>display: none:</h2>
<div>
Lorem ipsum dolor.... <p class="ex1">HELLO WORLD!</p> Vestibulum volutpat tellus diam....
</div>

<h2>display: inline:</h2>
<div>
Lorem ipsum dolor.... <p class="ex2">HELLO WORLD!</p> Vestibulum volutpat tellus diam....
</div>

<h2>display: block:</h2>
<div>
Lorem ipsum dolor.... <p class="ex3">HELLO WORLD!</p> Vestibulum volutpat tellus diam....
</div>

<h2>display: inline-block:</h2>
<div>
Lorem ipsum dolor.... <p class="ex4">HELLO WORLD!</p> Vestibulum volutpat tellus diam....
</div>

</body>
</html>


`}
                </code>
              </pre>
            </div>
          </div>
          <li>
            <strong>Float ve Clear Kullanımı</strong>:
            <ul style={{ marginLeft: "15px" }}>
              <li>
                float: left;, float: right; ile elemanları yan yana dizme.
              </li>
              <li>
                Clear: clear: both; kullanarak float ile yerleşmiş elemanların
                hizalanmasını sıfırlama.
              </li>
              <div className="example-css">
                <div>
                  <p>
                    <h4>Float Right</h4>
                    <img
                      className="imgFloat"
                      src="https://plus.unsplash.com/premium_photo-1661674514856-17f29bd480b6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      width="100px"
                      height="100px"
                    ></img>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus imperdiet, nulla et dictum interdum, nisi lorem
                    egestas odio, vitae scelerisque enim ligula venenatis dolor.
                    Maecenas nisl est, ultrices nec congue eget, auctor vitae
                    massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante
                    ligula, facilisis sed ornare eu, lobortis in odio. Praesent
                    convallis urna a lacus interdum ut hendrerit risus congue.
                    Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim
                    ac. In at libero sed nunc venenatis imperdiet sed ornare
                    turpis. Donec vitae dui eget tellus gravida venenatis.
                    Integer fringilla congue eros non fermentum. Sed dapibus
                    pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis
                    diam velit.
                  </p>
                  <p style={{ marginTop: "20px" }}>
                    <h4>Float Left</h4>
                    <img
                      className="imgFloatLeft"
                      src="https://plus.unsplash.com/premium_photo-1661674514856-17f29bd480b6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      width="100px"
                      height="100px"
                    ></img>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus imperdiet, nulla et dictum interdum, nisi lorem
                    egestas odio, vitae scelerisque enim ligula venenatis dolor.
                    Maecenas nisl est, ultrices nec congue eget, auctor vitae
                    massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante
                    ligula, facilisis sed ornare eu, lobortis in odio. Praesent
                    convallis urna a lacus interdum ut hendrerit risus congue.
                    Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim
                    ac. In at libero sed nunc venenatis imperdiet sed ornare
                    turpis. Donec vitae dui eget tellus gravida venenatis.
                    Integer fringilla congue eros non fermentum. Sed dapibus
                    pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis
                    diam velit.
                  </p>
                </div>
              </div>
            </ul>
          </li>
          <li>
            <strong>Flexbox ve Grid Layout Derinlemesine:</strong>:
            <ul style={{ marginLeft: "15px" }}>
              <li>
                <strong>Flexbox Temelleri</strong>: Ana eksen, çapraz eksen
                tanımları; justify-content, align-items, flex-direction
                kullanımı.
              </li>
              <li>
                <strong>Grid Layout Temelleri</strong>: Satır
                (grid-template-rows) ve sütun (grid-template-columns) oluşturma,
                alanları birleştirme.
              </li>
              <div className="example-css-grid">
                <div class="flex-container">
                  <div class="flex-item">1</div>
                  <div class="flex-item">2</div>
                  <div class="flex-item">3</div>
                </div>

                <div>
                  <pre>
                    <code>
                      {`<div class="flex-container">
  <div class="flex-item">1</div>
  <div class="flex-item">2</div>
  <div class="flex-item">3</div>
</div>


.flex-container {
  display: flex;
  flex-direction: row; /* Ana eksen yatay */
  justify-content: center; /* Ana eksende ortala */
  align-items: center; /* Çapraz eksende ortala */
  height: 100vh;
}

.flex-item {
  padding: 20px;
  background-color: #4CAF50;
  color: white;
  margin: 10px;
}
`}
                    </code>
                  </pre>
                </div>
              </div>
              <div className="example-css-grid">
                <div class="grid-container">
                  <div class="grid-item">A</div>
                  <div class="grid-item">B</div>
                  <div class="grid-item">C</div>
                  <div class="grid-item">D</div>
                </div>

                <div>
                  <pre>
                    <code>
                      {`<div class="grid-container">
  <div class="grid-item">A</div>
  <div class="grid-item">B</div>
  <div class="grid-item">C</div>
  <div class="grid-item">D</div>
</div>


.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr; /* İlk sütun dar, ikincisi geniş */
  grid-template-rows: 100px 200px; /* İlk satır kısa, ikincisi uzun */
  gap: 10px;
  height: 100vh;
}

.grid-item {
  background-color: #FF5733;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* C'yi genişletme */
.grid-item:nth-child(3) {
  grid-column: 1 / span 2; /* İki sütunu kapla */
}


`}
                    </code>
                  </pre>
                </div>
              </div>
            </ul>
          </li>
        </ul>
      </div>
      <div className="content-css">
        <h2>CSS Animasyon ve Geçişler</h2>
        <li>
          <strong>Transition</strong>:transition: all 0.3s ease; ile yumuşak
          geçişler sağlama.
        </li>
        <div className="example-css">
          <button className="transition">Transition</button>
          <pre>
            <code>
              {`<button className="transition">Transition</button>

.transition {
  width: 100px;
  height: 100px;
  background: rgb(133, 25, 25);
  transition: width 2s;
}

.transition:hover {
  width: 300px;
}

`}
            </code>
          </pre>
        </div>
        <li>
          <strong>@keyframes</strong>: @keyframes kuralı animasyon kodunu
          belirtir. Animasyon, bir CSS stilinden diğerine kademeli olarak
          geçilerek oluşturulur.
        </li>

        <li>
          <strong>Animasyon Süresi ve Zamanlama Fonksiyonu</strong>:
          <li style={{ marginLeft: "15px" }}>
            animation-duration, animation-delay, animation-timing-function ile
            animasyonun hızını ve akışını belirleme.
          </li>
        </li>
        <div className="example-css" style={{ height: "500px" }}>
          <button className="keyframes">@keyframes</button>
          <pre>
            <code>
              {`<button className="keyframes">@keyframes</button>

.keyframes {
  width: 100px;
  height: 100px;
  background: red;
  position: relative;
  animation: mymove 5s infinite;
}

@keyframes mymove {
  0% {
    top: 0px;
    background: red;
    width: 100px;
  }
  100% {
    top: 200px;
    background: yellow;
    width: 300px;
  }
}

`}
            </code>
          </pre>
        </div>
        <div className="exercise">
          <ol>
            <p>
              <strong>ALIŞTIRMA</strong>
            </p>
            <li value="1">
              CSS animasyonları araştırarak çeşitli @keyframes örnekleri
              hazırlayın. Geçişlerin farklı zamanlamalarını deneyin.
            </li>
          </ol>
        </div>
      </div>
      <div className="content-css">
        <h2>Responsive Design ve Media Queries</h2>
        <li>
          <strong>Media Queries</strong>:Ekran boyutlarına göre farklı stiller
          uygulanmasını sağlar.
        </li>
        <li>
          <strong>Mobil Uyumluluk </strong>:
          <ul style={{ marginLeft: "30px" }}>
            <li>
              vw, vh, rem gibi birimlerle ekran genişliği ve yüksekliğine uyumlu
              tasarımlar yapılır.
            </li>
            <li>
              Responsive Layout ile flex ve Grid kullanarak esnek düzenler
              oluşturulabilir.
            </li>
          </ul>
        </li>
        <div className="example-css-responsive">
          <div>
            <div class="header">
              <h1>Chania</h1>
            </div>

            <div class="row">
              <div class="col-3 menu">
                <ul>
                  <li>The Flight</li>
                  <li>The City</li>
                  <li>The Island</li>
                  <li>The Food</li>
                </ul>
              </div>

              <div class="col-6">
                <h1>The City</h1>
                <p>
                  Chania is the capital of the Chania region on the island of
                  Crete. The city can be divided in two parts, the old town and
                  the modern city.
                </p>
              </div>

              <div class="col-3 right">
                <div class="aside">
                  <h2>What?</h2>
                  <p>Chania is a city on the island of Crete.</p>
                  <h2>Where?</h2>
                  <p>Crete is a Greek island in the Mediterranean Sea.</p>
                  <h2>How?</h2>
                  <p>You can reach Chania airport from all over Europe.</p>
                </div>
              </div>
            </div>

            <div class="footer">
              <p>
                Resize the browser window to see how the content respond to the
                resizing.
              </p>
            </div>
          </div>
          <pre>
            <code>
              {`<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
* {
  box-sizing: border-box;
}

.row::after {
  content: "";
  clear: both;
  display: block;
}

[class*="col-"] {
  float: left;
  padding: 15px;
}

html {
  font-family: "Lucida Sans", sans-serif;
}

.header {
  background-color: #9933cc;
  color: #ffffff;
  padding: 15px;
}

.menu ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu li {
  padding: 8px;
  margin-bottom: 7px;
  background-color: #33b5e5;
  color: #ffffff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

.menu li:hover {
  background-color: #0099cc;
}

.aside {
  background-color: #33b5e5;
  padding: 15px;
  color: #ffffff;
  text-align: center;
  font-size: 14px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

.footer {
  background-color: #0099cc;
  color: #ffffff;
  text-align: center;
  font-size: 12px;
  padding: 15px;
}

/* For desktop: */
.col-1 {width: 8.33%;}
.col-2 {width: 16.66%;}
.col-3 {width: 25%;}
.col-4 {width: 33.33%;}
.col-5 {width: 41.66%;}
.col-6 {width: 50%;}
.col-7 {width: 58.33%;}
.col-8 {width: 66.66%;}
.col-9 {width: 75%;}
.col-10 {width: 83.33%;}
.col-11 {width: 91.66%;}
.col-12 {width: 100%;}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  [class*="col-"] {
    width: 100%;
  }
}
</style>
</head>
<body>

<div class="header">
  <h1>Chania</h1>
</div>

<div class="row">
  <div class="col-3 menu">
    <ul>
    <li>The Flight</li>
    <li>The City</li>
    <li>The Island</li>
    <li>The Food</li>
    </ul>
  </div>

  <div class="col-6">
    <h1>The City</h1>
    <p>Chania is the capital of the Chania region on the island of Crete. The city can be divided in two parts, the old town and the modern city.</p>
  </div>

  <div class="col-3 right">
    <div class="aside">
      <h2>What?</h2>
      <p>Chania is a city on the island of Crete.</p>
      <h2>Where?</h2>
      <p>Crete is a Greek island in the Mediterranean Sea.</p>
      <h2>How?</h2>
      <p>You can reach Chania airport from all over Europe.</p>
    </div>
  </div>
</div>

<div class="footer">
  <p>Resize the browser window to see how the content respond to the resizing.</p>
</div>

</body>
</html>




`}
            </code>
          </pre>
        </div>

        <div className="exercise">
          <ol>
            <p>
              <strong>ALIŞTIRMA</strong>
            </p>
            <li value="1">
              Farklı ekran genişlikleri için farklı font büyüklükleri ve kutu
              boyutları ayarlayın.
            </li>
            <li value="2">
              Masaüstü, tablet ve mobil için farklı düzenler oluşturun.
            </li>
          </ol>
        </div>
      </div>
      <div className="content-css">
        <h2>CSS Ön İşlemciler ve Araçlar</h2>
        <li>
          <strong>Sass ve LESS’e Giriş</strong>: Sass ve LESS, CSS’i daha
          modüler ve düzenli hale getiren ön işlemcilerdir.
        </li>
        <div className="example-css">
          <pre>
            <code>{`$primary-color: #333;

.container {
    color: $primary-color;
    @mixin center {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @include center;
}

`}</code>
          </pre>
        </div>
        <li>
          <strong>Değişkenler</strong>: Tek bir renk veya stil değeri bir
          değişken olarak tanımlanabilir.
        </li>
        <li>
          <strong>Mixins</strong>: Belirli stilleri tekrar kullanmak için
          fonksiyon benzeri yapılardır.
        </li>
        <div className="exercise">
          <ol>
            <p>
              <strong>ALIŞTIRMA</strong>
            </p>
            <li value="1">Sass kullanarak daha karmaşık mixinler oluşturun.</li>
            <li value="2">
              Bir sayfa temasında birincil ve ikincil renkler kullanarak dinamik
              bir stil geliştirin.
            </li>
          </ol>
        </div>
      </div>

      <div className="content-css">
        <h2> CSS ile Modern Tasarım Teknikleri</h2>
        <li>
          <strong>Hover, Active ve Focus Durumları</strong>: Kullanıcı
          etkileşimini vurgulayan stiller eklenebilir.
        </li>
        <div className="example-css">
          <pre>
            <code>{`button:hover {
    background-color: green;
}
`}</code>
          </pre>
        </div>
        <li>
          <strong>İkonlar ve SVG Kullanımı</strong>: İkonları veya SVG
          dosyalarını CSS ile stillendirme.
        </li>
        <li>
          <strong>Hiyerarşi Sağlama</strong>: Font büyüklüğü, kalınlık ve renk
          kullanımıyla sayfa düzeninde hiyerarşi oluşturma.
        </li>
        <div className="example-css">
          <p>
            <b>
              <a
                style={{
                  fontSize: "30px",
                }}
                href="https://en.wikipedia.org/wiki/Shoto_Todoroki"
                target="_blank"
              >
                This is a link
              </a>
            </b>
          </p>
          <pre>
            <code>{`<!DOCTYPE html>
<html>
<head>
<style>
/* unvisited link */
a:link {
  color: red;
}

/* visited link */
a:visited {
  color: green;
}

/* mouse over link */
a:hover {
  color: hotpink;
}

/* selected link */
a:active {
  color: blue;
}
</style>
</head>
<body>

<p><b><a href="default.asp" target="_blank">This is a link</a></b></p>

</body>
</html>
`}</code>
          </pre>
        </div>
      </div>

      <div className="content-css">
        <h2>CSS En İyi Uygulamalar ve İleri Teknikler</h2>
        <li>
          <strong>Performans Optimizasyonu</strong>: CSS dosyalarını sıkıştırma,
          gereksiz kodlardan kaçınma.
        </li>

        <li>
          <strong>BEM (Block Element Modifier)</strong>: Kod okunabilirliğini
          artıran, sınıf tabanlı bir isimlendirme sistemi.
        </li>
        <div className="example-css">
          <pre>
            <code>{`.card__title {
    font-size: 20px;
}
`}</code>
          </pre>
        </div>
        <li>
          <strong>Dark ve Light Mode</strong>: Karanlık ve aydınlık tema
          oluşturmak için CSS değişkenleri veya media query kullanma.
        </li>
        <div className="example-css">
          <pre>
            <code>{`@media (prefers-color-scheme: dark) {
    body {
        background-color: black;
        color: white;
    }
}
`}</code>
          </pre>
        </div>
        <div className="exercise">
          <ol>
            <p>
              <strong>ALIŞTIRMA</strong>
            </p>
            <li value="1">
              BEM yapısını kullanarak bir kart bileşeni tasarlayın. Farklı
              Modifier seçenekleri ile tasarımı esnek hale getirin.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
export default CSS;
