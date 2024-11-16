import React from "react";
import "./VersionControl.css";
function VersionControl() {
  return (
    <div className="version-container">
      <img
        src="https://media.istockphoto.com/id/1352203098/photo/devops-software-development-and-it-operations-engineer-working-in-agile-methodology.webp?a=1&b=1&s=612x612&w=0&k=20&c=jP0fXJ1bS29ztm0HKdTg7Tom7fKIt8lCmvxGtx-zf3I="
        width="500px"
        height="300px"
      ></img>
      <div className="content-js">
        <h2>Versiyon Kontrol Nedir?</h2>
        <p>
          Versiyon kontrol, yazılım projelerindeki değişiklikleri takip etmek ve
          yönetmek için kullanılan bir sistemdir. Proje üzerinde çalışan ekip
          üyelerinin farklı sürümler üzerinde birlikte çalışmasını sağlar.
        </p>
        <p>
          <strong>Avantajları</strong>:
          <ul>
            <li>Kod değişikliklerini geri alabilme.</li>
          </ul>
          <ul>
            <li>Ekip çalışmasını kolaylaştırma.</li>
          </ul>
          <ul>
            <li>Kodun güvenli bir şekilde saklanması.</li>
          </ul>
        </p>
      </div>
      <div className="content-js">
        <h2>Versiyon Kontrol Sistemleri</h2>
        <p>
          <strong>Yerel Versiyon Kontrol Sistemleri</strong>: Bu sistemler
          sadece yerel makinenizde çalışır. Örnek: RCS (Revision Control
          System).
        </p>
        <p>
          <strong>Merkezi Versiyon Kontrol Sistemleri</strong>: Kod merkezi bir
          sunucuda saklanır. Örnek: SVN (Apache Subversion).
        </p>
        <p>
          <strong>Dağıtık Versiyon Kontrol Sistemleri</strong>: Tüm geçmiş
          kopyalar yerel depoda bulunur. Örnek: Git.
        </p>
      </div>
      <div className="content-js">
        <h2>Git ve GitHub</h2>
        <p>
          <strong>Git Kurulumu</strong>
          <ul>
            <li>Git'i indirin ve yükleyin.</li>
            <li>
              Kurulumu doğrulamak için terminalde:
              <div className="example-css">
                <pre>
                  <code>{`git --version`}</code>
                </pre>
              </div>
            </li>
          </ul>
        </p>
        <p>
          <strong>Temel Git Komutları</strong>
          <ul>
            <li>
              <strong>Depo oluşturma</strong>: git init
            </li>
            <li>
              <strong>Dosya Ekleme</strong>: git add .
            </li>
            <li>
              <strong>Değişiklikleri Kaydetme</strong>: git commit -m "commit
              mesajı"
            </li>
            <li>
              <strong>Uzaktaki Depoya Bağlanma</strong>:git remote add origin
              &lt;URL&gt;
            </li>
            <li>
              <strong>Kod Gönderme</strong>: git push
            </li>
          </ul>
        </p>
        <p>
          <strong>Github Kullanımı</strong>
          <ul>
            <li>Bir depo oluşturun ve bağlantısını alın.</li>
            <li>&gt;Yerel dosyalarınızı GitHub'a gönderin.</li>
            <li>Pull Request ve Branch Yönetimi yapın.</li>
          </ul>
        </p>
      </div>
      <div className="content-js">
        <h2>DevOps Nedir?</h2>
        <p>
          DevOps, yazılım geliştirme (Development) ve IT operasyonlarının
          (Operations) birleştirilmesiyle oluşturulan bir metodolojidir. Amaç,
          yazılım geliştirme ve dağıtım sürecini otomatikleştirmektir.
        </p>
        <p>
          <strong>Prensipleri</strong>:
          <ul>
            <li>Sürekli İyileştirme.</li>
            <li>İş birliği ve iletişim.</li>
            <li>Otomasyon ve izleme.</li>
          </ul>
        </p>
        <p>
          <strong>DevOps Araçları</strong>:
          <ul>
            <li>
              <strong>CI/CD: </strong>Jenkins, GitHub Actions
            </li>
            <li>
              <strong>Kapsayıcı: </strong>Docker, Kubernetes
            </li>
            <li>
              <strong>İzleme: </strong>Prometheus, Grafana
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default VersionControl;
