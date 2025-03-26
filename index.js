/会社概要
//クラス名が「scroll-in」の要素を取得
const objects = document.querySelectorAll('.scroll-in');

//スクロール感知で実行
const cb = function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('displayed');//スクロール感知で「displayed」のクラス名を付与
            observer.unobserve(entry.target); //監視の終了
        }
    });
}
// オプション
const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0
}

// IntersectionObserverインスタンス化
const io = new IntersectionObserver(cb, options);

// 監視を開始
objects.forEach(object => {
    io.observe(object);
});


////////////////////////



//会員ページ//

function showOrHide() {
    let showpass = document.getElementById("pass");
    let check = document.getElementById("showpassword");
    if (check.checked) {
        showpass.type = "text";
    } else {
        showpass.type = "password";
    }
}

let userdata = [
    { name: "丸木運輸工事株式会社", password: "HanwaMaruki" },
    { name: "丸木運輸工事株式会社総務部", password: "HanwaSoumu" } // 追加されたユーザー情報
];

function login() {
    let loginuser = "";
    let username = document.getElementById("username").value;
    let password = document.getElementById("pass").value;

    let found = false;
    let i = 0;

    while (!found && i < userdata.length) {
        loginuser = userdata[i];
        if (loginuser.hasOwnProperty("name") && loginuser.hasOwnProperty("password")) {
            if (loginuser.name === username && loginuser.password === password) {
                found = true;
            }
        }
        i++;
    }

    if (found) {
        alert(`ようこそ。${username}さん。`);
        
        // 別のページにリダイレクト
        window.location.href = "companysyainpage.html"; // ここにリダイレクト先のURLを入力
    } else {
        alert("ログインに失敗しました。入力している内容がデータと一致しませんでした。");
        console.log("Login failed. Data in the user data variable may be corrupted or entered incorrectly. If there are no typos in what you entered, please check the userdata variable in javascript.");
    }
}
