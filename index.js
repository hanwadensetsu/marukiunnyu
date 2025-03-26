



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
