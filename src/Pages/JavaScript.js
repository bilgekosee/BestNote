import React from "react";
import "./JavaScript.css";
function JavaScript() {
  return (
    <div className="js-container">
      <img
        src="https://images.unsplash.com/photo-1667372393096-9c864313e868?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width="500px"
        height="300px"
      ></img>
      <div className="content-js">
        <h2>JavaScript Nedir?</h2>
        <p>
          JavaScript, web sayfalarına interaktif özellikler eklemek için
          kullanılan popüler bir programlama dilidir. HTML ve CSS ile birlikte
          çalışarak kullanıcı etkileşimlerine yanıt verebilen dinamik içerikler
          oluşturur.
        </p>
        <ul className="ul-style">
          <li>HTML sayfanın yapısını,</li>
          <li>CSS sayfanın stilini,</li>
          <li>JavaScript ise sayfanın davranışını kontrol eder.</li>
        </ul>
      </div>

      <div className="content-js">
        <h2>JavaScript Nasıl Çalışır?</h2>
        <p>
          JavaScript kodları, bir web tarayıcısı tarafından çalıştırılır ve web
          sayfasında kullanıcı etkileşimlerine yanıt verir. Basit bir örnekle
          JavaScript’in HTML içine nasıl yerleştirildiğini gösterelim.
        </p>
        <p style={{ marginTop: "10px" }}>
          <strong>JavaScript’i HTML’ye Ekleme</strong>:
        </p>
        <div className="example-css">
          <pre>
            <code>
              {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Example</title>
</head>
<body>

<h1>Merhaba, JavaScript!</h1>

<!-- JavaScript kodlarımızı buraya ekleyeceğiz -->
<script>
    alert("Hoş geldin! Bu bir JavaScript alert mesajıdır.");
</script>

</body>
</html>

`}
            </code>
          </pre>
        </div>
        <p>
          Bu kodu bir HTML dosyası olarak kaydedip tarayıcıda açtığınızda, "Hoş
          geldin! Bu bir JavaScript alert mesajıdır." şeklinde bir uyarı
          penceresi çıkacaktır. Bu, JavaScript'in çalıştığını doğrulamanın kolay
          bir yoludur.
        </p>
      </div>

      <div className="content-js">
        <h2>Temel JavaScript Kavramları</h2>
        <p>JavaScript’e giriş yaparken öğreneceğimiz bazı temel kavramlar:</p>
        <ul className="ul-style-title">
          <li>
            <strong>Değişkenler</strong>: Veriyi saklamak için kullanılır.
          </li>
          <li>
            <strong>Veri Tipleri</strong>: Sayılar, metinler, nesneler gibi
            farklı veri tipleri vardır.
          </li>
          <li>
            <strong>Koşullar</strong>: Kodun belirli bir koşulda çalışmasını
            sağlar.
          </li>
          <li>
            <strong>Döngüler</strong>: Belirli bir işlemi tekrar etmek için
            kullanılır.
          </li>
          <li>
            <strong>Fonksiyonlar</strong>: Belirli bir görevi yerine getiren kod
            bloklarıdır.
          </li>
        </ul>
        <p>Öncelikle değişkenlerle başlayalım mı?</p>
      </div>

      <div className="content-js">
        <h2>Değişkenler Nedir?</h2>
        <p>
          Değişkenler, veriyi saklamak için kullandığımız isimlendirilmiş
          kutular gibi düşünülebilir. JavaScript’te değişken tanımlamak için üç
          ana anahtar kelime kullanılır:
        </p>
        <ul>
          <li>var (eski yöntem, genellikle tercih edilmez)</li>
          <li>let (modern ve en çok kullanılan yöntem)</li>
          <li>const (sabit değere sahip değişkenler için kullanılır)</li>
        </ul>
      </div>

      <div className="content-js">
        <h2>Değişken Tanımlama</h2>
        <p>Değişken tanımlarken şu yapıyı kullanırız:</p>
        <div className="example-css">
          <pre>
            <code>{`let isim = "Ahmet"; // isim değişkeni "Ahmet" değerine sahip
const yas = 25;     // yas değişkeni 25 değerine sahip ve değiştirilemez
`}</code>
          </pre>
        </div>
      </div>

      <div className="content-js">
        <h2>let ve const Arasındaki Fark</h2>

        <ul>
          <li>
            let ile tanımlanan değişkenlerin değeri daha sonra değiştirilebilir.
          </li>
          <li>
            const ile tanımlanan değişkenlerin değeri ise tanımlandıktan sonra
            değiştirilemez.
          </li>
        </ul>
        <div className="example-css">
          <pre>
            <code>{`let renk = "mavi";
console.log(renk); // Çıktı: mavi

renk = "yeşil";
console.log(renk); // Çıktı: yeşil

const dogumYili = 1990;
console.log(dogumYili); // Çıktı: 1990

// dogumYili = 1991; // Bu hata verir çünkü const ile tanımlanmış bir değişken değiştirilemez.
`}</code>
          </pre>
        </div>
      </div>

      <div className="content-js">
        <h2>Veri Tipleri</h2>
        <p>JavaScript’te değişkenler farklı veri tiplerinde olabilir:</p>
        <ul>
          <li>
            <strong>String</strong>: Metinsel değerler ("Merhaba" gibi).
          </li>
          <li>
            <strong>Number</strong>: Sayısal değerler (100 veya 3.14 gibi).
          </li>
          <li>
            <strong>Boolean</strong>: Doğru veya yanlış değerler (true veya
            false).
          </li>
          <li>
            <strong>Object</strong>: Birden çok değeri saklamak için kullanılır.
          </li>
          <li>
            <strong>Array</strong>: Liste halinde birden çok değeri saklar.
          </li>
        </ul>
        <div className="example-css">
          <pre>
            <code>{`let isim = "Ali";        // String
let yas = 30;            // Number
let ogrenciMi = true;    // Boolean
let renkler = ["kırmızı", "mavi", "yeşil"]; // Array
let kisi = { isim: "Ali", yas: 30 }; // Object
`}</code>
          </pre>
        </div>
      </div>

      <div className="content-js">
        <h2>Pratik: Konsolda Çıktı Gösterme</h2>
        <p>
          JavaScript'te console.log() ile değişkenlerin değerlerini tarayıcı
          konsolunda görebiliriz. Bu, hata ayıklamada ve kodları test ederken
          çok faydalıdır.
        </p>
        <div className="example-css">
          <pre>
            <code>{`let isim = "Ahmet";
console.log(isim); // Çıktı: Ahmet

let yas = 25;
console.log("Yaş:", yas); // Çıktı: Yaş: 25
`}</code>
          </pre>
        </div>

        <div className="try-js">
          <p>
            <strong>Denemek İster misin?</strong>
          </p>
          <p>
            Kendi değişkenlerini tanımlayıp, console.log() ile çıktısını
            görebilirsin. Birkaç farklı veri tipiyle deneme yaparak
            değişkenlerin nasıl çalıştığını test edelim.
          </p>
          <br />
          <p>
            O zaman birkaç örnekle birlikte değişken tanımlayıp console.log()
            ile çıktıları görelim! Aşağıdaki örnekleri kendi ortamında
            deneyebilir veya tarayıcının geliştirici araçlarında (F12 ile açılan
            "Konsol" bölümünde) çalıştırabilirsin.
          </p>
          <ol>
            <li value="1">Basit Bir Değişken Tanımlama</li>
            <div className="example-css">
              <pre>
                <code>{`let isim = "Ali";
console.log(isim); // Çıktı: Ali
`}</code>
              </pre>
            </div>
            <li value="2">Birkaç Farklı Veri Tipiyle Değişken Tanımlama</li>
            <div className="example-css">
              <pre>
                <code>{`let yas = 25;                // Number
let sehir = "İstanbul";      // String
let ogrenciMi = true;        // Boolean
let hobiler = ["resim", "yüzme", "kitap okuma"]; // Array
let kisi = { isim: "Ali", yas: 25 }; // Object

console.log("Yaş:", yas);
console.log("Şehir:", sehir);
console.log("Öğrenci mi?", ogrenciMi);
console.log("Hobiler:", hobiler);
console.log("Kişi Bilgileri:", kisi);

`}</code>
              </pre>
            </div>
            <li value="3"> const Kullanımı ve Sabit Değişkenler</li>
            <div className="example-css">
              <pre>
                <code>{`const dogumYili = 1995;
console.log("Doğum Yılı:", dogumYili);

// dogumYili = 1996; // Bu satırı açarsan hata verir çünkü const ile tanımlanan değişkenler değiştirilemez.


`}</code>
              </pre>
            </div>

            <li value="4">Değişken Değerlerini Değiştirme javascript</li>
            <div className="example-css">
              <pre>
                <code>{`let renk = "mavi";
console.log("Renk:", renk); // Çıktı: mavi

renk = "kırmızı"; // değeri değiştiriyoruz
console.log("Yeni Renk:", renk); // Çıktı: kırmızı



`}</code>
              </pre>
            </div>
          </ol>
        </div>
      </div>

      <div className="content-js">
        <h2>Koşul İfadeleri (Conditional Statements)</h2>
        <p>
          Koşul ifadeleri, belirli durumlara göre farklı kod bloklarının
          çalışmasını sağlar. En çok kullanılan koşul ifadesi if ve else
          yapısıdır. Bir koşul doğruysa (true), if bloğu çalışır. Eğer yanlışsa
          (false), else bloğuna geçilir.
        </p>
        <ol>
          <li value="1"> if ve else Yapısı </li>
          <div className="example-css">
            <pre>
              <code>{`let yas = 20;

if (yas >= 18) {
    console.log("Ehliyet alabilirsiniz.");
} else {
    console.log("Ehliyet almak için yaşınız küçük.");
}
`}</code>
            </pre>
          </div>
          <li value="2">
            <strong>else if Yapısı</strong>: Birden fazla koşulu kontrol etmek
            için else if kullanırız. Bu sayede, farklı durumlara göre farklı
            işlemler gerçekleştirebiliriz.
          </li>
          <div className="example-css">
            <pre>
              <code>{`let not = 85;

if (not >= 90) {
    console.log("Notunuz: A");
} else if (not >= 80) {
    console.log("Notunuz: B");
} else if (not >= 70) {
    console.log("Notunuz: C");
} else {
    console.log("Notunuz: F");
}
`}</code>
            </pre>
          </div>
          <li value="3"> === ve == Farkı</li>
          <p style={{ marginLeft: "40px" }}>
            JavaScript’te iki farklı eşitlik operatörü vardır:
            <ul>
              <li>
                <strong>==</strong>: Sadece değerleri karşılaştırır. (Örneğin
                "5" == 5 doğru kabul edilir).
              </li>
              <li>
                <strong>===</strong>: Hem değeri hem veri tipini karşılaştırır.
                (Örneğin "5" === 5 yanlış kabul edilir).
              </li>
            </ul>
          </p>
          <p>
            Genellikle, kesin eşitlik kontrolü (===) daha güvenilir olduğu için
            tercih edilir.
          </p>
          <li value="4">Mantıksal Operatörler</li>
          <p style={{ marginLeft: "40px" }}>
            Birden fazla koşulu birleştirmek için mantıksal operatörler
            kullanabiliriz:
            <ul>
              <li>
                <strong>&& (ve)</strong>: Her iki koşul doğruysa çalışır.
              </li>
              <li>
                <strong>|| (veya)</strong>: Koşullardan biri doğruysa çalışır.
              </li>
              <li>
                <strong>! (değil)</strong>: Koşulun tersini alır.
              </li>
              <div className="example-css">
                <pre>
                  <code>{`let yas = 25;
let ogrenciMi = true;

if (yas > 18 && ogrenciMi) {
    console.log("Yetişkin bir öğrencisiniz.");
} else {
    console.log("Yetişkin bir öğrenci değilsiniz.");
}

let sehir = "İstanbul";
if (sehir === "Ankara" || sehir === "İstanbul") {
    console.log("Türkiye'nin büyük şehirlerinden birindesiniz.");
}
`}</code>
                </pre>
              </div>
            </ul>
          </p>
        </ol>
        <div className="try-js">
          <p>
            <strong>Denemek İster misin?</strong>
          </p>
          <p>
            Yukarıdaki örnekleri kendi koşullarınla değiştirip çalıştırarak if,
            else if, else ve mantıksal operatörleri test edebilirsin.
          </p>

          <p>
            Harika! Kendi örneklerini oluşturup çalıştırmayı deneyebilirsin.
            İşte birkaç öneri:
          </p>

          <ol>
            <li value="1">
              Bir kişinin yaşı 18 veya daha büyükse "Reşitsiniz", aksi takdirde
              "Reşit değilsiniz" mesajı versin. Bu durumda if-else yapısını
              kullanabilirsin.
            </li>
            <div className="example-css">
              <pre>
                <code>{`let yas = 17; // Bu değeri değiştirerek farklı çıktıları görebilirsin

if (yas >= 18) {
    console.log("Reşitsiniz.");
} else {
    console.log("Reşit değilsiniz.");
}
`}</code>
              </pre>
            </div>
            <li value="2">
              Bir sıcaklık değeri tanımla ve şu koşullara göre çıktı ver:
              <ul>
                <li>Sıcaklık 30 derece ve üzeriyse "Hava çok sıcak",</li>
                <li>20 ile 29 derece arasındaysa "Hava güzel",</li>
                <li>10 ile 19 derece arasındaysa "Hava serin",</li>
                <li>10 derecenin altındaysa "Hava soğuk" mesajı versin.</li>
              </ul>
            </li>
            <div className="example-css">
              <pre>
                <code>{`let sicaklik = 15; // Bu değeri farklı sıcaklıklarla test edebilirsin

if (sicaklik >= 30) {
    console.log("Hava çok sıcak.");
} else if (sicaklik >= 20) {
    console.log("Hava güzel.");
} else if (sicaklik >= 10) {
    console.log("Hava serin.");
} else {
    console.log("Hava soğuk.");
}

`}</code>
              </pre>
            </div>
            <li value="3">
              Öğrenci Notları Örneği =&gt; Bir öğrencinin notunu not değişkenine
              ata ve şu koşullara göre bir mesaj ver:
              <ul>
                <li>85 ve üzerindeyse "Geçti (Pekiyi)",</li>
                <li>70 ile 84 arasındaysa "Geçti (İyi)",</li>
                <li>50 ile 69 arasındaysa "Geçti (Orta)",</li>
                <li>50'nin altındaysa "Kaldı".</li>
              </ul>
            </li>
            <div className="example-css">
              <pre>
                <code>{`let not = 78; // Farklı notlarla dene

if (not >= 85) {
    console.log("Geçti (Pekiyi)");
} else if (not >= 70) {
    console.log("Geçti (İyi)");
} else if (not >= 50) {
    console.log("Geçti (Orta)");
} else {
    console.log("Kaldı");
}


`}</code>
              </pre>
            </div>
          </ol>
        </div>
      </div>

      <div className="content-js">
        <h2>Döngüler (Loops)</h2>
        <p>
          Döngüler, belirli bir işlemi tekrar tekrar yapmamızı sağlar.
          JavaScript'te en çok kullanılan döngüler şunlardır:
        </p>
        <ul className="ul-style">
          <li>for döngüsü</li>
          <li>while döngüsü</li>
          <li>do...while döngüsü</li>
          <li>
            for...of ve for...in döngüleri (diziler ve nesneler için özel
            döngüler)
          </li>
        </ul>
        <ol>
          <li value="1">
            <strong>for Döngüsü</strong>: for döngüsü, belirli bir sayıda
            tekrarlamak istediğimiz işlemler için idealdir.
          </li>
          <p>
            {" "}
            <strong>Yapısı:</strong>
          </p>
          <div className="example-css">
            <pre>
              <code>{`for (başlangıç; koşul; artırma/azaltma) {
    // Tekrar edilecek kod
}
`}</code>
            </pre>
          </div>
          <p>
            <strong>Örnek: </strong>1’den 5’e Kadar Sayıları Yazdırma
          </p>
          <div className="example-css">
            <pre>
              <code>{`for (let i = 1; i <= 5; i++) {
    console.log(i);
}
`}</code>
            </pre>
          </div>
          <ul>
            <p>Bu kodda:</p>
            <li>let i = 1: i değişkenini 1 olarak başlatır.</li>
            <li>
              i &lt;= 5: Döngü i 5'ten küçük veya eşit olduğu sürece devam eder.
            </li>
            <li>i++: Her döngü sonunda i bir artırılır.</li>
            <p>
              <strong>Çıktı:</strong>
            </p>
            <div className="example-css">
              <pre>
                <code>{`1
2
3
4
5

`}</code>
              </pre>
            </div>
          </ul>
          <li value="2">
            <strong>while Döngüsü</strong>: while döngüsü, koşul doğru olduğu
            sürece çalışır. Bu döngüyü, döngü sayısını önceden bilmediğimiz
            durumlarda kullanabiliriz.
          </li>
          <p>
            <strong>Örnek: </strong>1’den 5’e Kadar Sayıları Yazdırma
          </p>
          <div className="example-css">
            <pre>
              <code>{`let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

}
`}</code>
            </pre>
          </div>
          <p>
            Bu örnekte, i değişkeni 5'e ulaşana kadar while döngüsü çalışmaya
            devam eder.
          </p>
          <li value="3">
            <strong> do...while Döngüsü</strong>: do...while döngüsü, önce bir
            kez çalışır, ardından koşulu kontrol eder. Koşul doğruysa çalışmaya
            devam eder; değilse durur.
          </li>
          <p>
            <strong>Örnek: </strong>1’den 5’e Kadar Sayıları Yazdırma
          </p>
          <div className="example-css">
            <pre>
              <code>{`let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);

`}</code>
            </pre>
          </div>

          <li value="4">
            <strong> for...of ve for...in Döngüleri</strong>: Bu döngüler, dizi
            veya nesne elemanları üzerinde gezinmek için kullanılır.
          </li>
          <ul>
            <li>for...of: Diziler üzerinde gezinmek için.</li>
            <li>for...in: Nesneler üzerinde gezinmek için.</li>
          </ul>
          <p>
            <strong>Örnek: </strong>for...of ile Dizi Elemanlarını Yazdırma
          </p>
          <div className="example-css">
            <pre>
              <code>{`let renkler = ["kırmızı", "mavi", "yeşil"];
for (let renk of renkler) {
    console.log(renk);
}
`}</code>
            </pre>
          </div>
          <p>
            <strong>Çıktı:</strong>
          </p>
          <div className="example-css">
            <pre>
              <code>{`kırmızı
mavi
yeşil
`}</code>
            </pre>
          </div>

          <p>
            <strong>Örnek: </strong>for...in ile Nesne Özelliklerini Yazdırma
          </p>
          <div className="example-css">
            <pre>
              <code>{`let kisi = { isim: "Ali", yas: 30, sehir: "İstanbul" };
for (let ozellik in kisi) {
    console.log(ozellik + ": " + kisi[ozellik]);
}
`}</code>
            </pre>
          </div>
          <p>
            <strong>Çıktı:</strong>
          </p>
          <div className="example-css">
            <pre>
              <code>{`isim: Ali
yas: 30
sehir: İstanbul
`}</code>
            </pre>
          </div>
        </ol>
        <div className="try-js">
          <p>
            <strong>Denemek İster misin?</strong>
          </p>
          <p>
            Bu döngüleri farklı koşullarla denemek, döngüleri kavramana yardımcı
            olacaktır.
          </p>
          <br />
          <p>
            Harika! Şimdi birkaç döngü örneği yaparak öğrendiklerimizi
            pekiştirelim. Bu örnekleri deneyerek ve kendi koşullarını ekleyerek
            döngüler hakkında daha fazla pratik yapabilirsin.
          </p>
          <ol>
            <li value="1">
              <strong>for Döngüsü ile Çift Sayıları Yazdırma</strong>: 1'den
              10'a kadar olan sayılar içinde sadece çift olanları yazdıralım.
            </li>
            <div className="example-css">
              <pre>
                <code>{`for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) { // i'yi 2'ye böldüğümüzde kalan 0 ise çift sayıdır
        console.log(i);
    }
}
`}</code>
              </pre>
            </div>
            <p>
              <strong>Çıktı:</strong>
            </p>
            <div className="example-css">
              <pre>
                <code>{`2
