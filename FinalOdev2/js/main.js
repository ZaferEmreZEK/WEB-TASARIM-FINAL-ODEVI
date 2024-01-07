function kontrol(){
    var sifre = document.getElementById("sifre").value;
    var sifre2= document.getElementById("sifre2").value;
    var mail = document.getElementById("mail").value;
    var isim = document.getElementById("isim").value;
    var soyad = document.getElementById("soyad").value;

    /*.trim() boşlukları kaldırır stringteki*/
    if(sifre.trim() == "" || sifre2.trim() == "" || mail.trim() == "" || isim.trim() == "" || soyad.trim() == ""){
        alert("tüm boşlukları doldurup tekrar deneyin!!!!");
    }
    else{
        if(sifre != sifre2){
            alert("şifreler uyuşmuyor!!!");
        }
        else{
            if(mail.includes("mail.com")){
                alert("Hesabınız oluşturulmuştur.");
            }
            else{
                alert("lütfen geçerli bir mail adresi giriniz!!!");
            }
        }
    }
}

//english
function hesaplaEn(){
    var soru1 = Number(document.getElementById("1.soru").selectedIndex);
    var soru2 = Number(document.getElementById("2.soru").selectedIndex);
    var soru3 = Number(document.getElementById("3.soru").selectedIndex);
    var soru4 = Number(document.getElementById("4.soru").selectedIndex);
    var soru5 = Number(document.getElementById("5.soru").selectedIndex);
    var soru6 = Number(document.getElementById("6.soru").selectedIndex);

    var toplam = 0;
    toplam = soru1 + soru2 + soru3 + soru4 + soru5 + soru6;
    if(toplam >= 6){
        if(toplam <= 8){
            document.getElementById("sonuc").innerHTML = "HIGH-RISK INVESTOR: <strong><br>" + "High-risk investors typically focus on investments with higher return potential but also higher volatility. Their main goal is to achieve high returns, which may require taking on higher risks. They often invest in volatile asset classes such as stocks, risky venture capital investments, or cryptocurrencies.";
        }
        else if(8 < toplam && toplam < 14){
            document.getElementById("sonuc").innerHTML = "MEDIUM-RISK INVESTOR: <strong><br>" + "Medium-risk investors aim to maintain a balance between risk and return. They pay attention to diversifying their portfolios and may invest in different asset classes such as stocks, bonds, and commodities. They can accept a certain level of risk for the potential of higher returns.";
        }
        else if(14 <= toplam){
            document.getElementById("sonuc").innerHTML = "LOW-RISK INVESTOR: <strong><br>" + "Low-risk investors typically focus on more stable and secure investment instruments. Their main goal is capital preservation, meaning they try to preserve the value of their investments as much as possible. They may typically invest in fixed-income instruments (such as bonds) and stocks with low volatility.";
        }
    }
    else{
        document.getElementById("sonuc").innerHTML = "please answer all questions!!!";
    }

}

function hesapla(){
    var soru1 = Number(document.getElementById("1.soru").selectedIndex);
    var soru2 = Number(document.getElementById("2.soru").selectedIndex);
    var soru3 = Number(document.getElementById("3.soru").selectedIndex);
    var soru4 = Number(document.getElementById("4.soru").selectedIndex);
    var soru5 = Number(document.getElementById("5.soru").selectedIndex);
    var soru6 = Number(document.getElementById("6.soru").selectedIndex);

    var toplam = 0;
    toplam = soru1 + soru2 + soru3 + soru4 + soru5 + soru6;
    if(toplam >= 6){
        if(toplam <= 8){
            document.getElementById("sonuc").innerHTML = "YÜKSEK RİSKLİ YATIRIMCI: <strong><br>" + "Yüksek riskli yatırımcılar, genellikle daha yüksek getiri potansiyeli olan ancak daha fazla volatiliteye sahip yatırımlara odaklanırlar.Ana hedefleri yüksek getiri elde etmektir, bu da daha yüksek risk almayı gerektirebilir.Genellikle hisse senetleri, riskli girişim sermayesi yatırımları veya kripto paralar gibi volatil varlık sınıflarına yatırım yapabilirler.";
        }
        else if(8 < toplam && toplam < 14){
            document.getElementById("sonuc").innerHTML = "ORTA RİSKLİ YATIRIMCI: <strong><br>" + "Orta riskli yatırımcılar, risk ve getiri arasında bir dengeyi sürdürmeye çalışırlar.Portföylerini çeşitlendirmeye özen gösterirler ve farklı varlık sınıflarına (hisse senetleri, tahviller, emtialar) yatırım yapabilirler.Daha yüksek getiri potansiyeli için belirli bir risk seviyesini kabul edebilirler.";
        }
        else if(14 <= toplam){
            document.getElementById("sonuc").innerHTML = "DÜŞÜK RİSKLİ YATIRIMCI: <strong><br>" + "Düşük riskli yatırımcılar, genellikle daha istikrarlı ve güvenli yatırım araçlarına odaklanırlar.Ana hedefleri sermaye korumasıdır. Yani, yatırımlarının değerini mümkün olduğunca korumaya çalışırlar.Tipik olarak sabit getirili araçlara (örneğin, tahviller) ve düşük volatiliteye sahip hisse senetlerine yatırım yapabilirler.";
        }
    }
    else{
        document.getElementById("sonuc").innerHTML = "Lütfen tüm soruları cevaplayınız!!!";
    }

}

