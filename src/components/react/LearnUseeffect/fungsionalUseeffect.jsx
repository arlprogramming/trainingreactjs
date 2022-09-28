import React, { useEffect, useState } from "react";

const Fungsionaluseeffect = () => {
  //useEffect memiliki 2 parameter, yaitu : callback dan depedensi.

  //1. callback => jika seperti ini tanpa depedensi isi useEffect akan dilakukan setiap rendering / browser pertama kali dibuka
  const [counter, setCounter] = useState(0);

  let addCounterr = () => {
    let button1 = document.getElementById("button1");
    let button2 = document.getElementById("button2");
    let button3 = document.getElementById("button3");
    button1.addEventListener("click", (e) => {
      setCounter(counter + 1);
    });

    button2.addEventListener("click", (e) => {
      setCounter(counter - 1);
    });

    button3.addEventListener("click", (e) => {
      setCounter((counter = 0));
    });
  };

  // useEffect(() => {
  //   document.title = `anda mengklik ${counter}X`;
  //   alert("halo hehe");
  // });

  //2. depedensi => ada tambahan nilai sebuah array diakhir function
  //dan jika depedensinya kosong seperti ini useEffect ini hanya dilakukan sekali setiap rendering.
  //const [posts, setPosts] = useState(null);

  //fetch API
  // useEffect(() => {
  //   const getPosts = async () => {
  //     const fetchPost = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts"
  //     );
  //     const jsonPosts = await fetchPost.json();
  //     setPosts(jsonPosts);
  //   };
  //   getPosts();
  // }, []);

  // console.log(posts);

  //jika depedensi muncul berdasarkan sesuatu data yang berubah dan lakukan sesuatu menggunakan ini :
  const [notif, setNotif] = useState();
  useEffect(() => {
    if (counter > 4) {
      setNotif("Banyak");
    }
    if (counter > 9) {
      setNotif("Banyak banget");
    }
  }, [counter]);

  return (
    <div>
      <h1>Hallo this is useEffect in function</h1>
      <h5>Notifnya adalah : {notif}</h5>
      <div className="containerpage">
        <div className="page1">
          <h2>Counter</h2>
          <h2>{counter}</h2>
          <button id="button1" onClick={addCounterr}>
            +
          </button>
          {/* untuk onClick bisa juga => onClick={() => setPlayers((prev)=>prev + 1)} */}
          <button id="button2" onClick={addCounterr}>
            -
          </button>
          {/* untuk onClick bisa juga => onClick={() => setPlayers((prev)=>prev - 1)} */}
          <button id="button3" onClick={addCounterr}>
            set
          </button>
        </div>
        <div className="page2"></div>
      </div>
    </div>
  );
};

export default Fungsionaluseeffect;
