import "./App.css";
import React from 'react'


function Arama({aramaMetni,onSearch}){

  function handleChange(event){
    //setAramaMetni(event.target.value);
    onSearch(event);
  }
  return (
    <div> 
      <label htmlFor="arama">Ara: </label>
      <input  class ="arama"id="arama" type="text" onChange={handleChange} value={aramaMetni}/>
      
    </div>
  )
}
function Yazi(props){// ust bilesenlerden alt bilesenlere veri aktarımı ıcın props kullanılır.
  return (
    <li key={props.yazi.id}>
              <span>
                <a href={props.yazi.url}>{props.yazi.baslik}</a>, 
              </span>
              <span><b>Yazar:</b> {props.yazi.yazar}, </span>
              <span><b>Yorum Sayısı:</b> {props.yazi.yorum_sayisi}, </span>
              <span><b>Puan:</b> {props.yazi.puan}</span>
            </li>
  )
}
function Liste(props){
  return (
    <ul class="kertenkeleNecati">
        {props.yazilar.map(function (yazi) {
          return (
            <Yazi key={yazi.id} yazi={yazi}/>
          );
        })}{" "}
      </ul>
  )
}

function App() {
  const[aramaMetni,setAramaMetni]=React.useState(localStorage.getItem("aranan")||"");

  const yaziListesi = [
    {
      baslik: "React Öğreniyorum",
      url: "www.sdu.edu.tr",
      yazar: "Sinan Yüksel",
      yorum_sayisi: 3,
      puan: 4,
      id: 0,
    },
    {
      baslik: "Web Teknolojileri ve Programlama",
      url: "wwww.google.com.tr",
      yazar: "Asım Yüksel",
      yorum_sayisi: 2,
      puan: 5,
      id: 1,
    },
    {
      baslik: "C# Console Dersleri",
      url: "wwww.google.com.tr",
      yazar: "Murat Yücedağ",
      yorum_sayisi: 922,
      puan: 9,
      id: 2,
    },
    {
      baslik: "Veri Yapıları Ve Algoritmaları",
      url: "wwww.google.com.tr",
      yazar: "Muhammed Maruf",
      yorum_sayisi: 1347234,
      puan: 9.9999,
      id: 3,
    },
    {
      baslik: "Unity Oyun Geliştirme Dersi",
      url: "wwww.google.com.tr",
      yazar: "Furkan Yıldırım",
      yorum_sayisi: 1,
      puan: 0,
      id: 4,
    },
  ];

  React.useEffect(()=>{
    localStorage.setItem("aranan",aramaMetni)
  },[aramaMetni]);


  const arananYazilar=yaziListesi.filter(
    function(yazi){
      if(yazi.baslik.toLowerCase().includes(aramaMetni.toLowerCase())){
        return yazi;
      }
      else if(yazi.yazar.toLowerCase().includes(aramaMetni.toLowerCase())){
        return yazi;
      }
      
    }
  );

  // 1.aşama  callback handler metod oluşturma
  function handleSearch(event){
    console.log(event.target.value);
    setAramaMetni(event.target.value);
  }

  return (
    <>
      <h1>Yazılar</h1>
      <Arama aramaMetni={aramaMetni} onSearch={handleSearch}/>
      <p>
        <strong>{aramaMetni} aranıyor...</strong>
      </p>
      <hr />
      <Liste yazilar={arananYazilar}/>
      
    </>
  );
}
export default App;
