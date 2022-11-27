let acc = document.getElementsByClassName('accordion');
// console.log(acc);
const toggleBtn = document.querySelector('.toggle__btn');
let panels = document.querySelectorAll('.panel');
// console.log(panels);


for(let i=0; i < acc.length; i++){
    acc[i].addEventListener("click",function(){
        this.classList.toggle("active");
        let panelContainer = this.nextElementSibling;
        if(panelContainer.style.maxHeight){
            panelContainer.style.maxHeight = null;
        }
        else{
            panelContainer.style.maxHeight = panelContainer.scrollHeight + 'px';
        };
        
        // for(let j=0; j < acc.length; j++){
        //     if(acc[j] !== this){
        //         acc[j].classList.remove('active');
        //         acc[j].nextElementSibling.style.maxHeight = null;
        //     }
        // }
    });
}

toggleBtn.addEventListener("click",function(){
        for(let key of acc){
            key.classList.toggle('active');
        }
        for(let i of panels){
            if(i.style.maxHeight){
                i.style.maxHeight = null;
            }
            else{
                i.style.maxHeight = i.scrollHeight + 'px';
            }
        };
        this.classList.toggle('active');
        
        let className = this.getAttribute("class");
        // console.log(className);

        if(className !== 'toggle__btn'){
            toggleBtn.innerText = "Close";
        }
        else{
            toggleBtn.innerText = "Open";
        }

});