4
6
8
10
`}</code>
              </pre>
            </div>
            <li value="2">
              <strong>while Döngüsü ile Geriye Sayma</strong>: Bir sayıyı
              belirleyip sıfıra kadar geriye sayalım.
            </li>
            <div className="example-css">
              <pre>
                <code>{`let sayi = 5;
while (sayi >= 0) {
    console.log(sayi);
    sayi--;
}
`}</code>
              </pre>
            </div>
            <p>
              <strong>Çıktı:</strong>
            </p>
            <div className="example-css">
              <pre>
                <code>{`5
4
3
2
1
0
`}</code>
              </pre>
            </div>
            <li value="3">
              <strong>
                do...while Döngüsü ile Kullanıcı Girişi Simülasyonu
              </strong>
              : do...while döngüsü kullanarak basit bir kullanıcı şifresi sorusu
              soralım. Şifre doğruysa döngü durur, yanlışsa tekrar sorar.
            </li>
            <div className="example-css">
              <pre>
                <code>{`for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) { // i'yi 2'ye böldüğümüzde kalan 0 ise çift sayıdır
        console.log(i);
    }
}
`}</code>
              </pre>
            </div>
            <p>
              <strong>Çıktı:</strong>
            </p>
            <div className="example-css">
              <pre>
                <code>{`2
4
6
8
10
`}</code>
              </pre>
            </div>
            <li value="2">
              <strong>while Döngüsü ile Geriye Sayma</strong>: Bir sayıyı
              belirleyip sıfıra kadar geriye sayalım.
            </li>
            <div
              className="example-css"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <pre>
                <code>{`let sifre;
do {
    sifre = prompt("Lütfen şifrenizi girin:");
} while (sifre !== "12345"); // Şifre doğru girilene kadar döner

console.log("Giriş başarılı!");

`}</code>
              </pre>
              <p>
                <strong>Not:</strong> Bu örneği bir web tarayıcısında
                çalıştırabilirsin, çünkü prompt yalnızca tarayıcı ortamında
                çalışır.
              </p>
            </div>
            <li value="4">
              <strong> for...of ile Dizi Elemanlarına Erişme</strong>: Bir renk
              dizisi tanımlayıp tüm elemanlarını yazdıralım.
            </li>
            <div className="example-css">
              <pre>
                <code>{`let renkler = ["kırmızı", "mavi", "yeşil", "sarı"];
for (let renk of renkler) {
    console.log(renk);
}
`}</code>
              </pre>
            </div>
            <p>
              <strong>Çıktı:</strong>
            </p>
            <div className="example-css">
              <pre>
                <code>{`kırmızı
mavi
yeşil
sarı
`}</code>
              </pre>
            </div>
            <li value="5">
              <strong>for...in ile Nesne Özelliklerine Erişme</strong>: Bir
              nesne tanımlayıp tüm özelliklerini ve değerlerini yazdıralım.
            </li>
            <div className="example-css">
              <pre>
                <code>{`let ogrenci = { isim: "Ayşe", yas: 22, bolum: "Bilgisayar Mühendisliği" };
for (let ozellik in ogrenci) {
    console.log(ozellik + ": " + ogrenci[ozellik]);
}
`}</code>
              </pre>
            </div>
            <p>
              <strong>Çıktı:</strong>
            </p>
            <div className="example-css">
              <pre>
                <code>{`isim: Ayşe
