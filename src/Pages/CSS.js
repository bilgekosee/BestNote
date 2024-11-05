import React from "react";
import "./CSS.css";
function CSS() {
  return (
    <div className="css-container">
      <img
        src="https://files.oaiusercontent.com/file-J30i7AbtxjmiJ3LLgr7goff7?se=2024-11-05T18%3A06%3A49Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D85de671f-0e21-4c1d-a4f5-45753d02f6d1.webp&sig=%2B6NCekw39OmpaTY1a2ghKDm2xSis2A7lhiZhdC%2BiDuk%3D"
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
      </div>
    </div>
  );
}
export default CSS;
