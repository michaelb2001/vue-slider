
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
            console.log("ciao");
            this.current++;
            if(this.current == this.arrayObj.items.length ){
                this.current = 0;
            }
        },

        rendiActive : function(indice){
            this.current = indice;
            
        },

    },

    mounted : function(){
        setInterval(this.next,3000);
    },
});



