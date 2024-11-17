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
      <div className="content-js">
        <h2>CI/CD: Sürekli Entegrasyon ve Sürekli Dağıtım</h2>
        <p>
          <strong> CI/CD Nedir?</strong>
          <ul>
            <li>
              <strong>Sürekli Entegrasyon (CI)</strong>: Kodun düzenli olarak
              birleştirilmesini sağlar.
            </li>
            <li>
              <strong>Sürekli Dağıtım (CD)</strong>: Kodun sürekli olarak
              dağıtılmasını sağlar.
            </li>
          </ul>
        </p>
        <p>
          <strong>Jenkins Kullanımı</strong>
          <ol>
            <li value="1">Jenkins kurun ve yapılandırın.</li>
            <li value="2">Bir pipeline oluşturun.</li>
            <li value="3">GitHub deposu ile entegre edin.</li>
          </ol>
        </p>
        <p>
          <strong>GitHub Actions</strong>: GitHub Actions ile CI/CD işlemleri
          otomatikleştirilebilir.
          <div className="example-css">
            <pre>
              <code>{`name: CI/CD Pipeline

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
      - run: npm install
      - run: npm test`}</code>
            </pre>
          </div>
        </p>
      </div>

      <div className="content-js">
        <h2>Docker ve Kubernetes</h2>
        <p>
          <strong>Docker Kullanımı</strong>
          <ol>
            <li value="1">Docker kurulumu yapın.</li>
            <li value="2">
              Dockerfile oluşturun:
              <div className="example-css">
                <pre>
                  <code>{`FROM node:14
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "start"]`}</code>
                </pre>
              </div>
            </li>
            <li value="3">
              Docker imajı oluşturun ve çalıştırın:
              <div className="example-css">
                <pre>
                  <code>{`docker build -t my-app .
docker run -p 3000:3000 my-app`}</code>
                </pre>
              </div>
            </li>
          </ol>
          <p>
            <strong>Kubernetes ile Kapsayıcı Yönetimi</strong>
            <ul>
              <li>Pod, Deployment ve Service yapılarını öğrenin.</li>
              <li>
                Bir YAML dosyası ile dağıtım yapın:{" "}
                <div className="example-css">
                  <pre>
                    <code>{`apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 2
  template:
    spec:
      containers:
        - name: my-app
          image: my-app:latest`}</code>
                  </pre>
                </div>
              </li>
            </ul>
          </p>
        </p>
      </div>
      <div className="content-js">
        <h2> İzleme ve Loglama</h2>
        <p>
          <strong>Prometheus ve Grafana</strong>: Prometheus, metrik toplamak
          için kullanılır. Grafana ise görselleştirme yapar.
        </p>
        <p>
          <strong>ELK Stack (Elasticsearch, Logstash, Kibana)</strong>: Loglama
          için güçlü bir araç setidir
          <ul>
            <li>
              <strong>Logstash</strong>: Veriyi işler.
            </li>
            <li>
              <strong>Elasticsearch</strong>: Veriyi saklar ve sorgular.
            </li>
            <li>
              <strong>Kibana</strong>: Veriyi görselleştirir.
            </li>
          </ul>
        </p>
      </div>
      <div className="try-js">
        <p>
          <strong>Denemek İster misin?</strong>
        </p>
        <p>
          <strong>Git, CI/CD ve Docker ile Bir Uygulama Dağıtımı</strong>
        </p>
        <p>
          Adımlar:
          <ul>
            <li>
              <strong>Git</strong>: Projeyi bir Git deposuna ekleyin.
            </li>
            <li>
              <strong>CI/CD</strong>: GitHub Actions kullanarak test ve dağıtım
              süreçlerini otomatikleştirin.
            </li>
            <li>
              <strong>Docker</strong>: Uygulamanızı kapsayıcıya alın.
            </li>
            <li>
              <strong>Kubernetes</strong>: Uygulamanızı ölçekleyin ve yönetin.
            </li>
          </ul>
        </p>
      </div>
      <p>
        Bu tutorial, versiyon kontrol ve DevOps konularında bir yol haritası
        sunar. Pratik yaparak bu bilgileri pekiştirebilirsiniz. Her adımda daha
        fazla derinleşmek için araçların dokümantasyonlarını incelemeyi
        unutmayın!
      </p>
    </div>
  );
}

export default VersionControl;
