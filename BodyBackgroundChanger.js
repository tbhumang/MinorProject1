document.getElementById('changrColorBtn').addEventListener('click',function(){
    const randomColor ='#' + Math.floor(Math.random()*1).toString(16);
    document.body.style.backgroundColor=randomColor;
});