const board = document.querySelector(".board");
var row = [];

function column(element){
    this.element = element;
}

function disableButton(){
    document.querySelectorAll('button').forEach(element => {
        element.disabled = true;
    })
}

function enableButton(){
    document.querySelectorAll('button').forEach(element => {
        element.disabled = false;
    })
}


function createBoard(){
    for(let i = 0; i < 16; i++){
        let container = document.createElement("td");
        container.setAttribute("valign", "bottom");
        container.style.width = "40px";
        container.className = "container";
        board.append(container);

        let bar = document.createElement("div");
        bar.style.width = "40px";
        bar.style.backgroundColor = "black";
        bar.className = "bar";
        let height = Math.floor(Math.random() * 300) + 100;
        bar.style.height = String(height) + "px";
        container.append(bar);

        temp = new column(bar);
        row.push(temp);
    }
}

function reset(){
    for(let i = 0; i < row.length; i++){
        let height = Math.floor(Math.random() * 300) + 100;
        row[i].element.style.height = String(height) + "px";
        row[i].element.style.backgroundColor = "black";
    }

}

function bubbleSort(){
    disableButton();
    var n = row.length;
    var i = 0;
    var j = 0
    var interval = setInterval(function(){
        if(i > 0){
            row[j-1].element.style.backgroundColor = "black";
        }
        if(i >= n){
            clearInterval(interval);
            enableButton();
        } 
        if(j >= n-1-i){
            row[n-1-i].element.style.backgroundColor = "green";
            j = 0;
            i++;
        }
        bubbleSortHelper(j, n, i);
        j++;
    }, 100)
}

function bubbleSortHelper(j, n, i){
    console.log(j);
    j1 = row[j].element.style;
    j2 = row[j+1].element.style;
    j1color = j1.backGroundColor;
    j2color = j2.backgroundColor;
    j1height = j1.height;
    j2height = j2.height;

    row[j].element.style.backgroundColor = "red";
    j2color= "red";
    
    if(parseInt(j1height) > parseInt(j2height)){
        console.log('swap');
        temp = j1height;
        row[j].element.style.height = row[j+1].element.style.height;
        row[j+1].element.style.height = temp;
    }
}

/*
function insertionSort(){
    var interval = setInterval(function(){
        if(i >= n){
            clearInterval(interval);
        } 
        if(j >= n-1-i){
            row[n-1-i].element.style.backgroundColor = "green";
            j = 0;
            i++;
        }
        bubbleSortHelper(j, n, i);
        j++;
    }, 50)

    var n = row.length;
    var i = 0;
    var j = 0
    var interval = setInterval(function(){
        if(i >= n){
            clearInterval(interval);
        } 
        if(j >= n-1-i){
            row[n-1-i].element.style.backgroundColor = "green";
            j = 0;
            i++;
        }
        bubbleSortHelper(j, n, i);
        j++;
    }, 50)
}

insertionSortHelper(){

}*/


createBoard();