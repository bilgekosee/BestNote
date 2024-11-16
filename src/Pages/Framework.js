import React from "react";
import "./Framework.css";

function Framework() {
  return (
    <div className="framework-container">
      <img src="./frameworks.png" width="500px" height="300px"></img>
      <div className="content-framework">
        <h2>Framework Nedir?</h2>
        <p>
          Bir framework, belirli bir türdeki uygulamaları geliştirmek için
          standart bir yol sağlayan bir yapı ve araç setidir. Örneğin, bir web
          framework'ü, bir web sitesi veya uygulaması oluşturmak için temel
          bileşenler ve fonksiyonlar sunar.
        </p>
        <p>
          <strong>Avantajları:</strong>
          <ul>
            <li>Hızlı geliştirme süreci.</li>
            <li>Standartlaştırılmış yapılar.</li>
            <li>Büyük topluluk ve destek.</li>
          </ul>
        </p>
        <p>
          <strong>Dezavantajları:</strong>
          <ul>
            <li>Öğrenme eğrisi olabilir.</li>
            <li>Esnekliği azaltabilir.</li>
          </ul>
        </p>
      </div>
      <div className="content-js">
        <h2>Framework vs Kütüphane</h2>
        <table id="framework">
          <tr>
            <th>Özellik</th>
            <th>Framework</th>
            <th>Kütüphane</th>
          </tr>
          <tr>
            <td>Kontrol Akışı</td>
            <td>Framework kontrolü sağlar.</td>
            <td>Kodunuz kontrolü sağlar.</td>
          </tr>
          <tr>
            <td>Kullanım Amacı</td>
            <td>Bir uygulama için genel yapı sunar.</td>
            <td>Belirli bir problemi çözer.</td>
          </tr>
          <tr>
            <td>Örnekler</td>
            <td>React, Angular, Django</td>
            <td>Lodash, Axios</td>
          </tr>
        </table>
      </div>
      <div className="content-js">
        <h2>Popüler Frameworkler</h2>
        <p>
          <strong>Frontend Frameworkler</strong>
          <ul>
            <li>
              <strong>React</strong>: Facebook tarafından geliştirilen bir
              kütüphane, ancak genellikle bir framework gibi kullanılır.
            </li>
            <li>
              <strong>Vue.js</strong>: Hafif ve öğrenmesi kolay bir framework.
            </li>
            <li>
              <strong>Angular</strong>: Google tarafından desteklenen, büyük
              projeler için ideal bir framework.
            </li>
          </ul>
        </p>
        <p>
          <strong>Backend Frameworkler</strong>
          <ul>
            <li>
              <strong>Express.js</strong>: Node.js tabanlı hafif bir framework.
            </li>
            <li>
              <strong>Django</strong>: Python tabanlı, hızlı geliştirme sağlayan
              bir framework.
            </li>
            <li>
              <strong>Ruby on Rails</strong>: Ruby ile MVC yapısı sunar.
            </li>
          </ul>
        </p>
        <p>
          <strong>Mobil Frameworkler</strong>
          <ul>
            <li>
              <strong>React Native</strong>: Hem iOS hem de Android uygulamaları
              için kullanılır.
            </li>
            <li>
              <strong>Flutter</strong>: Google tarafından geliştirilen bir mobil
              framework.
            </li>
            <li>
              <strong>Ionic</strong>: Web teknolojileri ile mobil uygulama
              geliştirmeye imkan tanır.
            </li>
          </ul>
        </p>
      </div>
      <div className="content-js">
        <h2> Frontend Framework Örneği: React</h2>
        <p>
          <strong>React Kurulumu</strong>
          <ol>
            <li value="1">Node.js'i indirin ve yükleyin.</li>
            <li value="2">
              Yeni bir React projesi oluşturun:
              <div className="example-css">
                <pre>
                  <code>{`npx create-react-app my-app
cd my-app
npm start`}</code>
                </pre>
              </div>
            </li>
          </ol>
        </p>
        <p>
          <strong>Component Yapısı</strong>: React da her şey bileşendir:
          <div className="example-css">
            <pre>
              <code>{`function Welcome(props) {
  return <h1>Merhaba, {props.name}!</h1>;
}`}</code>
            </pre>
          </div>
        </p>
        <p>
          <strong>Props ve State</strong>
          <ul>
            <li>
              <strong>Props</strong>: Veri taşımak için kullanılır.
            </li>
            <li>
              <strong>State</strong>: Dinamik verileri yönetmek için kullanılır.
            </li>
          </ul>
        </p>
      </div>
      <div className="content-js">
        <h2>Backend Framework Örneği: Express.js</h2>
        <p>
          <strong>Express.js Kurulumu</strong>
          <ol>
            <li value="1">Node.js'i yükleyin.</li>
            <li value="2">
              Proje oluşturun ve Express yükleyin:
              <div className="example-css">
                <pre>
                  <code>{`mkdir my-app
cd my-app
npm init -y
npm install express`}</code>
                </pre>
              </div>
            </li>
          </ol>
          <h3>Basit API Oluşturma</h3>
          <div className="example-css">
            <pre>
              <code>{`const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Merhaba Dünya!');
});

app.listen(3000, () => {
  console.log('Sunucu 3000 portunda çalışıyor.');
});`}</code>
            </pre>
          </div>
          <h3>Middleware Kullanımı</h3>
          <div className="example-css">
            <pre>
              <code>{`app.use((req, res, next) => {
  console.log('Ziyaretçi geldi.');
  next();
});
});`}</code>
            </pre>
          </div>
        </p>
      </div>
      <div className="content-js">
        <h2>Mobil Framework Örneği: React Native</h2>
        <p>
          <strong>React Native Kurulumu</strong>
          <ol>
            <li value="1">React Native CLI'yi yükleyin:</li>
            <div className="example-css">
              <pre>
                <code>{`npm install -g react-native-cli
react-native init MyProject
cd MyProject
react-native run-android`}</code>
              </pre>
            </div>
          </ol>
        </p>
        <p>
          <strong>Basit Bir Mobil Uygulama</strong>
          <div className="example-css">
            <pre>
              <code>{`import React from 'react';
import { Text, View } from 'react-native';

const App = () => (
  <View>
    <Text>Merhaba React Native!</Text>
  </View>
);

export default App;`}</code>
            </pre>
          </div>
        </p>
      </div>
      <div className="content-js">
        <h2>Framework Seçerken Dikkat Edilmesi Gerekenler</h2>
        <ul>
          <li>
            <strong>Proje Gereksinimleri</strong>: Büyük bir projede Angular,
            küçük bir projede Vue daha uygun olabilir.
          </li>
          <li>
            <strong>Topluluk ve Dokümantasyon</strong>: Büyük topluluklar daha
            fazla destek sağlar.
          </li>
          <li>
            <strong>Performans</strong>: Uygulamanın hız gereksinimleri göz
            önünde bulundurulmalıdır.
          </li>
        </ul>
      </div>
      <div className="try-js">
        <p>
          <strong>Denemek İster misin?</strong>
        </p>
        <p>
          <strong>Uygulamalı Örnek:</strong> Full Stack Proje Geliştirme:Bir
          React frontend ve Express.js backend kullanarak tam bir uygulama
          geliştirin.
          <ol>
            <li value="1">React ile kullanıcı arayüzünü oluşturun.</li>
            <li value="2">Express.js ile bir API geliştirin.</li>
            <li value="3">Frontend ve backend'i entegre edin.</li>
          </ol>
        </p>
      </div>
      <p>
        Bu tutorial, frameworkler hakkında temel ve ileri düzey bilgileri
        öğrenmeniz için bir rehberdir. Her bölümde daha fazla detay ve
        uygulamalı örneklerle çalışabilirsiniz. Öğrenme sürecinde bol bol pratik
        yapmayı unutmayın!
      </p>
    </div>
  );
}
export default Framework;
