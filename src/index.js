import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

/** ----------------------------------- */
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(`${i}回目のループ処理`);
}
// for 文
//初期設定値、条件式、変化式が必要

/** ----------------------------------- */
const obj = {
  CPU: "Core i9",
  Memory: "16GB",
  Storage: "256GB",
};

for (let i in obj) {
  console.log(i);
}

// for in 文
// 初期化やループ条件の記述をしなくても、中身のそれぞれ抽出することができる

/** ----------------------------------- */
