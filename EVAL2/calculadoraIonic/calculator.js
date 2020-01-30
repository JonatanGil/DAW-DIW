    function onLoad() {
        document.addEventListener("ionChange", setStyle);
        setStyle();

        botonesEvenlistener();


    }
    function setStyle() {
        document.querySelectorAll("ion-content ion-button").forEach(function(b) {
            b.expand = "block";
            b.strong = "true";
            b.fill = document.getElementById("type").value;
            b.size = document.getElementById("size").value;
        });
    }
    function setResult(value) {
        document.getElementById("result").innerHTML = value;
    }
    function getResult() {
        return(document.getElementById("result").innerHTML);
    }
    function add(key) {
        //console.log(key);
        var result = getResult();
        if (result!="0" || isNaN(key)) setResult(result + key);
        else setResult(key);
    }
    function calc() {
        var result = eval(getResult());
        setResult(result);
    }
    function del() {
        setResult(0);
    }

    function botonesEvenlistener(){

        var botones = document.querySelectorAll("ion-button");

        botones.forEach(element => {


            if(element.textContent == "Android"){
                    element.addEventListener("click", function(){window.open("index.html?ionic:mode=md",'_self');});
                    console.log(element.textContent);
            }else{
                if(element.textContent == "IOS"){
                    element.addEventListener("click", function(){window.open("index.html?ionic:mode=ios",'_self');});
                }else{

                    if(element.textContent=="AC"){
                        element.addEventListener("click", function(){del();});
                    }else{
                        if(element.textContent=="="){
                            element.addEventListener("click", function(){calc();});
                        }else{
                            element.addEventListener("click", function(){add(element.textContent);});
                        }
                    }
    
                }
            }
        

        });





    }