yas: 22
bolum: Bilgisayar Mühendisliği
`}</code>
              </pre>
            </div>
          </ol>
        </div>
      </div>

      <div className="content-js">
        <h2>Fonksiyonlar Nedir?</h2>
        <p>
          Fonksiyonlar, belirli bir görevi yerine getiren kod bloklarıdır.
          Kodların tekrar kullanılmasını sağlar ve kodu daha düzenli hale
          getirir. Bir fonksiyon oluşturduğumuzda, o fonksiyonu istediğimiz
          kadar çağırarak çalıştırabiliriz.
        </p>
      </div>
      <div className="content-js">
        <h3>Fonksiyon Tanımlama</h3>
        <p>
          JavaScript’te fonksiyon tanımlamak için function anahtar kelimesini
          kullanırız.
        </p>
        <div className="example-css">
          <pre>
            <code>{`function selamVer() {
    console.log("Merhaba!");
}
`}</code>
          </pre>
          <p>
            Bu örnekte selamVer adında bir fonksiyon tanımladık. Bu fonksiyon
            Merhaba! yazdırır.
          </p>
        </div>
      </div>

      <div className="content-js">
        <h3>Fonksiyon Çağırma</h3>
        <p>
          Fonksiyonu çalıştırmak için fonksiyon adını ve ardından () kullanırız.
        </p>
        <div className="example-css">
          <pre>
            <code>{`selamVer(); // Çıktı: Merhaba!

`}</code>
          </pre>
        </div>
      </div>
      <div className="content-js">
        <h3>Parametreler ve Argümanlar</h3>
        <p>
          Fonksiyonlara dışarıdan veri göndermek için parametreler kullanırız.
          Fonksiyonu çağırırken bu parametrelere verdiğimiz değerlere ise
          argüman denir.
        </p>
        <div className="example-css">
          <pre>
            <code>{`function selamVer(isim) { // isim parametresi alıyor
    console.log("Merhaba, " + isim + "!");
}

selamVer("Ali"); // Çıktı: Merhaba, Ali!
selamVer("Ayşe"); // Çıktı: Merhaba, Ayşe!
`}</code>
          </pre>
        </div>
      </div>

      <div className="content-js">
        <h3>Geri Döndürme (Return) Değeri</h3>
        <p>
          Fonksiyonlar, bir işlem sonucunu geri döndürebilir. return anahtar
          kelimesi ile bu değeri döndürebiliriz.
        </p>
        <div className="example-css">
          <pre>
            <code>{`function topla(sayi1, sayi2) {
    return sayi1 + sayi2;
}

let sonuc = topla(5, 3);
console.log("Toplam:", sonuc); // Çıktı: Toplam: 8
`}</code>
          </pre>
        </div>
      </div>
      <div className="content-js">
        <h3>Arrow (Ok) Fonksiyonları</h3>
        <p>
          JavaScript’te function yerine =&gt; kullanarak daha kısa yazılan arrow
          fonksiyonları da vardır.
        </p>
        <div className="example-css">
          <pre>
            <code>{`const carp = (a, b) => a * b;
console.log(carp(4, 5)); // Çıktı: 20
`}</code>
          </pre>
          <p>
            <strong>Not: </strong>Arrow fonksiyonları, özellikle kısa ve tek
            satırlık işlemler için oldukça kullanışlıdır.
          </p>
        </div>
      </div>

      <div className="content-js">
        <h2>Diziler (Arrays)</h2>
        <p>
          Diziler, birden fazla değeri tek bir değişkende saklamamızı sağlayan
          veri yapılarıdır. Bir dizi, sıralı bir şekilde verileri saklar ve bu
          verilere indeksleri aracılığıyla erişebiliriz.
        </p>
      </div>
      <div className="content-js">
        <h3>Dizi Oluşturma</h3>
        <p>Bir dizi oluşturmak için köşeli parantez [] kullanırız.</p>

        <div className="example-css">
          <pre>
            <code>{`let meyveler = ["Elma", "Muz", "Portakal"];
`}</code>
          </pre>
          <p>
            Bu örnekte meyveler adında bir dizi tanımladık ve içine üç adet
            meyve ismi ekledik.
          </p>
        </div>
      </div>

      <div className="content-js">
        <h3>Dizi Elemanlarına Erişim</h3>
        <p>
          Dizideki elemanlara indeksleri kullanarak erişiriz. JavaScript'te
          dizilerin indeksleri 0'dan başlar.
        </p>
        <div className="example-css">
          <pre>
            <code>{`console.log(meyveler[0]); // Çıktı: Elma
console.log(meyveler[1]); // Çıktı: Muz
console.log(meyveler[2]); // Çıktı: Portakal
`}</code>
          </pre>
        </div>
      </div>

      <div className="content-js">
        <h3>Dizi Uzunluğu</h3>
        <p>
          Bir dizinin eleman sayısını öğrenmek için length özelliğini
          kullanırız.
        </p>
        <div className="example-css">
          <pre>
            <code>{`console.log(meyveler.length); // Çıktı: 3
`}</code>
          </pre>
        </div>
      </div>

      <div className="content-js">
        <h3>Diziye Eleman Ekleme</h3>
        <ul>
          <li>Sonuna eklemek için push() kullanılır:</li>
          <div className="example-css">
            <pre>
              <code>{`meyveler.push("Çilek");
console.log(meyveler); // Çıktı: ["Elma", "Muz", "Portakal", "Çilek"]
`}</code>
            </pre>
          </div>
          <li>Başına eklemek için unshift() kullanılır:</li>
          <div className="example-css">
            <pre>
              <code>{`meyveler.unshift("Kiraz");
console.log(meyveler); // Çıktı: ["Kiraz", "Elma", "Muz", "Portakal", "Çilek"]
`}</code>
            </pre>
          </div>
        </ul>
      </div>

      <div className="content-js">
        <h3>Diziden Eleman Silme</h3>
        <ul>
          <li>Son elemanı silmek için pop() kullanılır:</li>
          <div className="example-css">
            <pre>
              <code>{`let sonEleman = meyveler.pop();
console.log(sonEleman); // Çıktı: Çilek
console.log(meyveler);   // Çıktı: ["Kiraz", "Elma", "Muz", "Portakal"]

`}</code>
            </pre>
          </div>
          <li>İlk elemanı silmek için shift() kullanılır:</li>
          <div className="example-css">
            <pre>
              <code>{`let ilkEleman = meyveler.shift();
console.log(ilkEleman); // Çıktı: Kiraz
console.log(meyveler);  // Çıktı: ["Elma", "Muz", "Portakal"]
`}</code>
            </pre>
          </div>
        </ul>
      </div>

      <div className="content-js">
        <h3>Dizi Elemanlarını Döngü ile Yazdırma</h3>
        <ol>
          <li value="1">for döngüsü kullanarak:</li>
          <div className="example-css">
            <pre>
              <code>{`for (let i = 0; i < meyveler.length; i++) {
  console.log(meyveler[i]);
}
`}</code>
            </pre>
          </div>
          <li value="2">for...of döngüsü kullanarak:</li>
          <div className="example-css">
            <pre>
              <code>{`for (let meyve of meyveler) {
  console.log(meyve);
}
`}</code>
            </pre>
          </div>
        </ol>
      </div>

      <div className="content-js">
        <h3>Dizi Metotları</h3>
        <ul>
          <li>
            <strong>indexOf()</strong>: Belirli bir elemanın dizideki indeksini
            bulur.
          </li>
          <div className="example-css">
            <pre>
              <code>{`let indeks = meyveler.indexOf("Muz");
console.log(indeks); // Çıktı: 1
`}</code>
            </pre>
          </div>
          <li>
            <strong>includes()</strong>: Dizinin belirli bir elemanı içerip
            içermediğini kontrol eder.
          </li>
          <div className="example-css">
            <pre>
              <code>{`let varMi = meyveler.includes("Portakal");
console.log(varMi); // Çıktı: true
`}</code>
            </pre>
          </div>
          <li>
            <strong>splice()</strong>: Diziden eleman eklemek veya silmek için
            kullanılır.
          </li>
          <div className="example-css">
            <pre>
              <code>{`// 1. indeksden başlayarak 1 eleman sil ve yerine "Kivi" ekle
meyveler.splice(1, 1, "Kivi");
console.log(meyveler); // Çıktı: ["Elma", "Kivi", "Portakal"]
`}</code>
            </pre>
          </div>
          <li>
            <strong>slice()</strong>: Dizinin belirli bir bölümünü yeni bir dizi
            olarak döndürür.
          </li>
          <div className="example-css">
            <pre>
              <code>{`let yeniDizi = meyveler.slice(0, 2);
console.log(yeniDizi); // Çıktı: ["Elma", "Kivi"]
`}</code>
            </pre>
          </div>
        </ul>
      </div>

      <div className="content-js">
        <h3>Çok Boyutlu Diziler</h3>
        <p>
          Diziler içinde diziler saklayarak çok boyutlu diziler oluşturabiliriz.
        </p>
        <div className="example-css">
          <pre>
            <code>{`let sayilar = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(sayilar[0][1]); // Çıktı: 2

`}</code>
          </pre>
        </div>
      </div>

      <div className="content-js">
        <h3>Dizi ile Basit Uygulama</h3>
        <p>
          Bir öğrencinin notlarını tutan bir dizi oluşturup ortalamasını
          hesaplayalım.
        </p>
        <div className="example-css">
          <pre>
            <code>{`let notlar = [90, 85, 78, 92, 88];

let toplam = 0;
for (let not of notlar) {
  toplam += not;
}

let ortalama = toplam / notlar.length;
console.log("Ortalama Not:", ortalama); // Çıktı: Ortalama Not: 86.6


`}</code>
          </pre>
        </div>
      </div>
      <div className="try-js">
        <p>
          <strong>Denemek İster misin?</strong>
        </p>
        <ul className="ul-style">
          <li>
            Kendi dizi örneklerini oluşturup eleman ekleme, silme ve değiştirme
            işlemlerini deneyebilirsin.
          </li>
          <li>
            Bir alışveriş listesi oluşturup elemanları ekleyip çıkarabilirsin.
          </li>
          <li>
            Bir dizi içindeki en büyük veya en küçük sayıyı bulmaya
            çalışabilirsin.
          </li>
        </ul>
      </div>

      <div className="content-js">
        <h2>Nesneler Nedir?</h2>
        <p>
          Nesneler, JavaScript'te verileri anahtar-değer (key-value) çiftleri
          olarak saklamamıza olanak tanır. Gerçek dünyadaki varlıkları veya
          özellikleri modellemek için çok kullanışlıdır. Örneğin, bir kişiyi
          tanımlarken isim, yaş ve meslek gibi özellikleri tek bir nesnede
          saklayabiliriz.
        </p>
      </div>

      <div className="content-js">
        <h3>Nesne Oluşturma</h3>
        <p>
          Bir nesne oluşturmak için süslü parantez {} kullanırız ve özellikleri
          (property) anahtar-değer çiftleri olarak ekleriz.
        </p>
        <div className="example-css">
          <pre>
            <code>{`let kisi = {
    isim: "Ali",
    yas: 25,
    meslek: "Mühendis"
};
`}</code>
          </pre>
          <p>
            Bu örnekte, kisi adında bir nesne oluşturduk. Bu nesne isim, yas ve
            meslek özelliklerine sahiptir.
          </p>
        </div>
      </div>

      <div className="content-js">
        <h3>Nesne Özelliklerine Erişim</h3>
        <p>Nesne özelliklerine iki şekilde erişebiliriz:</p>
        <ol>
          <li value="1">Nokta Notasyonu (.)</li>
          <div className="example-css">
            <pre>
              <code>{`console.log(kisi.isim); // Çıktı: Ali
