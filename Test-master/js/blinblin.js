window.onload = function() {setInterval(msg1,1000);};

function msg1(){
    location.hash = '# 🎁 #';
    setTimeout(msg2,500);
}

function msg2(){
    location.hash = '# 🎄 #';
} 