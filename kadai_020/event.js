//HTML要素をidで取得し、中身を出力する
const text = document.getElementById('text');

//HTML要素をidで取得し、中身を出力する
btn text = document.getElementById('btn');

//HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  document.getElementById('text') .textContent= 'ボタンをクリックしました';
});