console.log(kisi.yas);  // Çıktı: 25
`}</code>
            </pre>
          </div>
          <li value="2">Köşeli Parantez Notasyonu ([])</li>
          <div className="example-css">
            <pre>
              <code>{`console.log(kisi["isim"]); // Çıktı: Ali
console.log(kisi["yas"]);  // Çıktı: 25
`}</code>
            </pre>
          </div>
        </ol>
      </div>

      <div className="content-js">
        <h3>Nesne Metotları</h3>
        <p>
          Nesneler aynı zamanda fonksiyonları özellik olarak saklayabilir. Bu
          tür özelliklere metot denir.
        </p>
        <div className="example-css">
          <pre>
            <code>{`let araba = {
    marka: "Toyota",
    model: 2020,
    bilgiVer: function() {
        return this.marka + " " + this.model;
    }
};

console.log(araba.bilgiVer()); // Çıktı: Toyota 2020
`}</code>
          </pre>
          <p>
            Bu örnekte, bilgiVer adında bir metot oluşturduk. this anahtar
            kelimesi, o anki nesneye (araba) referans verir.
          </p>
        </div>
      </div>

      <div className="content-js">
        <h3>Nesnelerde Döngü Kullanma</h3>
        <p>
          for...in döngüsünü kullanarak bir nesnedeki tüm özellikleri
          gezebiliriz.
        </p>
        <div className="example-css">
          <pre>
            <code>{`for (let ozellik in kisi) {
    console.log(ozellik + ": " + kisi[ozellik]);
}
`}</code>
          </pre>
        </div>
        <p>
          <strong>Çıktı:</strong>
        </p>
        <div className="example-css">
          <pre>
            <code>{`isim: Ali
yas: 26
meslek: Mühendis
sehir: İstanbul
`}</code>
          </pre>
        </div>
      </div>

      <div className="content-js">
        <h3>Nesneler ve Diziler Birlikte</h3>
        <p>
          Nesneler ve diziler sıklıkla birlikte kullanılır. Örneğin, bir dizi
          içinde nesneler saklayabiliriz.
        </p>
        <div className="example-css">
          <pre>
            <code>{`let ogrenciler = [
    { isim: "Ali", yas: 20 },
    { isim: "Ayşe", yas: 22 },
    { isim: "Mehmet", yas: 21 }
];

for (let ogrenci of ogrenciler) {
    console.log(ogrenci.isim + " - Yaş: " + ogrenci.yas);
}
`}</code>
          </pre>
        </div>
        <p>
          <strong>Çıktı:</strong>
        </p>
        <div className="example-css">
          <pre>
            <code>{`Ali - Yaş: 20
Ayşe - Yaş: 22
Mehmet - Yaş: 21
`}</code>
          </pre>
        </div>
      </div>
      <div className="content-js">
        <h2>Hata Yakalama (Error Handling)</h2>
        <p>
          JavaScript'te hataları yakalamak ve yönetmek için try, catch, finally,
          ve throw yapıları kullanılır.
        </p>
        <ol>
          <li value="1">
            <strong>try</strong>: Hata oluşabilecek kod bloğunu yazarız.
          </li>
          <li value="2">
            <strong>catch</strong>: Bir hata oluştuğunda çalışacak kodu
            belirleriz.
          </li>
          <li value="3">
            <strong>finally</strong>: Hata olsa da olmasa da her zaman çalışacak
            kodu buraya yazarız.
          </li>
          <li value="4">
            <strong>throw</strong>: Kendi özel hatamızı fırlatmak (üretmek) için
            kullanılır.
          </li>
        </ol>
      </div>
      <div className="content-js">
        <h3>try...catch Yapısı</h3>
        <p>
          try...catch, bir hata oluştuğunda programın durmasını engelleyerek,
          hatayı yakalayıp kontrol etmemize olanak tanır.
        </p>
        <div className="example-css">
          <pre>
            <code>{`try {
    let sonuc = 10 / 0; // Sıfıra bölme hatası yok ama örnek olarak ele alabiliriz
    console.log(sonuc);
} catch (hata) {
    console.log("Bir hata oluştu: " + hata.message);
}
`}</code>
          </pre>
        </div>
        <p>
          <strong>
            Çıktı (JavaScript sıfıra bölme hatası vermediği için normalde işlem
            yapılır ancak hatayı varsayalım):
          </strong>
        </p>
        <div className="example-css">
          <pre>
            <code>{`Bir hata oluştu: Infinity
`}</code>
          </pre>
        </div>
      </div>

      <div className="content-js">
        <h3>throw ile Hata Fırlatma</h3>
        <p>
          throw ile kendi hatalarımızı tanımlayabiliriz. Örneğin, belirli bir
          koşul karşılanmadığında hata oluşturabiliriz.
        </p>
        <div className="example-css">
          <pre>
            <code>{`function yasKontrol(yas) {
    if (yas < 18) {
        throw new Error("Yaş 18'den küçük olamaz.");
    } else {
        console.log("Ehliyet başvurusu yapılabilir.");
    }
}

try {
    yasKontrol(15); // Hata fırlatılır
} catch (hata) {
    console.log("Hata: " + hata.message);
}
`}</code>
          </pre>
        </div>
        <p>
          <strong>Çıktı:</strong>
        </p>
        <div className="example-css">
          <pre>
            <code>{`Hata: Yaş 18'den küçük olamaz.
`}</code>
          </pre>
        </div>
      </div>

      <div className="content-js">
        <h3>finally Bloğu</h3>
        <p>
          finally bloğu, hata olsun ya da olmasın her durumda çalışır.
          Genellikle temizleme işlemleri (örneğin, bir dosya kapatma veya veri
          tabanı bağlantısını sonlandırma) için kullanılır.
        </p>
        <div className="example-css">
          <pre>
            <code>{`try {
    let sonuc = 10 / 2;
    console.log("Sonuç:", sonuc);
} catch (hata) {
    console.log("Bir hata oluştu.");
} finally {
    console.log("Bu işlem her durumda çalışır.");
}
`}</code>
          </pre>
        </div>
        <p>
          <strong>Çıktı:</strong>
        </p>
        <div className="example-css">
          <pre>
            <code>{`Sonuç: 5
Bu işlem her durumda çalışır.
`}</code>
          </pre>
        </div>
      </div>

      <div className="content-js">
        <h3>Hata Nesnesi</h3>
        <p>
          JavaScript’te hata oluştuğunda Error nesnesi üretilir. Bu nesne,
          message, name gibi özellikler içerir.
        </p>
        <div className="example-css">
          <pre>
            <code>{`try {
    let sonuc = sayi / 2; // "sayi" tanımlı değil, bu bir hata oluşturur
} catch (hata) {
    console.log("Hata Adı:", hata.name);
    console.log("Hata Mesajı:", hata.message);
}
`}</code>
          </pre>
        </div>
        <p>
          <strong>Çıktı:</strong>
        </p>
        <div className="example-css">
          <pre>
            <code>{`Hata Adı: ReferenceError
Hata Mesajı: sayi is not defined
`}</code>
          </pre>
        </div>
      </div>

      <div className="content-js">
        <h2>Asenkron Programlama Nedir?</h2>
        <p>
          Asenkron programlama, işlemleri aynı anda yürütmeyi sağlar.
          JavaScript, tek iş parçacıklı (single-threaded) bir dildir; yani aynı
          anda sadece bir işlem yapabilir. Ancak asenkron programlama sayesinde
          zaman alan işlemler başlatıldığında JavaScript onları beklemeden diğer
          kodları çalıştırmaya devam eder.
        </p>
      </div>

      <div className="content-js">
        <h2>Callback Fonksiyonları</h2>
        <p>
          Asenkron işlemleri yönetmenin ilk yolu callback fonksiyonları
          kullanmaktır. Bir fonksiyona callback eklediğimizde, işlemin
          tamamlanmasının ardından bu fonksiyon çalışır.
        </p>
        <div className="example-css">
          <pre>
            <code>{`function islemYap(callback) {
    setTimeout(() => {
        console.log("İşlem tamamlandı.");
        callback();
    }, 2000); // 2 saniye bekle
}

islemYap(() => {
    console.log("Callback çalıştı.");
});
`}</code>
          </pre>
        </div>
        <p>
          <strong>Çıktı:</strong>
        </p>
        <div className="example-css">
          <pre>
            <code>{`İşlem tamamlandı.
Callback çalıştı.
`}</code>
          </pre>
          <p>
            Bu örnekte islemYap fonksiyonu bir işlem yapıyor ve işlem
            tamamlanınca callback fonksiyonu çalışıyor.
          </p>
        </div>
      </div>

      <div className="content-js">
        <h2>Promise Yapısı</h2>
        <p>
          Promise, JavaScript’te asenkron işlemleri daha kolay yönetmek için
          kullanılan bir yapıdır. Bir işlem başarılı olduğunda resolve,
          başarısız olduğunda reject ile sonuçlanır.
        </p>
        <br />
        <p>
          <strong>Promise Durumları</strong>
        </p>
        <ul>
          <li>
            <strong>Pending (Beklemede)</strong>: İşlem devam ediyor.
          </li>
          <li>
            <strong>Fulfilled (Tamamlandı)</strong>: İşlem başarıyla tamamlandı.
          </li>
          <li>
            <strong>Rejected (Başarısız)</strong>: İşlem başarısız oldu.
          </li>
        </ul>
        <p>
          <strong>Promise Oluşturma ve Kullanma</strong>
        </p>
        <div className="example-css">
          <pre>
            <code>{`let soz = new Promise((resolve, reject) => {
    let basarili = true; // Bu değeri false yaparak hatayı görebilirsin
    if (basarili) {
        resolve("İşlem başarılı!");
    } else {
        reject("İşlem başarısız.");
    }
});

soz
    .then(sonuc => console.log(sonuc)) // İşlem başarılıysa çalışır
    .catch(hata => console.log(hata)); // İşlem başarısızsa çalışır
`}</code>
          </pre>
        </div>
        <p>
          <strong>Çıktı (başarılıysa):</strong>
        </p>
        <div className="example-css">
          <pre>
            <code>{`İşlem başarılı!
`}</code>
          </pre>
        </div>
        <p>
          <strong>Çıktı (başarısızsa):</strong>
        </p>
        <div className="example-css">
          <pre>
            <code>{`İşlem başarısız!
`}</code>
          </pre>
        </div>
        <p>
          <strong>then ve catch Metotları</strong>
        </p>
        <ul>
          <li>
            <strong>then()</strong>: resolve edildiğinde (başarılı olduğunda)
            çalışır.
          </li>
          <li>
            <strong>catch()</strong>: reject edildiğinde (başarısız olduğunda)
            çalışır.
          </li>
        </ul>
      </div>

      <div className="content-js">
        <h2>Async ve Await</h2>
        <p>
          async ve await ile asenkron işlemleri daha kolay bir şekilde
          yazabiliriz. async fonksiyonu içinde await ile bir işlemi
          bekleyebiliriz. Bu, kodun daha okunaklı ve senkronize görünmesini
          sağlar.
        </p>
        <div className="example-css">
          <pre>
            <code>{`function uzunIslem() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Uzun işlem tamamlandı.");
        }, 2000);
    });
}

async function islemYonet() {
    console.log("İşlem başlıyor...");
    let sonuc = await uzunIslem(); // Bu işlem bitene kadar bekler
    console.log(sonuc);
    console.log("İşlem bitti!");
}

islemYonet();
`}</code>
          </pre>
        </div>
        <p>
          <strong>Çıktı:</strong>
        </p>
        <div className="example-css">
          <pre>
            <code>{`İşlem başlıyor...
