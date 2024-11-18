import React from "react";
import "./WebSecurity.css";

function WebSecurity() {
  return (
    <div className="webSecurity-container">
      <img
        src="https://media.istockphoto.com/id/2149503039/photo/cybersecurity-concept-online-data-protection-and-information-security-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=_mou67exWhQ83iFgEwY4S0oZto1EYcNLESGeFhTNAAE="
        width="500px"
        height="300px"
      ></img>
      <div className="content-webSecurity ">
        <h2>Web Güvenliği Nedir?</h2>
        <p>
          Web güvenliği, web uygulamalarının güvenlik açıklarını önlemek ve kötü
          niyetli saldırılara karşı koruma sağlamak için alınan önlemlerdir.
          Güvenli bir web uygulaması:
          <ul>
            <li>Kullanıcı verilerini korur.</li>
            <li>Hizmet kesintilerini önler.</li>
            <li>Güvenli marka algısı oluşturur.</li>
          </ul>
        </p>
        <p>
          <strong>Günlük Hayattan Bir Örnek</strong>: Bir bankanın web sitesinde
          şifrelerinizi yanlışlıkla bir saldırgana kaptırdığınızı düşünün. Bu
          durumun sonuçları hem maddi hem de manevi olabilir. İşte web
          güvenliği, böyle tehditleri en aza indirmek için uygulanır.
        </p>
        <p>
          <strong>Unutmayın: </strong>Güvenlik bir kerelik bir işlem değil,
          sürekli bir süreçtir.
        </p>
      </div>
      <div className="content-webSecurity">
        <h2> Web Güvenliğinde Temel Kavramlar</h2>
        <p>
          <strong>Tehditler ve Güvenlik Açıkları</strong>
          <ul>
            <li>
              <strong>Tehdit</strong>: Bir saldırganın kötü niyetli amaçlarla
              bir sisteme zarar verme potansiyeli.
            </li>
            <li>
              <strong>Güvenlik Açığı</strong>: Sistemin saldırıya açık olan
              zayıf noktasıdır.
            </li>
          </ul>
        </p>
        <p>
          <strong>Saldırı Yöntemleri</strong>
          <ul>
            <li>
              <strong>Aktif Saldırılar</strong>: Veri manipülasyonu veya
              sistemin çalışmasını engelleme (ör. DDoS saldırısı).
            </li>
            <li>
              <strong>Pasif Saldırılar</strong>: Sistemin bilgilerini gizlice
              toplama (ör. ağ dinleme).
            </li>
          </ul>
        </p>
        <p>
          <strong>Güvenlik Politikaları</strong>: Şirketlerin veya uygulamaların
          uyması gereken kurallar ve prosedürlerdir. Örneğin, "Tüm şifreler en
          az 12 karakter olmalı ve büyük-küçük harf içermeli."
        </p>
      </div>
      <div className="content-webSecurity">
        <h2>Yaygın Web Güvenlik Tehditleri </h2>
        <p>
          <strong>Cross-Site Request Forgery (CSRF)</strong>: CSRF saldırıları,
          kullanıcıların bilgisi olmadan yetkili oldukları bir sistem üzerinde
          istekler yapılmasını sağlar. Bu saldırı türü, kullanıcıların tarayıcı
          oturumlarını kötüye kullanır.
        </p>
        <p>
          <strong>CSRF Koruması İçin Çözümler</strong>
          <ol>
            <li value="1">
              <strong>CSRF Token Kullanımı</strong>: Her istekle birlikte sunucu
              tarafından üretilen ve doğrulanan benzersiz bir token gönderin.
            </li>
            <li value="2">
              <strong>SameSite Cookie Özelliği</strong>: Tarayıcı çerezlerini
              yalnızca aynı kökenli (origin) isteklerde kullanılabilir hale
              getirin:
              <div className="example-css">
                <pre>
                  <code>{`Set-Cookie: sessionId=abc123; SameSite=Strict;`}</code>
                </pre>
              </div>
            </li>
            <li value="3">
              <strong>Kullanıcıya Özel Oturumlar</strong>: Her oturum için
              benzersiz kimlik doğrulama mekanizmaları kullanın.
              <div className="example-css">
                <pre>
                  <code>{`// CSRF Token Kontrolü
app.post('/transfer', (req, res) => {
  if (req.body.csrfToken !== req.session.csrfToken) {
    return res.status(403).send('CSRF doğrulaması başarısız.');
  }
  // İşlem devam eder
});`}</code>
                </pre>
              </div>
            </li>
          </ol>
        </p>
      </div>
      <div className="content-webSecurity">
        <h2>HTTPS ve SSL/TLS</h2>
        <p>
          <strong>HTTPS Nedir ve Nasıl Çalışır?</strong>
        </p>
        <p>
          HTTPS (HyperText Transfer Protocol Secure), HTTP protokolünün
          şifrelenmiş bir versiyonudur. Verilerin sunucu ile kullanıcı arasında
          güvenli bir şekilde iletilmesini sağlar. HTTPS, SSL/TLS (Secure Socket
          Layer/Transport Layer Security) protokollerini kullanır.
        </p>
        <p>
          <strong>HTTPS'in Avantajları:</strong>
          <ul>
            <li>Verilerin şifrelenmesi.</li>
            <li>
              Kimlik doğrulama ile "man-in-the-middle" saldırılarının önlenmesi.
            </li>
            <li>Google ve diğer arama motorlarında SEO avantajı.</li>
          </ul>
        </p>
        <p>
          <strong>HTTPS Nasıl Etkinleştirilir?</strong>
          <ol>
            <li value="1">
              Bir SSL/TLS sertifikası alın. Örnek:
              <a href="https://letsencrypt.org/" target="#blank">
                {" "}
                Let’s Encrypt
              </a>
            </li>
            <li value="2">Web sunucunuza yükleyin (Apache, Nginx, vb.).</li>
            <li value="3">
              HTTP'den HTTPS'ye yönlendirme yapın:
              <div className="example-css">
                <pre>
                  <code>{`server {
    listen 80;
    server_name example.com;
    return 301 https://example.com$request_uri;
}`}</code>
                </pre>
              </div>
            </li>
          </ol>
        </p>
      </div>
      <div className="content-webSecurity">
        <h2>Kimlik Doğrulama ve Yetkilendirme</h2>
        <p>
          <strong>Şifre Yönetimi</strong>: Kullanıcı şifrelerini güvende tutmak
          için şu yöntemleri uygulayın
          <ol>
            <li value="1">
              <strong>Güçlü Şifre Politikaları:</strong> Şifreler en az 12
              karakter olmalı ve hem büyük hem küçük harfler, rakamlar ve özel
              karakterler içermeli.
            </li>
            <li value="2">
              <strong>Şifre Hashleme:</strong> Şifreleri düz metin olarak
              saklamayın. Bunun yerine bcrypt veya argon2 gibi algoritmalar
              kullanarak hashleyin.
              <div className="example-css">
                <pre>
                  <code>{`const bcrypt = require('bcrypt');
const hashedPassword = await bcrypt.hash(userPassword, 10);`}</code>
                </pre>
              </div>
            </li>
          </ol>
        </p>
        <p>
          <strong>Çok Faktörlü Doğrulama (MFA)</strong>
        </p>
      </div>
    </div>
  );
}
export default WebSecurity;