function guncelKisi(){
    let kisi = 5984362;
    let count = 0;
    
    function arttir(){
        if(count % 2 != 0){
            kisi+=15604;
        }
        else{
            kisi-=14506;
        }
        count++;
        

        document.getElementById("kisi").innerHTML = kisi;
    }
    setInterval(arttir, 1000);
}

function lotHesapla(){
    var sirket = document.getElementById("HalkaArzlar").value;
    console.log(sirket);
    var kisi = document.getElementById("kisi").textContent;
    console.log(kisi);
    kisi = Number(kisi);
    console.log(kisi);
    var dagitim = 0;
    var lot = 0;
    var hisseDegeri = 0;
    var kisaltma = "";
    if(String(sirket).includes("1")){
        dagitim = 20000000;
        let sonuc = dagitim / kisi;
        lot = sonuc.toFixed(0);
        dagitim = "20.000.000";
        hisseDegeri = 20;
        kisaltma = "SURGYO";

    }
    else if(String(sirket).includes("2")){
        dagitim = 36000000;
        let sonuc = dagitim / kisi;
        lot = sonuc.toFixed(0);
        dagitim = "36.000.000";
        hisseDegeri = 139;
        kisaltma = "KCHOL";
    }
    else if(String(sirket).includes("3")){
        dagitim = 15000000;
        let sonuc = dagitim / kisi;
        lot = sonuc.toFixed(0);
        dagitim = "15.000.000";
        hisseDegeri = 25,6;
        kisaltma = "TTKOM";
    }
    else if(String(sirket).includes("4")){
        dagitim = 23000000;
        let sonuc = dagitim / kisi;
        lot = sonuc.toFixed(0);
        dagitim = "23.000.000";
        hisseDegeri = 246;
        kisaltma = "THYAO";
    }
    document.getElementById("sonuc").innerHTML = kisaltma + " Dagıtım: " + dagitim + "<br>Lot: " + lot + "<br>Toplam Hisse Değeri: " + hisseDegeri + (hisseDegeri*lot) + " TL";
}

//english
function lotHesaplaEn(){
    var sirket = document.getElementById("HalkaArzlar").value;
    console.log(sirket);
    var kisi = document.getElementById("kisi").textContent;
    console.log(kisi);
    kisi = Number(kisi);
    console.log(kisi);
    var dagitim = 0;
    var lot = 0;
    var hisseDegeri = 0;
    var kisaltma = "";
    if(String(sirket).includes("1")){
        dagitim = 20000000;
        let sonuc = dagitim / kisi;
        lot = sonuc.toFixed(0);
        dagitim = "20.000.000";
        hisseDegeri = 20;
        kisaltma = "SURGYO";

    }
    else if(String(sirket).includes("2")){
        dagitim = 36000000;
        let sonuc = dagitim / kisi;
        lot = sonuc.toFixed(0);
        dagitim = "36.000.000";
        hisseDegeri = 139;
        kisaltma = "KCHOL";
    }
    else if(String(sirket).includes("3")){
        dagitim = 15000000;
        let sonuc = dagitim / kisi;
        lot = sonuc.toFixed(0);
        dagitim = "15.000.000";
        hisseDegeri = 25,6;
        kisaltma = "TTKOM";
    }
    else if(String(sirket).includes("4")){
        dagitim = 23000000;
        let sonuc = dagitim / kisi;
        lot = sonuc.toFixed(0);
        dagitim = "23.000.000";
        hisseDegeri = 246;
        kisaltma = "THYAO";
    }
    document.getElementById("sonuc").innerHTML = kisaltma + "Distribution: " + dagitim + "<br>Lot: " + lot + "<br>Total Market Capitalization: " + hisseDegeri + (hisseDegeri*lot) + " TL";
}

