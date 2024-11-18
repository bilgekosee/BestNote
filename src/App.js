import "./App.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";

function App() {
  const slider = React.useRef(null);
  const navigate = useNavigate();

  function activate(e) {
    const items = slider.current.querySelectorAll(".item");
    if (e.target.closest(".next")) {
      slider.current.append(items[0]);
    }
    if (e.target.closest(".prev")) {
      slider.current.prepend(items[items.length - 1]);
    }
  }

  React.useEffect(() => {
    document.addEventListener("click", activate, false);
    return () => document.removeEventListener("click", activate);
  }, []);

  const handleHtmlButtonClick = () => {
    navigate("/Html");
  };
  const handleButtonCssClick = () => {
    navigate("/CSS");
  };
  const handleJavaScripClick = () => {
    navigate("/JavaScript");
  };
  const handleframeworkClick = () => {
    navigate("/Framework");
  };
  const handleVersionControlClick = () => {
    navigate("/VersionControl");
  };
  const handleWebSecurityClick = () => {
    navigate("/WebSecurity");
  };

  return (
    <div className="App">
      <div className="mainContainer">
        <ul className="slider" ref={slider}>
          <li
            className="item"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            }}
          >
            <div className="content">
              <h2 className="title">"HTML"</h2>
              <p className="description">
                İşaretleme dili olan Html, web sayfalarının hazırlanmasında
                kullanılan sistemdir. Bir programlama dili olmayan Html
                bilgisayarlarımızda kullandığımız web sitelerinin
                oluşturulmasında kullanılır. Chrome, Fİrefox ve İnternet
                Explorer gibi tarayıcılar html kodlarını işleyerek bu kodları
                web sayfasına dönüştürür.
              </p>
              <button onClick={handleHtmlButtonClick}>Read More</button>
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                "url('https://media.istockphoto.com/id/1513490513/tr/foto%C4%9Fraf/red-megaphone-on-learn-css-written-computer-keyboard.jpg?s=1024x1024&w=is&k=20&c=gXbZghsk5GFR9JUhca-KylHy2i1mahUqL6zgN0_Nj0U=')",
            }}
          >
            <div className="content">
              <h2 className="title">"CSS"</h2>
              <p className="description">
                CSS (Cascading Style Sheet) açılımı “Basamaklı Stil Sayfaları”
                anlamına gelen web sayfalarında “yazı tipi, renk, boyut, arka
                plan ve dokular” gibi ögelerde arzu edilen değişiklikleri
                tanımlamanızı sağlayan bir programlama dilidir.
              </p>
              <button onClick={handleButtonCssClick}>Read More</button>
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <div className="content">
              <h2 className="title">"JavaScript"</h2>
              <p className="description">
                JavaScript, yazılım geliştiricilerinin web sayfaları,
                uygulamalar ve sunucular geliştirirken kullandıkları dinamik
                hafif bir programlama dilidir. JavaScript kullanarak etkileşimli
                ve dinamik web sayfaları geliştirilir. Yazılım geliştiriciler
                tarafından en yaygın kullanılan temel yazılım dillerinin başında
                gelmektedir.
              </p>
              <button onClick={handleJavaScripClick}>Read More</button>
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            }}
          >
            <div className="content">
              <h2 className="title">"Framework"</h2>
              <p className="description">
                Belirli bir dil veya platform için hazırlanmış, yazılımcılara
                belirli yapı ve işlevsellikleri hazır olarak sunan bir
                altyapıdır. Framework’ler, yazılım geliştirme sürecini
                hızlandırmak ve kolaylaştırmak için çeşitli fonksiyonlar,
                kütüphaneler ve yapı taşı kodlarla birlikte gelir. Yazılımcılar,
                sıfırdan her şeyin kodunu yazmak yerine, bu hazır yapıları
                kullanarak projelerini daha hızlı ve düzenli bir şekilde
                oluşturabilirler.
              </p>
              <button onClick={handleframeworkClick}>Read More</button>
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <div className="content">
              <h2 className="title">"Versiyon Kontrol ve DevOps"</h2>
              <p className="description">
                Kod değişikliklerini takip eden ve geliştirme sürecini
                düzenleyen sistemler sayesinde ekipler, proje üzerinde uyumla
                çalışır. DevOps araçları ise, kodun testten geçip hızlıca canlı
                ortama aktarılmasını sağlar, böylece yazılım geliştirme süreci
                daha güvenilir ve verimli hale gelir.
              </p>
              <button onClick={handleVersionControlClick}>Read More</button>
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            }}
          >
            <div className="content">
              <h2 className="title">"Web Güvenliği"</h2>
              <p className="description">
                Web sitelerini ve uygulamaları siber tehditlerden koruma
                pratiğidir. Kötü amaçlı saldırılara (XSS, SQL Injection gibi)
                karşı önlemler alarak, kullanıcı verilerinin ve sistemlerin
                güvenliğini sağlamayı hedefler.
              </p>
              <button onClick={handleWebSecurityClick}>Read More</button>
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1602576666092-bf6447a729fc?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <div className="content">
              <h2 className="title">"UI/UX Tasarım Prensipleri"</h2>
              <p className="description">
                UX kavramı bir tasarımın işleyiş özelliklerini, hızını,
                teknolojik yeterliliğini içerik ve müşteri deneyimini merkeze
                alır. UI kavramı ise bir tasarımın dış görünüşünü yani arayüz
                özelliklerini kapsar. Estetik detaylar ve görünüme dair her şey
                UI ile ilgilidir. UX ve UI, isimlerini İngilizcedeki User
                Experience ve User Interface kelimelerinin baş harflerinden
                alırlar.
              </p>
              <button>Read More</button>
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/11035364/pexels-photo-11035364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            }}
          >
            <div className="content">
              <h2 className="title">"API Kullanımı ve Entegrasyonlar"</h2>
              <p className="description">
                API'ler, iki yazılım bileşeninin belirli tanımlar ve protokoller
                aracılığıyla birbiriyle iletişim kurmasına olanak tanıyan
                mekanizmalardır. Örneğin, meteoroloji müdürlüğünün yazılım
                sistemi, günlük hava durumu verilerini içerir. Telefonunuzdaki
                hava durumu uygulaması, API'ler aracılığıyla bu sistemle
                "konuşur" ve telefonunuzda size günlük hava durumu
                güncellemelerini gösterir.
              </p>
              <button>Read More</button>
            </div>
          </li>
        </ul>
        <nav className="nav">
          <FontAwesomeIcon icon={faArrowLeft} className="btn prev" />
          <FontAwesomeIcon icon={faArrowRight} className="btn next" />
        </nav>
      </div>
    </div>
  );
}

export default App;
