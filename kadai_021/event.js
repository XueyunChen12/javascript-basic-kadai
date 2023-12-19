//HTML要素をidで取得し、中身を出力する
console.log(document.getElementById('text'));

//btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する
btn.addEventListener('click',()=>{
  setTimeout(() => {
    console.log('ボタンをクリックしました！');
  }, 2000);
})
