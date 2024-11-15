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
    </div>
  );
}
export default Framework;
