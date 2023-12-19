//HTML要素をidで取得し、中身を出力する
const text = document.getElementById('text');

const text2 = document.getElementById('text2');

//HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  const childList = document.createElement('li');
  childList.textContent = 'ボタンをクリックしました';
  text2.appendChild(childList);
});
