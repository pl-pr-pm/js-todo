const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

const createIncompleteList = (text) => {
  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = text;

  div.appendChild(li);

  const completeButton = document.createElement("button");
  completeButton.addEventListener("click", () => {
    // DONEボタンがおされたタイミングでFINISHEDにTODOを作成
    // RETURNボタンも作成
    // UNFINISHEDからTODOを削除

    // div要素作成
    const div = document.createElement("div");
    div.className = "list-row";
    // li要素作成
    const li = document.createElement("li");
    li.innerText = text;
    // button要素作成
    const returnButton = document.createElement("button");
    returnButton.innerText = "RETURN";

    returnButton.addEventListener("click", () => {
      // RETURNボタンをおされたタイミングでFINISHED TODOから削除し、UNFINISHED TODOに作成する
      const deleteTarget = returnButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      const text = returnButton.parentNode.firstElementChild.innerText;

      //未完了トドに追加する関数
      createIncompleteList(text);
    });

    // divに要素追加
    div.appendChild(li);
    div.appendChild(returnButton);

    // 追加対象のul要素を取得
    const completeUl = document.getElementById("complete-list");
    completeUl.append(div);

    // UNFINISHED TODOを削除
    const deleteTarget = completeButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.addEventListener("click", () => {
    //削除ボタンをおされたタイミングでトドを削除する
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  completeButton.innerText = "DONE";
  deleteButton.innerText = "DELETE";

  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(div);
};
