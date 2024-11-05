import React from "react";
import "./CSS.css";
function CSS() {
  return (
    <div className="css-container">
      <img
        src="https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
    </div>
  );
}
export default CSS;