var index = 0;
function gpt() {
    var inputElement = document.getElementById('input');
    var inputValue = inputElement.value.trim();
    var sonuclarDiv = document.getElementById('sonuclar');

    var liste = [
        "SAHOL hisse senetleri, şu anda 60,80 TL seviyesinde bulunmaktadır. Ancak, bu fiyatın yatırımcı profiline bağlı olarak alım yapmak için yeterli olup olmadığını değerlendirmek önemlidir. Eğer yatırımcı küçük bir bütçeye sahipse, bu miktar alım yapmak için yeterli olmayabilir. Sabancı Holding genellikle büyük ve köklü bir şirket olduğu için, büyük ölçekli yatırımcılar için daha çekici olabilir.",
        "THY' nin güncel hisse değeri 254,00TL.<br> bu miktar yatırımcı profilinizi analiz ettiğimde alım yapmak için yeterli değil...",
        "Koç Holding'in hisse değeri şu anda 139,80 Türk Lirası. Ancak, yatırımcı profiline göre bu miktarın alım için yeterli olup olmadığını değerlendirmek önemlidir...",
        "Akbank hisseleri şu anda 34,84 TL seviyesindedir. Ancak, bu fiyatın alım yapmak için yeterli olup olmadığını belirlemek için yatırımcı profilini analiz etmek önemlidir. Akbank genellikle finans sektöründe güçlü bir oyuncu olarak bilinir ve uzun vadeli yatırımlar için uygun olabilir. Ancak, küçük bütçeli yatırımcılar için bu miktar düşük olabilir.",
        "Şişecam'ın güncel hisse değeri 47,10 TL'dir. Ancak, yatırımcı profilinizi göz önünde bulundurarak, bu miktarın alım için yeterli olup olmadığını değerlendirmek önemlidir. Şişecam, genellikle dayanıklı malzemeler sektöründe faaliyet gösteren bir şirkettir ve bu nedenle uzun vadeli yatırım yapmayı düşünen yatırımcılar için çekici olabilir.",
        "CarrefourSA hisseleri şu anda 126,00 TL seviyesindedir. Ancak, bu fiyat seviyesinin yatırımcı profilinize uygun olup olmadığını değerlendirmek önemlidir. CarrefourSA, perakende sektöründe faaliyet gösteren bir şirket olduğu için genellikle kısa vadeli dalgalanmalara açık olabilir. Bu nedenle, yatırımcıların dikkatli bir şekilde değerlendirmesi gerekebilir."
    ];

    if (inputValue === "") {
        alert("Lütfen boşlukları doldurunuz!!!");
    } else {
        if (index < liste.length) {
            sonuclarDiv.innerHTML = inputValue + ' için sonuçlar: <br><strong>' + liste[index];
            index++;
            if(index >= liste.length){
                index = 0;
            }
        }
        sonuclarDiv.style.display = 'block'; //gizlenen div i açığa çıkar
        inputElement.value = '';
    }
}

//english
function gptEn() {
    var inputElement = document.getElementById('input');
    var inputValue = inputElement.value.trim();
    var sonuclarDiv = document.getElementById('sonuclar');

    var liste = [
        "SAHOL stocks are currently at 60.80 TL. However, it is important to evaluate whether this price is sufficient for buying based on the investor profile. If the investor has a small budget, this amount may not be enough for buying. Sabancı Holding is generally a large and established company, which may be more attractive for large-scale investors.",
        "The current stock value of THY is 254.00 TL. When analyzing your investor profile, this amount is not sufficient for buying...",
        "The stock value of Koç Holding is currently 139.80 Turkish Liras. However, it is important to evaluate whether this amount is sufficient for buying based on the investor profile...",
        "Akbank stocks are currently at 34.84 TL. However, it is important to analyze the investor profile to determine whether this price is sufficient for buying. Akbank is generally known as a strong player in the finance sector and may be suitable for long-term investments. However, this amount may be low for small-budget investors.",
        "The current stock value of Şişecam is 47.10 TL. However, it is important to evaluate whether this amount is sufficient for buying based on your investor profile. Şişecam is generally a company operating in the durable materials sector and may be attractive for investors considering long-term investments.",
        "CarrefourSA stocks are currently at 126.00 TL. However, it is important to evaluate whether this price level is suitable for your investor profile. CarrefourSA is a company operating in the retail sector, which may be prone to short-term fluctuations. Therefore, investors may need to evaluate carefully."
    ];

    if (inputValue === "") {
        alert("Please fill in the blanks!!!");
    } else {
        if (index < liste.length) {
            sonuclarDiv.innerHTML = "Results for " + inputValue + ": <br><strong>" + liste[index];
            index++;
            if(index >= liste.length){
                index = 0;
            }
        }
        sonuclarDiv.style.display = 'block'; // reveal the hidden div
        inputElement.value = '';
    }
}


function iletisimForm(){
    var ad = String(document.getElementById("name").value);
    var email = String(document.getElementById("email").value);
    var konu = String(document.getElementById("konu").value);
    var geriBildirim = String(document.getElementById("mesaj").value);
    
    if((ad.trim() != "" && email.trim() != "" && konu.trim() != "" && geriBildirim.trim() != "") && (email.includes("@") && email.includes("."))){
        alert("Geri bildiriminiz için teşekkür ederiz.");
    }
}

//english
function iletisimFormEn(){
    var ad = String(document.getElementById("name").value);
    var email = String(document.getElementById("email").value);
    var konu = String(document.getElementById("konu").value);
    var geriBildirim = String(document.getElementById("mesaj").value);
    
    if((ad.trim() != "" && email.trim() != "" && konu.trim() != "" && geriBildirim.trim() != "") && (email.includes("@") && email.includes("."))){
        alert("thank you for your feedback.");
    }
}