(Uzun işlem tamamlandıktan sonra)
Uzun işlem tamamlandı.
İşlem bitti!
`}</code>
          </pre>
        </div>
      </div>

      <div className="content-js">
        <h2>Asenkron Programlamanın Kullanım Alanları</h2>

        <ul>
          <li>
            <strong>API çağrıları</strong>: Sunucudan veri çekmek veya göndermek
            için.
          </li>
          <li>
            <strong>Dosya işlemleri</strong>: Büyük dosyaları okuma/yazma gibi
            zaman alan işlemler.
          </li>
          <li>
            <strong>Zamanlayıcılar</strong>: setTimeout ve setInterval ile
            belirli bir süre sonra işlem başlatma.
          </li>
        </ul>
      </div>

      <div className="content-js">
        <h2>DOM'a Erişim</h2>
        <p>HTML elemanlarına erişmek için birkaç temel yöntem vardır:</p>
        <ol>
          <li value="1">
            <strong>getElementById</strong>: Belirli bir ID'ye sahip olan
            elementi seçer.
          </li>
          <div className="example-css">
            <pre>
              <code>{`let baslik = document.getElementById("baslik");
`}</code>
            </pre>
          </div>
          <li value="2">
            <strong>getElementsByClassName</strong>: Belirli bir sınıf (class)
            adıyla eşleşen tüm elementleri bir liste olarak seçer.
          </li>
          <div className="example-css">
            <pre>
              <code>{`let kartlar = document.getElementsByClassName("kart");
`}</code>
            </pre>
          </div>
          <li value="3">
            <strong>getElementsByTagName</strong>: Belirli bir etiket adıyla
            eşleşen tüm elementleri bir liste olarak seçer.
          </li>
          <div className="example-css">
            <pre>
              <code>{`let paragraflar = document.getElementsByTagName("p");
`}</code>
            </pre>
          </div>
          <li value="4">
            <strong>querySelector</strong>: Belirli bir CSS seçiciyle (selector)
            eşleşen ilk elementi seçer.
          </li>
          <div className="example-css">
            <pre>
              <code>{`let anaBaslik = document.querySelector("h1");
`}</code>
            </pre>
          </div>
          <li value="5">
            <strong>querySelectorAll</strong>: Belirli bir CSS seçiciyle
            (selector) eşleşen tüm elementleri bir liste olarak seçer
          </li>
          <div className="example-css">
            <pre>
              <code>{`let butonlar = document.querySelectorAll(".btn");
`}</code>
            </pre>
          </div>
        </ol>
      </div>
      <div className="content-js">
        <h2>DOM ile İçerik Değiştirme</h2>
        <p>
          Eriştiğimiz elemanların içeriğini değiştirmek için innerHTML,
          textContent veya innerText özelliklerini kullanabiliriz.
        </p>
        <div className="example-css">
          <pre>
            <code>{`<h1 id="baslik">Merhaba Dünya!</h1>

<script>
    let baslik = document.getElementById("baslik");
    baslik.innerHTML = "JavaScript ile Güncellendi!";
</script>
`}</code>
          </pre>
          <p>
            Bu örnekte, &lt;h1 id="baslik"&gt; elementinin içeriği JavaScript
            ile Güncellendi! olarak değiştirildi.
          </p>
        </div>
      </div>
      <div className="content-js">
        <h2>Stil Değiştirme</h2>
        <p>
          JavaScript ile elementlerin stillerini değiştirmek için style
          özelliğini kullanırız.
        </p>
        <div className="example-css">
          <pre>
            <code>{`let baslik = document.getElementById("baslik");
baslik.style.color = "blue";
baslik.style.fontSize = "24px";
`}</code>
          </pre>
        </div>
      </div>
      <div className="content-js">
        <h2>DOM ile Yeni Eleman Ekleme</h2>
        <p>Sayfaya dinamik olarak yeni elemanlar eklemek için:</p>
        <ol>
          <li value="1">
            <strong>createElement</strong>: Yeni bir eleman oluşturur.
          </li>
          <li value="2">
            <strong>appendChild</strong>: Yeni elemanı bir üst elemana ekler.
          </li>
        </ol>
        <div className="example-css">
          <pre>
            <code>{`<div id="liste"></div>

<script>
    let yeniEleman = document.createElement("p");
    yeniEleman.textContent = "Bu bir yeni paragraf.";
    
    let liste = document.getElementById("liste");
    liste.appendChild(yeniEleman);
</script>
`}</code>
          </pre>
          <p>Bu kod, liste adlı div elemanının içine yeni bir paragraf ekler</p>
        </div>
      </div>
      <div className="content-js">
        <h2>DOM ile Eleman Silme</h2>
        <p>
          Bir elemanı silmek için removeChild veya remove metodunu
          kullanabiliriz.
        </p>
        <div className="example-css">
          <pre>
            <code>{`<ul id="menu">
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
</ul>

<script>
    let menu = document.getElementById("menu");
    let item = menu.querySelector("li");
    menu.removeChild(item);
</script>
`}</code>
          </pre>
          <p>Bu kod, menu listesindeki ilk öğeyi (Home) siler.</p>
        </div>
      </div>

      <div className="content-js">
        <h2>Olaylar (Events)</h2>
        <p>
          DOM ile etkileşimi artırmak için olayları (events) kullanırız. En
          yaygın kullanılan olaylar:
        </p>
        <ul>
          <li>
            <strong>click</strong>: Tıklanma olayı.
          </li>
          <li>
            <strong>mouseover</strong>: Üzerine gelme olayı.
          </li>
          <li>
            <strong>mouseout</strong>: Üzerinden ayrılma olayı.
          </li>
        </ul>
        <div className="example-css">
          <pre>
            <code>{`<button id="buton">Tıkla!</button>

<script>
    let buton = document.getElementById("buton");
    buton.addEventListener("click", function() {
        alert("Butona tıklandı!");
    });
</script>
`}</code>
          </pre>
          <p>Bu örnekte, butona tıklandığında bir uyarı mesajı görüntülenir.</p>
        </div>
      </div>
      <div className="content-js">
        <h2>Local Storage ve Session Storage Nedir?</h2>
        <ul>
          <li>
            <strong>Local Storage</strong>: Tarayıcı kapatıldıktan sonra bile
            veriyi saklar. Bu, uzun süreli veri saklama için idealdir.
          </li>
          <li>
            <strong>Session Storage</strong>: Veriyi sadece tarayıcı oturumu
            boyunca saklar. Tarayıcıyı kapattığınızda veya sekmeyi
            kapattığınızda veri silinir.
          </li>
        </ul>
      </div>

      <div className="content-js">
        <h3>Local Storage Kullanımı</h3>
        <p>
          Local Storage ile veri saklamak için setItem, getItem, removeItem ve
          clear gibi metotları kullanırız.
        </p>
        <ol>
          <li value="1">
            <strong>Veri Saklama</strong>: Veri saklamak için setItem metodunu
            kullanırız.
          </li>
          <div className="example-css">
            <pre>
              <code>{`localStorage.setItem("kullaniciAdi", "Ali");
localStorage.setItem("yas", 25);
`}</code>
            </pre>
          </div>
          <li value="2">
            <strong>Veri Okuma</strong>: Veriyi almak için getItem metodunu
            kullanırız.
          </li>
          <div className="example-css">
            <pre>
              <code>{`let kullaniciAdi = localStorage.getItem("kullaniciAdi");
console.log(kullaniciAdi); // Çıktı: Ali

let yas = localStorage.getItem("yas");
console.log(yas); // Çıktı: 25
`}</code>
            </pre>
          </div>

          <li value="3">
            <strong>Veri Silme</strong>: Belirli bir veriyi silmek için
            removeItem metodunu kullanırız.
          </li>
          <div className="example-css">
            <pre>
              <code>{`localStorage.removeItem("yas");
`}</code>
            </pre>
          </div>
          <li value="4">
            <strong>Tüm Veriyi Temizleme</strong>: Tüm veriyi silmek için clear
            metodunu kullanırız.
          </li>
          <div className="example-css">
            <pre>
              <code>{`localStorage.clear();
`}</code>
            </pre>
          </div>
        </ol>
      </div>
      <div className="content-js">
        <h3>Session Storage Kullanımı</h3>
        <p>
          Session Storage, Local Storage ile aynı metotlara sahiptir, tek farkı
          tarayıcı kapatıldığında verinin silinmesidir.
        </p>
        <div className="example-css">
          <pre>
            <code>{`// Veri Saklama
sessionStorage.setItem("sehir", "İstanbul");

// Veri Okuma
let sehir = sessionStorage.getItem("sehir");
console.log(sehir); // Çıktı: İstanbul

// Veri Silme
sessionStorage.removeItem("sehir");

// Tüm Veriyi Temizleme
sessionStorage.clear();
`}</code>
          </pre>
        </div>
      </div>
      <div className="content-js">
        <h2>Veriyi JSON Formatında Saklama</h2>
        <p>
          Local ve Session Storage yalnızca string veri türünü kabul eder. Bu
          nedenle, bir nesneyi veya diziyi saklamak için önce JSON.stringify()
          ile string formatına dönüştürmemiz gerekir. Daha sonra, sakladığımız
          veriyi tekrar nesne olarak kullanmak için JSON.parse() ile geri
          dönüştürürüz.
        </p>
        <div className="example-css">
          <pre>
            <code>{`let kullanici = { isim: "Ali", yas: 25, sehir: "Ankara" };

// Nesneyi string olarak sakla
localStorage.setItem("kullanici", JSON.stringify(kullanici));

// Veriyi oku ve nesneye dönüştür
let saklananKullanici = JSON.parse(localStorage.getItem("kullanici"));
console.log(saklananKullanici.isim); // Çıktı: Ali
console.log(saklananKullanici.yas);  // Çıktı: 25
`}</code>
          </pre>
        </div>
        <p>
          <strong>Kullanım Alanları</strong>
        </p>
        <ul>
          <li>
            <strong>Kullanıcı Tercihlerini Saklama</strong>: Temalar, dil
            ayarları, bildirim tercihleri gibi kullanıcı tercihlerini saklamak
            için kullanılabilir.
          </li>
          <li>
            <strong>Form Verilerini Kaydetme</strong>: Kullanıcının doldurduğu
            form verilerini geçici olarak saklamak için kullanılabilir.
          </li>
          <li>
            <strong>Alışveriş Sepeti</strong>: E-ticaret sitelerinde ürünleri
            sepetinize ekleyip, sayfayı yenilediğinizde sepetin korunmasını
            sağlamak için kullanılabilir.
          </li>
        </ul>
      </div>
      <div className="content-js">
        <h2>JSON Nedir?</h2>
        <p>
          JSON, anahtar-değer çiftlerinden oluşur ve JavaScript nesnelerine çok
          benzer. Hem insan tarafından okunabilir hem de makine tarafından
          kolayca işlenebilir. Özellikle API çağrıları ve veri saklama
          işlemlerinde JSON formatı tercih edilir.
        </p>
        <p>Bir JSON nesnesi örneği: </p>

        <div className="example-css">
          <pre>
            <code>{`{
    "isim": "Ali",
    "yas": 25,
    "sehir": "İstanbul",
    "hobiler": ["kitap okuma", "yüzme", "resim yapma"]
}
`}</code>
          </pre>
        </div>
      </div>
      <div className="content-js">
        <h2>JavaScript Nesnesini JSON Formatına Dönüştürme</h2>
        <p>
          JavaScript nesnesini JSON formatına dönüştürmek için JSON.stringify()
          metodunu kullanırız. Bu işlem, nesneyi string hale getirerek JSON
          formatına çevirir.
        </p>

        <div className="example-css">
          <pre>
            <code>{`let kisi = {
    isim: "Ali",
    yas: 25,
    sehir: "Ankara"
};

let jsonString = JSON.stringify(kisi);
console.log(jsonString);
`}</code>
          </pre>
        </div>
        <p>
          <strong>Çıktı:</strong>
        </p>
        <div className="example-css">
          <pre>
            <code>{`{"isim":"Ali","yas":25,"sehir":"Ankara"}
