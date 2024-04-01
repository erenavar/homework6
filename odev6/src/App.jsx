import React, { useEffect } from "react";
import Header from "../components/Header";
import "../components/Styles.css";
import { useState } from "react";

const App = () => {
  const emojiList = [
    {
      title: "100",
      symbol: "💯",
      description: "The emoji reprensents smiling person",
    },
    {
      title: "1234",
      symbol: "🔢",
      description: "The emoji reprensents smiling person",
    },
    {
      title: "Sırıtma",
      symbol: "😀",
      description: "The emoji reprensents smiling person",
    },
    {
      title: "Ekşitme",
      symbol: "😬",
    },
    {
      title: "Sırıtış",
      symbol: "😁",
    },
    {
      title: "Neşeli",
      symbol: "😂",
    },
    {
      title: "Gülen Yüz",
      symbol: "😃",
    },
    {
      title: "Gülümsemek",
      symbol: "😄",
    },
    {
      title: "Tatlı Gülüş",
      symbol: "😅",
    },
    {
      title: "Kahkaha Atma",
      symbol: "😆",
    },
    {
      title: "Sevimli Melek",
      symbol: "😇",
    },
    {
      title: "Göz Kırpma",
      symbol: "😉",
    },
  ];

  const [results, setResults] = useState(emojiList);

  // useEffect(() => {
  //   fetch("https://emojihub.yurace.pro/api/all")
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // });

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Emoji copied to clipboard");
    });
  };

  const handleSearch = (text) => {
    const newList = emojiList.filter((emoji) =>
      emoji.title.toUpperCase().includes(text.toUpperCase())
    );
    setResults(newList);
  };

  return (
    <>
      <Header />
      <input
        className="input"
        placeholder="Search Emoji"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <hr style={{ color: "lightgray" }} />
      <main>
        <div className="infos">
          {results.map((emoji) => (
            <div
              onClick={() => copyToClipboard(emoji.symbol)}
              className="emojis"
            >
              <text style={{ marginLeft: 10 }}>
                {emoji.symbol} {emoji.title}
              </text>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default App;
