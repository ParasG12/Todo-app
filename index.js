let container = document.getElementById('container')

let addItem = document.getElementById('add')
let removeItem = document.getElementById('remove')
let i = 0;
let key =null;
addItem.addEventListener('click',()=>{
    key = prompt("enter key you want to add");
    let msg = prompt("enter message to add");
    let a = localStorage.getItem(key);
    if(a!=null){
        localStorage.setItem(key,msg);
        let b = document.getElementsByClassName(`${key}`)[0]
      
       b.innerHTML=`<h3>${msg}</h3>`

    }
    else{
    if(msg){
        // key = `key${i}`;
       localStorage.setItem(key,msg);
    let elem = document.createElement('i');
    elem.innerHTML=`<h3>${localStorage.getItem(key)}</h3>`
    elem.classList.add(`${key}`)
    container.appendChild(elem);
    elem.style.borderBottom="2px solid black";
    // i++;

    }
}

})
removeItem.addEventListener('click',()=>{
    // let length = localStorage.length;
    // if(length!=0){
        let ans = prompt("enter key of message want to delete");
        if(ans){
            localStorage.removeItem(ans);
            let it = document.getElementsByClassName(`${ans}`)[0]
            container.removeChild(it)
            // it.innerHTML=null;

            // if(i!=0){
            //     i--;
            // }
            
            console.log("hi");

        }
    

})


