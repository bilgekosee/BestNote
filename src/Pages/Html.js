import React from "react";
import "./Html.css";
function Html() {
  return (
    <div className="html-content-container">
      <img
        src="https://images.unsplash.com/photo-1472437774355-71ab6752b434?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width="500px"
        height="300px"
      ></img>
      <div className="content-html">
        <h2>HTML Nedir?</h2>
        <p>
          HTML (HyperText Markup Language), web sayfalarının yapısını oluşturan
          ve tarayıcılara bir sayfanın nasıl görüntüleneceğini belirten bir
          işaretleme dilidir. HTML, web sayfalarında metin, resim, bağlantı ve
          diğer medya öğelerinin düzenlenmesini sağlar. HTML ile oluşturulan web
          sayfaları tarayıcılar tarafından yorumlanarak kullanıcıya görsel
          olarak sunulur.
        </p>
      </div>
      <div className="content-html">
        <h2>HTML'in Temel Yapısı</h2>
        <p>
          Bir HTML belgesi, belirli bir yapıyı takip eder ve .html uzantısıyla
          kaydedilir. İşte basit bir HTML belgesinin yapısı:
        </p>
        <pre style={{ margin: "50px" }}>
          <code>
            {`<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>Örnek Sayfa</title>
</head>
<body>
    <h1>Merhaba, Dünya!</h1>
    <p>Bu, ilk HTML sayfamız.</p>
</body>
</html>`}
          </code>
        </pre>
        <ul style={{ marginTop: "20px", marginLeft: "20px" }}>
          <li>
            <strong>&lt;!DOCTYPE html&gt;</strong>: Tarayıcıya HTML5
            kullanıldığını bildirir.
          </li>
          <li>
            <strong>&lt;html&gt;</strong>: HTML belgesinin kök etiketidir.
          </li>
          <li>
            <strong>&lt;head&gt;</strong>: Sayfa hakkında meta bilgileri içerir.
          </li>
          <li>
            <strong>&lt;title&gt;</strong>: Tarayıcı sekmesinde görünen sayfa
            başlığını belirtir.
          </li>
          <li>
            <strong>&lt;body&gt;</strong>: Sayfanın görünen içeriklerini
            barındırır.
          </li>
        </ul>
      </div>
      <div className="content-html">
        <h2>Temel HTML Etiketleri</h2>
        <ol style={{ margin: "16px", marginLeft: "20px" }}>
          <li value={"1"}> Başlık Etiketleri (&lt;h1&gt; - &lt;h6&gt;)</li>
          <h1 style={{ marginTop: "10px", color: "red" }}>Bu bir Başlık 1</h1>
          <h2 style={{ margin: "0", color: "red" }}>Bu bir Başlık 2</h2>
        </ol>
        <ol style={{ margin: "16px", marginLeft: "20px" }}>
          <li value={"2"}> Paragraf Etiketi (&lt;p&gt;)</li>
          <p style={{ marginTop: "10px" }}>Bu bir paragraf örneğidir.</p>
        </ol>
        <ol style={{ margin: "16px", marginLeft: "20px" }}>
          <li value={"3"}> Bağlantı Etiketi (&lt;a&gt;)</li>
          <p style={{ marginTop: "10px" }}>
            Bağlantılar oluşturmak için &lt;a&gt; etiketi kullanılır. href
            özelliği, bağlantının nereye yönleneceğini belirtir.
            <br />
            <a href="https://www.example.com" target="_blank">
              Örnek Siteye Git
            </a>
          </p>
          <pre style={{ margin: "50px" }}>
            <code>
              {` <a href="https://www.example.com" target="_blank">
    Örnek Siteye Git </a>`}
            </code>
          </pre>
        </ol>
        <ol style={{ margin: "16px", marginLeft: "20px" }}>
          <li value={"4"}> Görsel Etiketi (&lt;img&gt;)</li>
          <p style={{ marginTop: "10px" }}>
            Sayfaya görsel eklemek için &lt;img&gt; etiketi kullanılır. src
            özelliği görselin yolunu, alt ise alternatif metni belirtir.
          </p>
          <div className="example" style={{ display: "flex" }}>
            <img
              src="https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Güzel Resim"
              width="300"
              height="200"
            ></img>
            <pre style={{ margin: "50px" }}>
              <code>
                {`<img src="best-foto.png" 
alt="Güzel Resim" width="300" 
height="200"></img>`}
              </code>
            </pre>
          </div>
        </ol>
        <ol style={{ margin: "16px", marginLeft: "20px" }}>
          <li value={"5"}> Liste Etiketleri </li>
        </ol>
        <li>
          <strong> Sınırsız Liste&lt;ul&gt;</strong>: Sırasız bir liste
          oluşturur.
        </li>
        <li>
          <strong> Sıralı Liste&lt;ol&gt;</strong>: Sıralı bir liste oluşturur.
        </li>
        <li>
          <strong>Liste Elemanı&lt;li&gt;</strong>: Her bir liste elemanını
          belirtir.
        </li>
        <div className="example" style={{ display: "flex", gap: "20px" }}>
          <div style={{ margin: "100px" }}>
            <ul>
              <li>Elma</li>
              <li>Armut</li>
            </ul>

            <ol>
              <li>Birinci madde</li>
              <li>İkinci madde</li>
            </ol>
          </div>

          <pre style={{ margin: "50px" }}>
            <code>
              {`<ul>
    <li>Elma</li>
    <li>Armut</li>
</ul>

<ol>
    <li>Birinci madde</li>
    <li>İkinci madde</li>
</ol>`}
            </code>
          </pre>
        </div>
      </div>
      <div className="content-html">
        <h2>HTML Özellikleri (Attributes)</h2>
        <p>
          HTML etiketlerine ek bilgi eklemek için özellikler kullanılır.
          Örneğin,ağlantı etiketi <strong>href</strong> ve{" "}
          <strong>target</strong> özelliklerini kullanır.
        </p>
        <div style={{ marginTop: "20px" }}></div>
        <li>
          <strong> href</strong>: Bağlantının adresini belirtir.
        </li>
        <li>
          <strong> src</strong>: Görselin yolunu belirtir.
        </li>
        <li>
          <strong>alt</strong>: Görsel için alternatif metin belirtir
          (erişilebilirlik için önemlidir).
        </li>
        <li>
          <strong>target="_blank"</strong>: Bağlantıyı yeni bir sekmede açar.
        </li>
      </div>
      <div className="content-html">
        <h2>HTML Formları</h2>
        <p>
          HTML'de formlar, kullanıcıdan veri almak için kullanılır. &lt;form&gt;
          etiketi, formun başlangıcını ve sonunu belirtir.
        </p>
        <div className="example" style={{ display: "flex", gap: "20px" }}>
          <pre style={{ margin: "50px" }}>
            <code>
              {` <form action="/submit" method="post">
    <label for="isim">İsim:</label>
    <input type="text" id="isim" name="isim">

    <label for="email">Email:</label>
    <input type="email" id="email" name="email">

    <button type="submit">Gönder</button>
</form>`}
            </code>
          </pre>
        </div>
      </div>
      <div className="content-html">
        <h2>HTML Yorumları</h2>
        <p>
          Kodun belirli kısımlarını açıklamak veya devre dışı bırakmak için
          yorum eklenir. Yorumlar tarayıcıda görüntülenmez.
        </p>
        <div
          className="example"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ margin: "20px" }}>
            {/*  Bu bir HTML yorumudur  */}
            <p>Bu paragraf görünür, ancak yukarıdaki yorum görünmez.</p>
          </div>

          <pre style={{ margin: "20px" }}>
            <code>
              {`<!-- Bu bir HTML yorumudur -->
<p>Bu paragraf görünür, ancak yukarıdaki yorum görünmez.</p>
`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
export default Html;
