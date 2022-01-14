let vm = new Vue({
    el:"#app",
    data:{
        current : 1,
        arrayObj: {
            items : [
                'img/01.jpg',
                'img/02.jpg',
                'img/03.jpg',
                'img/04.jpg',
                'img/05.jpg'
            ],
            title : [
                'Svezia',
                'Svizzera',
                'Gran Bretagna',
                'Germania',
                'Paradise'
            ],
            text : [
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                'Lorem ipsum',
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            ]
        }

    },
    methods:{
        isactive : function(indice){
            if (indice == this.current) {
                return "active";
            }
            return "";

        },

        prev : function(){
            this.current--;
            if(this.current < 0){
                this.current = this.arrayObj.items.length - 1;
            }
        },

        next : function(){
            this.current++;
            if(this.current == this.arrayObj.items.length ){
                this.current = 0;
            }
        },

        rendiactive : function(indice){
            this.current = indice;
        }
    }
});



/*
let contenutiL="";
for(let i=0 ; i<items.length; i++){

    if(i==1){
        contenutiL += 
        `<img src="${items[i]}" id="item-${i}" class="active">`;
    }else{
        contenutiL += 
        `<img src="${items[i]}" id="item-${i}">`;
    }
}

document.getElementById("laterale").innerHTML = 
`<div id="prev">&uarr;</div>
 <div id="next">&darr;</div>${contenutiL}`;

counter =1;

const prev = document.getElementById("prev");
const next = document.getElementById("next");

prev.addEventListener('click',function(){
    document.getElementById("item-"+counter).classList.remove("active");
    counter--;
    if(counter==-1){
        counter++;
        document.getElementById("item-p-"+counter).classList.remove("active");
        document.getElementById("item-p-"+counter).classList.add("hidden");
        counter=items.length-1;
        document.getElementById("item-"+counter).classList.remove("hidden");
        document.getElementById("item-"+counter).classList.add("active");
        document.getElementById("item-p-"+counter).classList.remove("hidden");
        document.getElementById("item-p-"+counter).classList.add("active"); 
    }else{
        counter++;
        document.getElementById("item-p-"+counter).classList.remove("active");
        document.getElementById("item-p-"+counter).classList.add("hidden");
        counter--;
        document.getElementById("item-"+counter).classList.remove("hidden");
        document.getElementById("item-"+counter).classList.add("active");
        document.getElementById("item-p-"+counter).classList.remove("hidden");
        document.getElementById("item-p-"+counter).classList.add("active");
    }

});

next.addEventListener('click',function(){
    document.getElementById("item-"+counter).classList.remove("active");
    counter++;
    if(counter == items.length){
        counter--;
        document.getElementById("item-p-"+counter).classList.remove("active");
        document.getElementById("item-p-"+counter).classList.add("hidden");
        counter=0;
        document.getElementById("item-"+counter).classList.remove("hidden");
        document.getElementById("item-"+counter).classList.add("active");
        document.getElementById("item-p-"+counter).classList.remove("hidden");
        document.getElementById("item-p-"+counter).classList.add("active");
    }else{
        counter--;
        document.getElementById("item-p-"+counter).classList.remove("active");
        document.getElementById("item-p-"+counter).classList.add("hidden");
        counter++;
        document.getElementById("item-"+counter).classList.remove("hidden");
        document.getElementById("item-"+counter).classList.add("active");
        document.getElementById("item-p-"+counter).classList.remove("hidden");
        document.getElementById("item-p-"+counter).classList.add("active");
    }
 
});*/