`}</code>
          </pre>
        </div>
      </div>

      <div className="content-js">
        <h2>JSON Formatındaki Veriyi JavaScript Nesnesine Dönüştürme</h2>
        <p>
          JSON formatında bir veriyi JavaScript nesnesine dönüştürmek için
          JSON.parse() metodunu kullanırız. Bu işlem, JSON string’ini JavaScript
          nesnesine çevirir.
        </p>

        <div className="example-css">
          <pre>
            <code>{`let jsonString = '{"isim":"Ali","yas":25,"sehir":"Ankara"}';

let nesne = JSON.parse(jsonString);
console.log(nesne.isim); // Çıktı: Ali
console.log(nesne.yas);  // Çıktı: 25
`}</code>
          </pre>
        </div>
      </div>

      <div className="content-js">
        <h2>JSON ve API İletişimi</h2>
        <p>
          JSON, genellikle sunucularla veri alışverişinde kullanılır. Örneğin,
          bir web API'sinden veri almak veya API’ye veri göndermek için JSON
          formatı tercih edilir.
        </p>
      </div>
      <div className="content-js">
        <h2>JSON Kullanım Alanları</h2>
        <ul>
          <li>
            <strong>Veri Saklama</strong>: Local veya Session Storage ile
            birlikte JSON formatı kullanılarak nesneler saklanabilir.
          </li>
          <li>
            <strong>API İletişimi</strong>: Sunucularla veri alışverişi yaparken
            JSON formatı veri gönderme ve alma için tercih edilir.
          </li>
          <li>
            <strong>Yapılandırma Dosyaları</strong>: JSON, yapılandırma
            verilerini saklamak için de kullanılır.
          </li>
        </ul>
      </div>

      <div className="content-js">
        <h2>Düzenli İfadeler (Regex) Nedir?</h2>
        <p>
          Düzenli ifadeler, belirli bir kalıba veya desene göre metin arama ve
          eşleştirme işlemleri yapmamızı sağlar. JavaScript'te RegExp nesnesi
          ile düzenli ifadeler oluşturulur ve çeşitli metotlarla kullanılır.
        </p>
      </div>

      <div className="content-js">
        <h2>Regex Oluşturma Yöntemleri</h2>
        <p>JavaScript'te iki şekilde düzenli ifade oluşturabiliriz:</p>
        <ol>
          <li value="1">
            <strong>Literal Notasyonu:</strong>
            <div className="example-css">
              <pre>
                <code>{`let regex = /desen/;
`}</code>
              </pre>
            </div>
          </li>
          <li value="2">
            <strong>RegExp Yapıcı Fonksiyonu:</strong>
            <div className="example-css">
              <pre>
                <code>{`let regex = new RegExp("desen");
`}</code>
              </pre>
            </div>
          </li>
        </ol>
      </div>
      <div className="content-js">
        <h2>Regex Metotları</h2>
        <p>Düzenli ifadelerle birlikte kullanılan temel metotlar şunlardır:</p>
        <ul>
          <li>
            <strong>test()</strong>: Belirli bir desenin metin içinde olup
            olmadığını kontrol eder ve true veya false döndürür.
            <div className="example-css">
              <pre>
                <code>{`let regex = /hello/;
console.log(regex.test("hello world")); // Çıktı: true
`}</code>
              </pre>
            </div>
          </li>
          <li>
            <strong>exec()</strong>: Deseni metin içinde arar ve bir eşleşme
            varsa detaylı bilgi içeren bir dizi döndürür, aksi takdirde null
            döndürür.
            <div className="example-css">
              <pre>
                <code>{`let regex = /hello/;
console.log(regex.exec("hello world")); // Çıktı: ["hello"]
`}</code>
              </pre>
            </div>
          </li>
          <li>
            <strong>match()</strong>: Belirli bir desenin tüm eşleşmelerini
            bulur ve bir dizi döndürür.
            <div className="example-css">
              <pre>
                <code>{`let metin = "hello world hello";
let regex = /hello/g;
console.log(metin.match(regex)); // Çıktı: ["hello", "hello"]
`}</code>
              </pre>
            </div>
          </li>
        </ul>
      </div>
      <div className="content-js">
        <h2>Regex Operatörleri ve Karakterler</h2>
        <p>
          Düzenli ifadelerde sıkça kullanılan bazı özel karakterler ve
          operatörler:
        </p>
        <ol>
          <li value="1">
            <strong>^</strong>: Metin başıyla eşleşir.
          </li>
          <li value="2">
            <strong>$</strong>: Metin sonuyla eşleşir.
          </li>
          <li value="3">
            <strong>.</strong>: Tek bir karakterle eşleşir (yeni satır hariç).
          </li>
          <li value="4">
            <strong>*</strong>: Önceki karakterin sıfır veya daha fazla
            tekrarıyla eşleşir.
          </li>
          <li value="5">
            <strong>+</strong>: Önceki karakterin bir veya daha fazla tekrarıyla
            eşleşir.
          </li>
          <li value="6">
            <strong>?</strong>: Önceki karakterin sıfır veya bir tekrarıyla
            eşleşir.
          </li>
          <li value="7">
            <strong>&#123;n&#125;</strong>: Metin başıyla eşleşir.
          </li>
          <li value="8">
            <strong>[abc]</strong>: Kapsayıcı bir grup; "a", "b" veya "c" ile
            eşleşir.
          </li>
          <li value="9">
            <strong>[a-z]</strong>: Küçük harflerle eşleşir.
          </li>
          <li value="10">
            <strong>[^abc]</strong>: "a", "b" veya "c" dışındaki karakterlerle
            eşleşir.
          </li>
        </ol>

        <div
          className="example-css"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <p>
            <strong>Örnekler:</strong>
          </p>
          <ul>
            <li>
              <strong>Telefon Numarası Eşleştirme</strong>:
              /^\d&#123;3&#125;-\d&#123;3&#125;-\d&#123;4&#125;$/
            </li>
            <li>
              <strong>E-posta Eşleştirme</strong>:
              /^[\w-]+@([\w-]+\.)+[\w-]&#123;2,4&#125;$/
            </li>
          </ul>
        </div>
      </div>
      <div className="content-js">
        <h2>Regex Kullanım Örnekleri</h2>
        <ol>
          <li value="1">E-posta Doğrulama</li>
          <div className="example-css">
            <pre>
              <code>{`let emailRegex = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/;
console.log(emailRegex.test("test@example.com")); // Çıktı: true
console.log(emailRegex.test("gecersiz-email.com")); // Çıktı: false
`}</code>
            </pre>
          </div>
          <li value="2">Telefon Numarası Kontrolü</li>
          <div className="example-css">
            <pre>
              <code>{`let telefonRegex = /^\d{3}-\d{3}-\d{4}$/;
console.log(telefonRegex.test("555-123-4567")); // Çıktı: true
console.log(telefonRegex.test("5551234567"));   // Çıktı: false
`}</code>
            </pre>
          </div>
          <li value="3">Sayı Eşleştirme</li>
          <div className="example-css">
            <pre>
              <code>{`let sayiRegex = /^[0-9]+$/;
console.log(sayiRegex.test("12345")); // Çıktı: true
console.log(sayiRegex.test("12ab"));  // Çıktı: false
`}</code>
            </pre>
          </div>
        </ol>
      </div>

      <div className="content-js">
        <h2>Modüller Nedir?</h2>
        <p>
          Modüller, kodu işlevselliğe göre bölmeyi sağlayan yapılardır. Modüller
          sayesinde bir dosyada tanımladığımız işlevleri başka dosyalarda
          kolayca kullanabiliriz. JavaScript’te modüller, import ve export
          anahtar kelimeleri ile kullanılır.
        </p>
      </div>

      <div className="content-js">
        <h2>Modüllerin Faydaları</h2>
        <ul>
          <li>
            <strong>Kodu Düzenli Tutma</strong>: İşlevleri farklı dosyalarda
            düzenli olarak saklayabiliriz.
          </li>
          <li>
            <strong>Yeniden Kullanılabilirlik</strong>: Bir işlevi veya
            değişkeni bir kere tanımlayıp, farklı dosyalarda kullanabiliriz.
          </li>

          <li>
            <strong>Bakımı Kolaylaştırır</strong>: Kodun anlaşılabilirliğini
            artırır ve hata ayıklamayı kolaylaştırır.
          </li>
        </ul>
      </div>

      <div className="content-js">
        <h2>Modül Oluşturma ve Kullanma</h2>
        <p>
          JavaScript'te bir modül oluşturmak için export anahtar kelimesiyle
          işlev, değişken veya sınıfı dışa aktarırız ve import anahtar
          kelimesiyle başka bir dosyada bu modülü içe aktarırız.
        </p>
        <ol>
          <li value="1">
            <strong>export ile Dışa Aktarma</strong>: Bir işlevi veya değişkeni
            dışa aktarmak için export anahtar kelimesini kullanırız.
          </li>
          <div className="example">
            <pre>
              <code>{`// hesaplayici.js

export function topla(a, b) {
    return a + b;
}

export const pi = 3.14;
`}</code>
            </pre>
            <p>Bu örnekte topla fonksiyonunu ve pi sabitini dışa aktardık.</p>
          </div>
          <li value="2">
            <strong>import ile İçe Aktarma</strong>: Başka bir dosyada import
            anahtar kelimesi ile bu modülleri kullanabiliriz.
          </li>
          <div className="example">
            <pre>
              <code>{`// main.js

import { topla, pi } from './hesaplayici.js';

console.log(topla(3, 5)); // Çıktı: 8
console.log(pi); // Çıktı: 3.14
`}</code>
            </pre>
          </div>
        </ol>
      </div>

      <div className="content-js">
        <h2>Varsayılan Dışa Aktarım (Default Export)</h2>
        <p>
          Bir dosyadan yalnızca bir öğeyi varsayılan olarak dışa aktarmak için
          export default kullanırız. Varsayılan dışa aktarılan bir modülü içe
          aktarırken {} kullanmamıza gerek yoktur.
        </p>
        <div className="example">
          <pre>
            <code>{`// hesaplayici.js

export default function carp(a, b) {
    return a * b;
}
`}</code>
          </pre>
        </div>
        <p>
          <strong>Bu modülü içe aktarırken:</strong>
        </p>
        <div className="example">
          <pre>
            <code>{`// main.js

import carp from './hesaplayici.js';

console.log(carp(4, 5)); // Çıktı: 20
`}</code>
          </pre>
        </div>
      </div>

      <div className="content-js">
        <h2>Hepsini Birden İçe Aktarma (import )</h2>
        <p>
          Bir dosyadaki tüm dışa aktarılan öğeleri bir nesne olarak içe aktarmak
          için import * as sözdizimini kullanabiliriz.
        </p>
        <div className="example">
          <pre>
            <code>{`// hesaplayici.js

export function topla(a, b) {
    return a + b;
}

export function carp(a, b) {
    return a * b;
}
`}</code>
          </pre>
        </div>
        <div className="example">
          <pre>
            <code>{`// main.js

import * as hesaplayici from './hesaplayici.js';

console.log(hesaplayici.topla(2, 3)); // Çıktı: 5
console.log(hesaplayici.carp(4, 5));  // Çıktı: 20

`}</code>
          </pre>
        </div>
      </div>

      <div className="content-js">
        <h2>Modüllerin Kullanımı ile İlgili Notlar</h2>
        <ul>
          <li>Modüller yalnızca modül dosyaları (.js) arasında çalışır.</li>
          <li>
            Bir dosyada birden fazla export olabilir, ancak sadece bir export
            default olabilir.
          </li>
          <li>
            Tarayıcıda modüllerle çalışmak için &lt;script type="module"&gt;
            kullanmamız gerekir.
          </li>
        </ul>
        <p>
          <strong>Örnek:</strong>
        </p>
        <div className="example">
          <pre>
            <code>{`<script type="module" src="main.js"></script>
