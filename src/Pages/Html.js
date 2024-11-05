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
          <div className="example" style={{ display: "flex", margin: "30px" }}>
            <img
              src="https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Güzel Resim"
              width="300"
              height="200"
              style={{ margin: "0px" }}
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
          HTML'de açıklama eklemek için &lt;!-- ve --&gt; arasına metin yazılır.
          Yorumlar tarayıcıda görüntülenmez ve kodu açıklamak için kullanılır.
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
      <div className="content-html">
        <h2>HTML5 ve Yeni Özellikler</h2>
        <p>
          HTML5, HTML'in son sürümüdür ve modern web için yeni etiketler,
          özellikler ve API'ler sunar. Bazı önemli HTML5 özellikleri:
        </p>
        <div style={{ marginTop: "20px" }}>
          <li>
            <strong> Semantik Etiketler</strong>: &lt;header&gt; (sayfa
            başlığı), &lt;footer&gt; (sayfa alt bilgisi), &lt;section&gt;
            (içerik bölümleri), &lt;article&gt; (bağımsız içerikler),
            &lt;nav&gt; (navigasyon menüsü) gibi etiketlerle sayfa yapısını daha
            iyi tanımlar.
          </li>
          <li>
            <strong> Video ve Ses Desteği</strong>: &lt;video&gt; ve
            &lt;audio&gt; etiketleri ile medya dosyalarını gömmeden oynatma
            imkanı sağlar.
          </li>
          <li>
            <strong>Gelişmiş Form Kontrolleri</strong>: &lt;date&gt;,
            &lt;email&gt;, &lt;number&gt; gibi yeni input türleri ile formlar
            daha kullanıcı dostu hale gelir.
          </li>
          <li>
            <strong> Canvas ve SVG</strong>: 2D ve 3D grafikler oluşturmak için
            &lt;canvas&gt; ve SVG desteği.
          </li>
          <li>
            <strong> Yerel Depolama</strong>: localStorage ve sessionStorage ile
            veri depolama imkanı.
          </li>
        </div>
      </div>
      <div className="content-html">
        <h2>Tablolar</h2>

        <li style={{ marginTop: "20px" }}>Tablo Yapısı</li>
        <div
          className="example"
          style={{ display: "flex", gap: "200px", margin: "10px" }}
        >
          <table border={"1"}>
            <tr>
              <th>Başlık 1</th>
              <th>Başlık 2</th>
            </tr>
            <tr>
              <td>Veri 1</td>
              <td>Veri 2</td>
            </tr>
          </table>
          <pre>
            <code>
              {`<table  border={"1"}>
  <tr>
   <th>Başlık 1</th>
   <th>Başlık 2</th>
  </tr>
  <tr>
   <td>Veri 1</td>
   <td>Veri 2</td>
  </tr>
 </table>
`}
            </code>
          </pre>
        </div>
        <div>
          <ul>
            <li>
              <strong>Başlıca Etiketler</strong>
            </li>
            <li style={{ marginLeft: "10px" }}>
              <strong> &lt;table&gt;</strong>: Tablo yapısını belirler.
            </li>
            <li style={{ marginLeft: "10px" }}>
              <strong> &lt;tr&gt;</strong>: Satır tanımlar.
            </li>
            <li style={{ marginLeft: "10px" }}>
              <strong> &lt;th&gt;</strong>: Tablo başlığı.
            </li>
            <li style={{ marginLeft: "10px" }}>
              <strong> &lt;td&gt;</strong>: Tablo hücresi.
            </li>
          </ul>
        </div>
      </div>
      <div className="content-html">
        <h2>HTML'de CSS Kullanımı</h2>
        <p>CSS ile HTML’de stil uygulamak için 3 farklı yöntem vardır:</p>
        <div className="example">
          <li>
            <strong>Inline</strong>: Inline CSS, doğrudan HTML etiketinin style
            özelliği ile uygulanır. Tek bir öğeye hızlıca stil vermek
            istediğinizde kullanılır, ancak büyük projelerde önerilmez.
          </li>
          <pre>
            <code>
              {`<!DOCTYPE html>
<html lang="tr">
<head>
  <title>Inline CSS Örneği</title>
</head>
<body>
  <h1 style="color: blue; font-size: 24px;">Merhaba, Inline CSS!</h1>
  <p style="color: green; text-align: center;">Bu paragraf inline CSS ile renklendirildi.</p>
</body>
</html>

`}
            </code>
          </pre>
        </div>
        <div className="example">
          <li>
            <strong>Internal</strong>: Internal CSS, &lt;style&gt; etiketi ile
            HTML dosyasının &lt;head&gt;bölümünde tanımlanır. Aynı HTML
            sayfasında birden fazla öğeyi biçimlendirmek istediğinizde
            kullanılabilir. Ancak, büyük projelerde her sayfa için ayrı ayrı
            tanımlamalar yapmak zorlayıcı olabilir.
          </li>
          <pre>
            <code>
              {`<!DOCTYPE html>
<html lang="tr">
<head>
  <title>Internal CSS Örneği</title>
  <style>
    body {
      background-color: #f0f0f0;
    }
    h1 {
      color: blue;
      font-size: 24px;
      text-align: center;
    }
    p {
      color: green;
      text-align: center;
    }
  </style>
</head>
<body>
  <h1>Merhaba, Internal CSS!</h1>
  <p>Bu paragraf internal CSS ile renklendirildi.</p>
</body>
</html>


`}
            </code>
          </pre>
        </div>
      </div>
      <div className="example">
        <li>
          <strong>External</strong>:External CSS, ayrı bir .css dosyasında
          tanımlanır ve HTML dosyasına &lt;link&gt; etiketi ile bağlanır. Bu
          yöntem, çok sayfalı projelerde stil dosyasını yeniden kullanarak stil
          yönetimini kolaylaştırır.
        </li>
        <ol style={{ marginLeft: "40px", marginTop: "10px" }}>
          <li value={"1"}>
            style.css adında bir CSS dosyası oluşturun ve stil tanımlarını
            ekleyin:
          </li>
        </ol>
        <pre style={{ marginLeft: "40px", marginTop: "10px" }}>
          <code>
            {`/* style.css */
body {
  background-color: #f0f0f0;
}
h1 {
  color: blue;
  font-size: 24px;
  text-align: center;
}
p {
  color: green;
  text-align: center;
}



`}
          </code>
        </pre>

        <ol style={{ marginLeft: "40px", marginTop: "10px" }}>
          <li value={"2"}>
            Ardından, HTML dosyanıza bu CSS dosyasını bağlayın:
          </li>
        </ol>
        <pre style={{ marginLeft: "40px", marginTop: "10px" }}>
          <code>
            {`<!DOCTYPE html>
<html lang="tr">
<head>
  <title>External CSS Örneği</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Merhaba, External CSS!</h1>
  <p>Bu paragraf external CSS ile renklendirildi.</p>
</body>
</html>


`}
          </code>
        </pre>
        <p>
          Bu yöntemlerin her biri farklı durumlarda faydalıdır, ancak genelde
          büyük projelerde External CSS kullanarak stil yönetimini merkezi hale
          getirmek en etkili yoldur.
        </p>
      </div>

      <div className="content-html">
        <h2>HTML Attributes (Özellikler)</h2>
        <p>
          HTML özellikleri (attributes), HTML etiketlerine çeşitli
          işlevsellikler ekleyerek içeriklerin nasıl görüneceğini veya
          davranacağını kontrol etmemizi sağlar. Aşağıda en yaygın dört HTML
          özelliğini ve kullanım alanlarını ayrıntılı bir şekilde açıklayacağım.
        </p>
        <ol style={{ marginLeft: "40px", marginTop: "10px" }}>
          <li value={"1"}>
            <strong>class özelliği</strong>:class özelliği, bir veya birden
            fazla HTML elementine CSS ile stil vermek veya JavaScript ile seçmek
            için kullanılır. Aynı sınıf adını birden fazla öğeye verebiliriz; bu
            da aynı stili veya işlevi birçok öğeye uygulamamızı sağlar.
          </li>
        </ol>
        <div className="example">
          <li value={"1"} style={{ marginLeft: "40px", marginTop: "10px" }}>
            <strong>Özellik</strong>: Birden fazla öğeye aynı sınıf adını
            vererek toplu stil uygulamaları yapılabilir.
          </li>
          <li value={"2"} style={{ marginLeft: "40px", marginTop: "10px" }}>
            <strong>Kullanım</strong>: CSS veya JavaScript’te .class-adı olarak
            seçilir.
          </li>
          <pre style={{ marginLeft: "40px", marginTop: "10px" }}>
            <code>
              {`<!DOCTYPE html>
<html lang="tr">
<head>
  <title>class Özelliği</title>
  <style>
    .mavi-yazi {
      color: blue;
      font-size: 20px;
    }
  </style>
</head>
<body>
  <h1 class="mavi-yazi">Bu başlık mavi renkte</h1>
  <p class="mavi-yazi">Bu paragraf da mavi renkte</p>
</body>
</html>



`}
            </code>
          </pre>
          <p>
            Bu örnekte, mavi-yazi sınıfı, hem başlığa (&lt;h1&gt;) hem de
            paragrafa (&lt;p&gt;) uygulanarak her ikisinin de mavi renkte
            görünmesini sağlar.
          </p>
        </div>
      </div>

      <ol style={{ marginLeft: "40px", marginTop: "10px" }}>
        <li value={"2"}>
          <strong>id özelliği</strong>: id özelliği, bir HTML öğesine benzersiz
          bir kimlik atamak için kullanılır. Her sayfada yalnızca bir defa
          kullanılmalıdır; çünkü her id benzersiz olmalıdır. id, genellikle tek
          bir öğeyi CSS veya JavaScript ile seçmek istediğinizde kullanılır.
        </li>
      </ol>
      <div className="example">
        <li value={"1"} style={{ marginLeft: "40px", marginTop: "10px" }}>
          <strong>Özellik</strong>: Sayfa içinde bir defa kullanılır; her id
          benzersizdir.
        </li>
        <li value={"2"} style={{ marginLeft: "40px", marginTop: "10px" }}>
          <strong>Kullanım</strong>: CSS veya JavaScript’te #id-adı olarak
          seçilir.
        </li>
        <pre style={{ marginLeft: "40px", marginTop: "10px" }}>
          <code>
            {`<!DOCTYPE html>
<html lang="tr">
<head>
  <title>id Özelliği</title>
  <style>
    #özel-yazi {
      color: red;
      font-size: 24px;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h1 id="özel-yazi">Bu başlık kırmızı renkte ve kalın yazılmış</h1>
  <p>Bu paragraf normal stilindedir.</p>
</body>
</html>




`}
          </code>
        </pre>
        <p>
          Bu örnekte, özel-yazi id’si h1 etiketine atanmış ve yalnızca bu öğeyi
          kırmızı renkte, kalın yazı stili ile göstermektedir.
        </p>
      </div>

      <ol style={{ marginLeft: "40px", marginTop: "10px" }}>
        <li value={"3"}>
          <strong>style özelliği</strong>: style özelliği, öğelere doğrudan CSS
          stili eklemek için kullanılır. style özelliği, öğe düzeyinde stil
          vermek için kullanılır ve inline olarak tanımlanır. Ancak, büyük
          projelerde veya tekrar eden stillerde önerilmez; daha çok geçici veya
          belirli bir öğeye özel stil uygulamaları için uygundur.
        </li>
      </ol>
      <div className="example">
        <li value={"1"} style={{ marginLeft: "40px", marginTop: "10px" }}>
          <strong>Özellik</strong>: Sadece bir öğeye özel, inline stil vermek
          için kullanılır.
        </li>
        <li value={"2"} style={{ marginLeft: "40px", marginTop: "10px" }}>
          <strong>Kullanım</strong>: &lt;element style="property: value;"&gt;
        </li>
        <pre style={{ marginLeft: "40px", marginTop: "10px" }}>
          <code>
            {`<!DOCTYPE html>
<html lang="tr">
<head>
  <title>style Özelliği</title>
</head>
<body>
  <h1 style="color: green; text-align: center;">Bu başlık yeşil ve ortalanmış</h1>
  <p style="color: purple;">Bu paragraf mor renkte</p>
</body>
</html>




`}
          </code>
        </pre>
        <p>
          Bu örnekte, style özelliğiyle h1 başlığına yeşil renk ve ortalama,
          paragrafa ise mor renk verilmiştir. Her iki stil doğrudan ilgili
          etikete uygulanır.
        </p>
      </div>

      <ol style={{ marginLeft: "40px", marginTop: "10px" }}>
        <li value={"4"}>
          <strong>alt özelliği</strong>: alt özelliği, &lt;img&gt; etiketiyle
          kullanılan ve görsel dosyası yüklenemediğinde veya erişilemediğinde
          alternatif metin sağlayan bir özelliktir. Özellikle erişilebilirlik
          açısından önemlidir; ekran okuyucular bu metni okuyarak görme engelli
          kullanıcılara görsel içeriği açıklayabilir. Ayrıca, alt metin SEO
          açısından da önem taşır.
        </li>
      </ol>
      <div className="example">
        <li value={"1"} style={{ marginLeft: "40px", marginTop: "10px" }}>
          <strong>Özellik</strong>: Görüntü bulunamadığında veya ekran
          okuyucularda açıklama sağlar.
        </li>
        <li value={"2"} style={{ marginLeft: "40px", marginTop: "10px" }}>
          <strong>Kullanım</strong>: &lt;img src="image.jpg" alt="Açıklayıcı
          metin&gt;
        </li>
        <pre style={{ marginLeft: "40px", marginTop: "10px" }}>
          <code>
            {`<!DOCTYPE html>
<html lang="tr">
<head>
  <title>alt Özelliği</title>
</head>
<body>
  <h1>Görsel Örneği</h1>
  <img src="meyve.jpg" alt="Bir sepet dolusu taze meyve">
</body>
</html>




`}
          </code>
        </pre>
        <p>
          Bu örnekte, meyve.jpg görseli yüklenemediğinde tarayıcı veya ekran
          okuyucu "Bir sepet dolusu taze meyve" metnini gösterecektir. Bu sayede
          görselin içeriği hakkında bilgi verilir.
        </p>
      </div>
      <p>
        Bu özellikler, HTML yapısına ek işlevler ve stiller kazandırmanın temel
        yoludur. Her bir özellik farklı senaryolarda kullanılabilir ve
        projelerin yönetimini kolaylaştırır.
      </p>
      <div className="content-html">
        <h2>SEO ve Erişilebilirlik için HTML İpuçları</h2>
        <ul>
          <li style={{ marginTop: "10px" }}>
            <strong>Alt Etiketler</strong>:Görseller için alt özellikleri
            kullanarak erişilebilirliği artırın.
          </li>
          <li style={{ marginTop: "10px" }}>
            <strong>Başlık Yapısı</strong>:&lt;h1&gt; ile &lt;h6&gt; arasında
            mantıklı bir sıra kullanın.
          </li>
          <li style={{ marginTop: "10px" }}>
            <strong>Anlamlı Bağlantılar</strong>:href özelliklerini doğru ve
            anlamlı açıklamalarla tanımlayın.
          </li>
          <li style={{ marginTop: "10px" }}>
            <strong>Meta Etiketleri</strong>:
            <li style={{ marginLeft: "40px", marginTop: "10px" }}>
              <strong>Description</strong>:&lt;meta name="description"
              content="açıklama"&gt; etiketi sayfa içeriğinbi tanımlar.
            </li>
            <li style={{ marginLeft: "40px", marginTop: "10px" }}>
              <strong>Keywords</strong>:&lt;meta name="keywords" content="HTML
              ,CSS, JavaScript"&gt; arama motorlarına yardımcı olur.
            </li>
          </li>
        </ul>
      </div>
      <div className="content-html">
        <h2>HTML Best Practices (En İyi Uygulamalar)</h2>
        <ul style={{ marginTop: "10px" }}>
          <li>
            <strong>Yorum Ekleme</strong>:Kodun anlaşılabilirliğini artırmak
            için HTML yorumları ekleyin.Amam bu yorumların gereksiz ve fazla
            olmamasına dikkat edin.
          </li>
          <li>
            <strong>Kullanıcı Dostu Formlar</strong>: Form elemanlarına label
            ekleyin.
          </li>
          <li>
            <strong>Doğru Etiket Kullanımı</strong>: İçerik türüne uygun
            etiketleri seçin.
          </li>
          <li>
            <strong>HTML Validasyonu</strong>: W3C Validator ile kodunuzu
            doğrulayın.
          </li>
        </ul>
      </div>
      <div className="content-html">
        <h2>Gelişmiş HTML Özellikleri</h2>
        <ul style={{ marginTop: "10px" }}>
          <li>
            <strong>Iframe (İç İçerik Çerçevesi)</strong>:&lt;iframe&gt;
            etiketi, başka bir web sayfasını veya içeriği kendi sayfanıza gömmek
            için kullanılır. Bu özellik, özellikle harici web sayfalarını,
            videoları veya haritaları kendi sayfanızda göstermek istediğinizde
            kullanışlıdır.
          </li>
          <ul>
            <li style={{ marginTop: "10px", marginLeft: "20px" }}>
              <strong>Kullanım</strong>: &lt;iframe
              src="https://en.wikipedia.org/wiki/Shoto_Todoroki"&gt;&lt;/iframe&gt;
            </li>

            <li style={{ marginTop: "10px", marginLeft: "20px" }}>
              <strong>Özellikler</strong>:
              <ul style={{ marginTop: "10px", marginLeft: "40px" }}>
                <li>
                  <strong>src</strong>; Gösterilecek web sayfasının URL sini
                  belirtir.
                </li>
                <li>
                  <strong>width ve height</strong>; Çerçevenin genişlik
                  yüksekliğini ayarlar.
                </li>
                <li>
                  <strong>frameborder</strong>; Çerçevenin etrafındaki sınır
                  çizgisi (0 veya 1).
                </li>
                <li>
                  <strong>allowfullscreen</strong>; Çerçevenin tam ekran modunda
                  gösterilmesini sağlar.
                </li>
              </ul>
            </li>
            <div className="example">
              <li>
                <strong>Örnek</strong>:
              </li>
              <pre style={{ marginLeft: "40px", marginTop: "10px" }}>
                <code>
                  {`<!DOCTYPE html>
<html lang="tr">
<head>
  <title>Iframe Örneği</title>
</head>
<body>
  <h1>Iframe Kullanımı</h1>
  <iframe src="https://en.wikipedia.org/wiki/Shoto_Todoroki" width="600" height="400" frameborder="0" allowfullscreen>
    Tarayıcınız iframe'i desteklemiyor.
  </iframe>
</body>
</html>


`}
                </code>
              </pre>
            </div>
          </ul>
        </ul>
      </div>

      <div className="content-html">
        <ul style={{ marginTop: "10px" }}>
          <li>
            <strong>Embed (Gömülü İçerik)</strong>: &lt;embed&gt; etiketi,
            harivi medya içeriklerini örneğin(PDF,viide veya Flash dosyaları)
            doğrudan sayfaya eklemek için kullanılır. Özellikle medya
            dosyalarını veya harici belgeleme içeriklerini görtüntülemek için
            idealdir. &lt;embed&gt; , modern tarayıcularda gidewrek azalan Flash
            desteğine alternatif olarak kullanılır, ancak video ve ses dosyaları
            için &lt;video&gt; ve &lt;audio&gt; etiketleri tercih edilir.
          </li>
          <ul>
            <li style={{ marginTop: "10px", marginLeft: "20px" }}>
              <strong>Kullanım</strong>: &lt;embed src="dosya.yolu"
              type="dosya/tipi"&gt;&lt;/embed&gt;
            </li>

            <li style={{ marginTop: "10px", marginLeft: "20px" }}>
              <strong>Özellikler</strong>:
              <ul style={{ marginTop: "10px", marginLeft: "40px" }}>
                <li>
                  <strong>src</strong>; Gösterilecek medya dosyasının yolunu
                  belirtir.
                </li>
                <li>
                  <strong>type</strong>; Dosyanın türünü belirtir (örneğin,
                  application/pdf veya video/mp4)
                </li>
                <li>
                  <strong>width ve height </strong>; Dosyanın genişlik ve
                  yüksekliğini ayarlar.
                </li>
              </ul>
            </li>
            <div className="example">
              <li>
                <strong>Örnek</strong>:
              </li>
              <pre style={{ marginLeft: "40px", marginTop: "10px" }}>
                <code>
                  {`<!DOCTYPE html>
<html lang="tr">
<head>
  <title>Embed Örneği</title>
</head>
<body>
  <h1>PDF Belgesini Gösterme</h1>
  <embed src="dosya.pdf" type="application/pdf" width="600" height="500">
</body>
</html>



`}
                </code>
              </pre>
              <p>
                Bu örnekte, belirtilen pdf dosyası tarayıcı destekliyorsa
                doğrudan sayfa içinde görüntülenecektir. Kullanıcı, sayfa
                içerisinde dosyayı indirebilir veya gezinebilir.
              </p>
            </div>
          </ul>
        </ul>
      </div>
      <div className="content-html">
        <ul style={{ marginTop: "10px" }}>
          <li>
            <strong>Responsive Design ( Duyarlı Tasarım) </strong>: Responsive
            design, web sayfalarının farklı ekran boyutlarında ve cihazlarda
            uyumlu bir şekilde görüntülenmesini sağlar. Bu uyumluluğu sağlamak
            için &lt;meta&gt; etiketindeki viewport ayarı kullanılır. Mobil
            uyumluluğu arttırmak için tasarımda esnek düzenler ve CSS media
            query'leri de yaygın olarak kullanır.
          </li>
          <ul>
            <li style={{ marginTop: "10px", marginLeft: "20px" }}>
              <strong>Kullanım</strong>: &lt;meta name="viewport"
              content="width=device-width, initial-scale=1.0"&gt;&lt;/embed&gt;
              <li style={{ marginTop: "10px", marginLeft: "40px" }}>
                <strong>width=device-width</strong>: Sayfanın genişliğini cihaz
                ekranına ayarlayarak, içeriklerin taşmasına engel olur.
              </li>
              <li style={{ marginTop: "10px", marginLeft: "40px" }}>
                <strong>initial-scale=1.0</strong>: Sayfanın başlangıç ölçeğini
                belirler,yani açıldığında tam boyutunda görünmesini sağlar.
              </li>
            </li>

            <div className="example">
              <li>
                <strong>Örnek</strong>:
              </li>
              <pre style={{ marginLeft: "40px", marginTop: "10px" }}>
                <code>
                  {`<!DOCTYPE html>
<html lang="tr">
<head>
  <title>Responsive Design Örneği</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }
    .container {
      padding: 20px;
      text-align: center;
    }
    .box {
      width: 100%;
      padding: 20px;
      background-color: lightblue;
    }
    @media (min-width: 600px) {
      .box {
        width: 50%;
        margin: 0 auto;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Responsive Tasarım</h1>
    <div class="box">Bu kutu mobilde %100 genişlikte, daha geniş ekranlarda %50 genişlikte.</div>
  </div>
</body>
</html>




`}
                </code>
              </pre>
              <p>
                Bu örnekte, meta viewport ayarı ile sayfa genişliği cihaz
                ekranına göre ayarlanır. .box sınıfı içindeki kutu, ekran
                600px’den geniş olduğunda %50 genişlikte görüntülenir, küçük
                ekranlarda ise %100 genişlikte olur.
              </p>
            </div>
          </ul>
        </ul>
      </div>
      <p>
        Bu özellikler modern web tasarımında etkileşimi artırır, içerik gömme ve
        mobil uyumluluk gibi işlevsellikler sağlar.
      </p>
    </div>
  );
}
export default Html;
