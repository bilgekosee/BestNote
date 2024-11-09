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
        <h2>Fonksiyon Tanımlama</h2>
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
        <h2>Fonksiyon Çağırma</h2>
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
        <h2>Parametreler ve Argümanlar</h2>
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
    </div>
  );
}
export default JavaScript;