`}</code>
          </pre>
        </div>
      </div>

      <div className="content-js">
        <h2>Event Loop (Olay Döngüsü) Nedir?</h2>
        <p>
          Event Loop, Call Stack ve Callback Queue arasında sürekli olarak döner
          ve Call Stack boşaldığında Callback Queue'dan işlemleri Call Stack'e
          ekler. Bu sayede asenkron işlemler, JavaScript'in diğer işlemleri
          beklemeden çalışmasını sağlar.
        </p>
        <p>
          <strong>İşleyiş Adımları:</strong>
          <ol>
            <li value="1">
              Call Stack boşaldığında, Event Loop Callback Queue'daki işlemi
              alır.
            </li>
            <li value="2">
              Callback Queue'daki işlem Call Stack'e eklenir ve çalıştırılır.
            </li>
            <li value="3">
              Call Stack tekrar boşaldığında, Event Loop sıradaki işlemi
              Callback Queue'dan alır.
            </li>
          </ol>
        </p>
      </div>
      <div className="content-js">
        <h2>Örnek Üzerinde Event Loop</h2>
        <p>
          Aşağıdaki örnekte, Event Loop'un nasıl çalıştığını daha iyi
          görebiliriz:
        </p>
        <div className="example">
          <pre>
            <code>{`console.log("Birinci"); // Sırayla yürütülür

setTimeout(() => {
    console.log("İkinci (setTimeout)");
}, 0); // Asenkron işlem, Callback Queue'ya eklenir

console.log("Üçüncü");
`}</code>
          </pre>
        </div>
        <p>
          <strong>Çıktı:</strong>
        </p>
        <div className="example">
          <pre>
            <code>{`Birinci
Üçüncü
İkinci (setTimeout)
`}</code>
          </pre>
        </div>
        <p>
          <strong>Bu Örnekte:</strong>
          <ol>
            <li value="1">
              console.log("Birinci"); doğrudan Call Stack'e eklenir ve
              çalıştırılır.
            </li>
            <li value="2">
              setTimeout ile belirlediğimiz işlem Callback Queue'ya eklenir.
            </li>
            <li value="3">
              console.log("Üçüncü"); Call Stack'te sırayla çalıştırılır.
            </li>
            <li value="4">
              Call Stack boşaldığında, Callback Queue'daki setTimeout fonksiyonu
              çalıştırılır.
            </li>
          </ol>
        </p>
      </div>
      <div className="content-js">
        <h2>Microtask Queue (Mikro Görev Kuyruğu)</h2>
        <p>
          JavaScript'te bir de Microtask Queue adında bir kuyruk vardır. Promise
          gibi işlemler bu kuyruğa eklenir. Event Loop, Callback Queue'dan önce
          Microtask Queue'yu kontrol eder, bu nedenle Promise gibi işlemler
          setTimeout gibi diğer asenkron işlemlerden önce çalışır.
        </p>
        <div className="example">
          <pre>
            <code>{`console.log("Başla");

