const board = document.getElementById("board");

function createBoard(){
    for(let i = 0; i < 16; i++){
        bar = document.createElement("div");
        bar.style.width = "40px";
        bar.style.color = "black";
        let height = Math.floor(Math.random() * 300);
        bar.style.height = string(height);
        board.append(bar);
    }
}
