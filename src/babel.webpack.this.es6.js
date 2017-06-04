if (document.getElementById('matrix').innerHTML.search('PHP OUTPUT') !== -1){
    runFn();
}

function runFn(){
    let ref = document.querySelector('#matrix').children;
    let newArray = [];
    let counter = 1;
    let length = ref.length;
    for(let i = 0; i < length; i++) {
        newArray[i] = [];
        for(let j = 0; j < length; j++) {
            newArray[i][j] = counter;
            counter += 1;
        }
    }
    doWork(newArray, doMap(newArray));
}

function doMap(container){
    return container.map((c) => c.slice() );
}

function doWork(container, original) {
    let newSnail = new Array();
    do {
        
        container.length ? newSnail.splice(newSnail.length, 1, ...container.shift()) : '';
        
        for(let i = 0; i <= container.length - 1; i++) {
            container[i] ? newSnail.splice(newSnail.length, 1, container[i].pop()) : '';
        }
        
        container.length ? newSnail.splice(newSnail.length, 1, ...container.pop().reverse()) : '';
        
        for(let i = container.length; i >= 0; i--){
            container[i] ? newSnail.splice(newSnail.length, 1, container[i].shift()) : '';
        }
        
    } while (container.length);

document.getElementById("original").innerHTML = `Original:&nbsp ${original}`;
document.getElementById("answer").innerHTML =   `Answer:&nbsp&nbsp ${newSnail}`;

for(let i = 0; i < newSnail.length; i++) {
    setTimeout( (function(i) {
      return function() { 
          document.querySelectorAll('.cell')[(newSnail[i] - 1)].style.background = 'pink';
      }})(i), i*80);
}

}