setTimeout(() => {
    console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("Bitti");
`}</code>
          </pre>
        </div>
        <p>
          <strong>Çıktı:</strong>
        </p>
        <div className="example">
          <pre>
            <code>{`Başla
Bitti
Promise
setTimeout
`}</code>
          </pre>
        </div>
        <p>
          Burada Promise, Microtask Queue'ya eklenir ve setTimeout'tan önce
          çalışır.
        </p>
      </div>

      <div className="content-js">
        <h2>Closure Nedir?</h2>
        <p>
          Closure, bir fonksiyonun, tanımlandığı ortamın (scope) dışında da
          kendi değişkenlerine ve parametrelerine erişebilmesini sağlayan bir
          yapıdır. Yani, bir iç fonksiyon, dış fonksiyonun değişkenlerine
          erişebilir ve onları kullanabilir. Closures, bir fonksiyonun başka bir
          fonksiyon tarafından döndürülüp saklanabilmesi durumunda önem kazanır;
          bu sayede dış fonksiyondaki yerel değişkenler yaşamaya devam eder.
        </p>
        <p>
          <strong>Closure Örneği</strong>: Aşağıda closure ile bir örnek yapalım
        </p>
        <div className="example">
          <pre>
            <code>{`function sayac() {
    let sayi = 0; // Dış fonksiyonun yerel değişkeni
    
    function arttir() { // İç fonksiyon
        sayi++;
        return sayi;
    }
    
    return arttir;
}

let sayaciCalistir = sayac(); // sayac fonksiyonunu çalıştırıyoruz ve arttir fonksiyonunu döndürüyoruz

console.log(sayaciCalistir()); // Çıktı: 1
console.log(sayaciCalistir()); // Çıktı: 2
console.log(sayaciCalistir()); // Çıktı: 3
`}</code>
          </pre>
        </div>
        <p>
          <strong>Bu örnekte:</strong>
          <ul>
            <li>sayac fonksiyonu, sayi adında bir yerel değişken tanımlar.</li>
            <li>
              sayac fonksiyonunun içinde arttir adında bir iç fonksiyon
              tanımlanır.
            </li>
            <li>sayac fonksiyonu, arttir fonksiyonunu döndürür.</li>
            <li>
              Her sayaciCalistir() çağrısında sayi değeri korunur ve her
              seferinde 1 artar.
            </li>
          </ul>
        </p>
        <p>
          Bu, closure’ın gücüdür; sayac fonksiyonu tamamlandıktan sonra bile
          sayi değişkenine erişim devam eder.
        </p>
      </div>

      <div className="content-js">
        <h2>Closures ile Özel Durumlar</h2>
        <p>
          Closures, özellikle veri gizliliği veya özel (private) değişkenler
          oluşturmak için kullanılabilir. Closure sayesinde dışarıdan
          erişilemeyen değişkenler tanımlayabiliriz.
        </p>
        <p>
          <strong>Örnek:</strong>
        </p>
        <div className="example-css">
          <pre>
            <code>{`function gizliMesaj() {
    let mesaj = "Bu gizli bir mesaj!";
    
    return function() {
        return mesaj;
    };
}

let mesajFonksiyonu = gizliMesaj();
console.log(mesajFonksiyonu()); // Çıktı: Bu gizli bir mesaj!
`}</code>
          </pre>
          <p>
            Bu örnekte, mesaj değişkeni sadece gizliMesaj fonksiyonunun içinde
            erişilebilen bir değişkendir. gizliMesaj dışındaki kodlardan mesaj
            değişkenine erişemeyiz, ancak döndürdüğümüz fonksiyon sayesinde
            mesaj değerini okuyabiliriz.
          </p>
        </div>
      </div>
      <div className="content-js">
        <h2>Closures Kullanım Alanları</h2>
        <ol>
          <li value="1">
            <strong>Veri Gizliliği Sağlamak</strong>: Fonksiyon içindeki
            değişkenleri dışarıdan erişime kapatmak için.
          </li>
          <li value="2">
            <strong>Durum Koruma</strong>: Fonksiyonlar arasında veri taşımak ve
            saklamak için.
          </li>
          <li value="3">
            <strong>Callback Fonksiyonları ve Event Handlers</strong>:
            Closure’lar callback fonksiyonlarında ve olay dinleyicilerinde
            yaygın olarak kullanılır.
          </li>
          <li value="4">
            <strong>Modül Oluşturma</strong>: Kodunuzu kapsülleyip yalnızca
            gerekli kısımları dışarı açmak için closure kullanarak modüller
            oluşturabilirsiniz.
          </li>
        </ol>
      </div>

      <div className="content-js">
        <h2>Sınıflar (Classes) Nedir?</h2>
        <p>
          JavaScript sınıfları, nesne tabanlı programlama (Object-Oriented
          Programming - OOP) prensiplerini uygulamak için kullanılan yapılardır.
          Sınıflar, bir nesne için şablon görevi görür ve aynı türde nesneler
          oluşturmak için kullanılır. Sınıfların içinde özellikler (properties)
          ve metotlar (methods) tanımlanır.
        </p>
      </div>

      <div className="content-js">
        <h2>Sınıf Tanımlama ve Nesne Oluşturma</h2>
        <p>
          JavaScript'te bir sınıf tanımlamak için class anahtar kelimesi
          kullanılır.
        </p>
        <p>
          <strong>Örnek:</strong>
        </p>
        <div className="example-css">
          <img src="./kod.png" width="800px" height="300px"></img>
          <ul>
            <li>
              Araba adında bir sınıf oluşturduk ve constructor metodunu
              kullanarak nesne özelliklerini tanımladık.
            </li>
            <li>this anahtar kelimesi, o anki nesneye referans verir.</li>
            <li>
              bilgileriGoster adında bir metot oluşturduk, bu metot her araba
              nesnesinin bilgilerini ekrana yazdırır.
            </li>
          </ul>
        </div>
      </div>

      <div className="content-js">
        <h2>Sınıf Mirası (Inheritance)</h2>
        <p>
          JavaScript sınıfları, miras alma (inheritance) özelliğine sahiptir. Bu
          özellik, bir sınıfın başka bir sınıfın özellik ve metotlarını
          devralmasını sağlar. Miras almak için extends anahtar kelimesi
          kullanılır.
        </p>
        <p>
          <strong>Örnek:</strong>
        </p>
        <div className="example-css">
          <img src="/kkod2.png" width="800px" height="300px"></img>
          <ul>
            <li>Arac adında bir üst sınıf oluşturduk.</li>
            <li>
              Araba sınıfı, Arac sınıfından miras alarak marka ve model
              özelliklerine sahip oldu.
            </li>
            <li>super() ile üst sınıfın constructor metoduna eriştik.</li>
          </ul>
        </div>
      </div>
      <div className="content-js">
        <h2>Getter ve Setter Metotları</h2>
        <p>
          Getter ve Setter metotları, sınıf özelliklerine kontrollü bir şekilde
          erişmemizi sağlar. get ve set anahtar kelimeleri ile tanımlanırlar.
        </p>
        <div className="example-css">
          <pre>
            <code>{`class Kisi {
    constructor(isim) {
        this._isim = isim; // Özellik adı başında "_" karakteri ile tanımlanır
    }

    get isim() {
        return this._isim.toUpperCase();
    }

    set isim(yeniIsim) {
        this._isim = yeniIsim;
    }
}

const kisi = new Kisi("Ali");
console.log(kisi.isim); // Çıktı: ALI
kisi.isim = "Ayşe";
console.log(kisi.isim); // Çıktı: AYŞE
`}</code>
          </pre>
          <ul>
            <li>
              _isim adında bir özellik tanımladık ve buna get ve set ile erişim
              sağladık.
            </li>
            <li>
              Getter, isim özelliğine eriştiğimizde büyük harf olarak dönmesini
              sağladı.
            </li>
            <li>Setter ile isim değerini değiştirebildik.</li>
          </ul>
        </div>
      </div>
      <div className="content-js">
        <h2>Statik Metotlar</h2>
        <p>
          Statik metotlar, sınıfın örneği olmadan doğrudan sınıf üzerinden
          çağrılabilir. static anahtar kelimesi ile tanımlanır.
        </p>
        <div className="example-css">
          <pre>
            <code>{`class Matematik {
    static topla(a, b) {
        return a + b;
    }
}

console.log(Matematik.topla(5, 10)); // Çıktı: 15
`}</code>
          </pre>
          <p>
            Burada topla metodu, Matematik sınıfından doğrudan çağrılabilir.
          </p>
        </div>
      </div>
      <div className="content-js">
        <h2>JavaScript'in hata yönetimi (Error Handling)</h2>
        <ol>
          <li value="1">
            <strong>Hata Nesneleri (Error Objects)</strong>: JavaScript'te
            hatalar Error nesnesi ile temsil edilir ve hataları daha detaylı
            yönetmek için kendi hata nesnelerimizi oluşturabiliriz. JavaScript,
            bazı hazır hata türlerini içerir:
            <ul>
              <li>
                <strong>Error</strong>: Genel hata türü
              </li>
              <li>
                <strong>SyntaxError</strong>: Söz dizimi hatası
              </li>
              <li>
                <strong>ReferenceError</strong>: Tanımlanmamış bir değişkene
                erişim hatası
              </li>
              <li>
                <strong>TypeError</strong>: Yanlış veri türüyle işlem yapılmaya
                çalışıldığında oluşur
              </li>
              <li>
                <strong>RangeError</strong>: Sayısal bir değerin geçerli
                aralığın dışında olması durumunda oluşur
              </li>
            </ul>
            <p>
              Her hata türü, message, name, ve stack gibi özellikler taşır.
              stack, hatanın nerede ve hangi sırayla oluştuğunu gösterir.
            </p>
            <p>
              <strong>Örnek:</strong>
            </p>
            <div className="example-css">
              <pre>
                <code>{`try {
    let sayi = 10;
    sayi.toUpperCase(); // TypeError: toUpperCase bir sayıya uygulanamaz
} catch (hata) {
    console.log("Hata Mesajı:", hata.message);
    console.log("Hata Türü:", hata.name);
    console.log("Hata Detayı:", hata.stack);
}
`}</code>
              </pre>
            </div>
          </li>
          <li value="2">
            <strong>Özel Hata Nesneleri (Custom Errors)</strong>: Kendi hata
            türlerimizi oluşturarak daha anlamlı hata mesajları verebiliriz. Bu
            sayede hata durumlarını daha spesifik olarak yönetebiliriz.
            <p>
              <strong>Örnek:</strong>
            </p>
            <div className="example-css">
              <pre>
                <code>{`class OzelHata extends Error {
    constructor(mesaj) {
        super(mesaj);
        this.name = "OzelHata"; // Hata türü olarak özel bir ad veriyoruz
    }
}

function kontrolEt(sayi) {
    if (sayi < 0) {
        throw new OzelHata("Sayı negatif olamaz!");
    }
    return "Sayı pozitif.";
}

try {
    console.log(kontrolEt(-5)); // Negatif sayı girildiğinde hata oluşur
} catch (hata) {
    console.log(hata.name + ": " + hata.message); // Çıktı: OzelHata: Sayı negatif olamaz!
}
`}</code>
              </pre>
            </div>
            <p>
              Bu örnekte OzelHata adında özel bir hata sınıfı oluşturduk ve
              kontrolEt fonksiyonu negatif bir sayı aldığında bu hatayı
              fırlattık.
            </p>
          </li>
          <li value="3">
            <strong>finally ile Hata Yönetiminde Temizleme İşlemleri</strong>:
            finally bloğu, hata oluşsa da oluşmasa da her durumda çalışır. Dosya
            kapatma veya bağlantıyı sonlandırma gibi temizleme işlemlerini
            finally içinde yapabiliriz.
            <p>
              <strong>Örnek:</strong>
            </p>
            <div className="example-css">
              <pre>
                <code>{`try {
    let sonuc = 10 / 2;
    console.log("Sonuç:", sonuc);
} catch (hata) {
    console.log("Bir hata oluştu:", hata.message);
} finally {
    console.log("Bu işlem her durumda çalışır.");
}
`}</code>
              </pre>
            </div>
          </li>
          <li value="4">
            <strong>throw ile Hata Fırlatma</strong>: JavaScript’te throw ile
            herhangi bir değeri hata olarak fırlatabiliriz. Bu değer bir string,
            number veya Error nesnesi olabilir.
            <p>
              <strong>Örnek:</strong>
            </p>
            <div className="example-css">
              <pre>
                <code>{`function yasKontrol(yas) {
    if (yas < 18) {
        throw "Yaş 18'den küçük olamaz."; // String hata fırlatma
    }
    return "Ehliyet alabilirsiniz.";
}

try {
    console.log(yasKontrol(16));
} catch (hata) {
    console.log("Hata:", hata); // Çıktı: Hata: Yaş 18'den küçük olamaz.
}
`}</code>
              </pre>
            </div>
          </li>
          <li value="5">
            <strong>Asenkron Hata Yönetimi</strong>: Asenkron işlemler (Promise,
            async/await) ile çalışırken hataları yönetmek için farklı bir
            yaklaşım gerekebilir.
            <ul>
              <li>
                <strong>Promise Hataları İçin catch()</strong>: Bir Promise
                zincirinde hata oluştuğunda, catch() metodu ile bu hatayı
                yakalayabiliriz.
              </li>
              <div className="example-css">
                <pre>
                  <code>{`let soz = new Promise((resolve, reject) => {
    reject("Bir hata oluştu!");
});

soz
    .then(sonuc => console.log(sonuc))
    .catch(hata => console.log("Hata:", hata)); // Çıktı: Hata: Bir hata oluştu!
`}</code>
                </pre>
              </div>
              <li>
                <strong>Async/Await ile Hata Yönetimi</strong>: async/await
                yapısında try...catch bloğu ile hataları yönetebiliriz.
              </li>
              <div className="example-css">
                <pre>
                  <code>{`async function veriGetir() {
    try {
        let sonuc = await fetch("https://example.com/api");
        let veri = await sonuc.json();
        console.log(veri);
    } catch (hata) {
        console.log("Hata oluştu:", hata.message);
    }
}

veriGetir();
`}</code>
                </pre>
              </div>
            </ul>
          </li>
        </ol>
      </div>
      <div className="content-js">
        <h2>Veri Yapıları</h2>
        <p>JavaScript'te en yaygın kullanılan veri yapıları şunlardır:</p>
        <ol>
          <li value="1">
            <strong>Diziler (Arrays)</strong>: Diziler, sıralı veri saklamak
            için kullanılan bir yapıdır.
            <ul>
              <li>
                <strong>Özellikleri:</strong>
                <ul>
                  <li>Elemanlara indekslerle erişilir.</li>
                  <li>
                    push, pop, shift, unshift gibi metotlarla eleman
                    ekleme/silme yapılabilir.
                  </li>
                </ul>
              </li>
            </ul>
            <div className="example-css">
              <pre>
                <code>{`let meyveler = ["Elma", "Muz", "Portakal"];
meyveler.push("Çilek"); // Eleman ekleme
console.log(meyveler); // Çıktı: ["Elma", "Muz", "Portakal", "Çilek"]
`}</code>
              </pre>
            </div>
          </li>
          <li value="2">
            <strong>Set (Kümeler)</strong>: Set, benzersiz (unique) elemanlardan
            oluşan bir veri yapısıdır.
            <ul>
              <li>
                <strong>Özellikleri:</strong>
                <ul>
                  <li>Aynı değeri birden fazla kez saklamaz.</li>
                  <li>add, delete, has, ve clear gibi metotlarla yönetilir.</li>
                </ul>
              </li>
            </ul>
            <div className="example-css">
              <pre>
                <code>{`let sayilar = new Set([1, 2, 3, 3, 4]);
sayilar.add(5);
console.log(sayilar); // Çıktı: Set(5) { 1, 2, 3, 4, 5 }
`}</code>
              </pre>
            </div>
          </li>
          <li value="3">
            <strong>Map (Haritalar)</strong>: Map, anahtar-değer (key-value)
            çiftlerinden oluşur ve her anahtar benzersizdir.
            <ul>
              <li>
                <strong>Özellikleri:</strong>
                <ul>
                  <li>Anahtarlar herhangi bir veri tipi olabilir.</li>
                  <li>set, get, delete, ve has metotlarıyla yönetilir.</li>
                </ul>
              </li>
            </ul>
            <div className="example-css">
              <pre>
                <code>{`let ogrenci = new Map();
ogrenci.set("isim", "Ali");
ogrenci.set("yas", 25);

console.log(ogrenci.get("isim")); // Çıktı: Ali
console.log(ogrenci.size); // Çıktı: 2
`}</code>
              </pre>
            </div>
          </li>
          <li value="4">
            <strong>Nesneler (Objects)</strong>: Nesneler, anahtar-değer
            çiftlerinden oluşur ve genellikle bir varlığı modellemek için
            kullanılır.
            <ul>
              <li>
                <strong>Özellikleri:</strong>
                <ul>
                  <li>Anahtarlar string veya symbol olabilir.</li>
                  <li>
                    Dinamik olarak özellik eklenebilir veya kaldırılabilir.
                  </li>
                </ul>
              </li>
            </ul>
            <div className="example-css">
              <pre>
                <code>{`let kisi = { isim: "Ayşe", yas: 30 };
kisi.meslek = "Mühendis"; // Yeni özellik ekleme
console.log(kisi); // Çıktı: { isim: 'Ayşe', yas: 30, meslek: 'Mühendis' }
`}</code>
              </pre>
            </div>
          </li>
        </ol>
      </div>
      <div className="content-js">
        <h2>Algoritmalar</h2>
        <ol>
          <li value="1">
            <strong>Sıralama Algoritmaları (Sorting Algorithms)</strong>:
            Dizileri sıralamak için kullanılan algoritmalardır. JavaScript'te
            sort() metodu kullanılarak diziler sıralanabilir.
            <div className="example-css">
              <pre>
                <code>{`let sayilar = [5, 3, 8, 1];
sayilar.sort((a, b) => a - b); // Küçükten büyüğe sıralama
console.log(sayilar); // Çıktı: [1, 3, 5, 8]
`}</code>
              </pre>
            </div>
          </li>
          <li value="2">
            <strong>Arama Algoritmaları (Search Algorithms)</strong>
            <ul>
              <li>
                <strong>Doğrusal Arama (Linear Search)</strong>: Her elemanı
                sırayla kontrol eder.
              </li>
              <li>
                <strong>İkili Arama (Binary Search)</strong>: Sıralı dizilerde
                çalışır, elemanları bölerek arama yapar.
              </li>
            </ul>
            <div className="example-css">
              <pre>
                <code>{`function linearSearch(arr, hedef) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === hedef) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([10, 20, 30, 40], 30)); // Çıktı: 2
`}</code>
              </pre>
            </div>
          </li>
          <li value="3">
            <strong>Zaman ve Alan Karmaşıklığı</strong>: Algoritmaların
            etkinliğini ölçmek için zaman ve alan karmaşıklığı kullanılır.
            <ul>
              <li>
                <strong>Big-O Notasyonu</strong>
                <ul>
                  <li>
                    <strong>O(1)</strong>: Sabit zamanlı (Constant Time)
                  </li>
                  <li>
                    <strong>O(n)</strong>: Doğrusal zamanlı (Linear Time)
                  </li>
                  <li>
                    <strong>O(n^2)</strong>: Kare zamanlı (Quadratic Time)
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ol>

        <div className="try-js">
          <p>
            <strong>Denemek İster misin?</strong>
          </p>
          <ol>
            <li value="1">
              <strong> Benzersiz Elemanları Bulma</strong>
              <div className="example-css">
                <pre>
                  <code>{`function benzersizElemanlar(arr) {
    return [...new Set(arr)];
}

console.log(benzersizElemanlar([1, 2, 2, 3, 4, 4, 5])); // Çıktı: [1, 2, 3, 4, 5]
`}</code>
                </pre>
              </div>
            </li>
            <li value="2">
              <strong> En Büyük veya En Küçük Elemanı Bulma</strong>
              <div className="example-css">
                <pre>
                  <code>{`function enBuyuk(arr) {
    return Math.max(...arr);
}

console.log(enBuyuk([10, 20, 30, 40])); // Çıktı: 40
`}</code>
                </pre>
              </div>
            </li>
            <li value="3">
              <strong>
                {" "}
                Dizide Belirli Bir Elemanın Kaç Kez Geçtiğini Bulma
              </strong>
              <div className="example-css">
                <pre>
                  <code>{`function elemanSayisi(arr, eleman) {
    return arr.filter(x => x === eleman).length;
}

console.log(elemanSayisi([1, 2, 2, 3, 4, 2], 2)); // Çıktı: 3
`}</code>
                </pre>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
export default JavaScript;
