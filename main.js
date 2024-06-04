function test1(){
    const offerlistelm=document.getElementById('offers-list');
    offerlistelm.classList.remove('show-all','show-one','show-two','show-three','show-four');
    offerlistelm.classList.add('show-all');
    document.getElementById('offers-list').style.display = "block";
    document.getElementById('one').style.display="block";
    document.getElementById('two').style.display="block";
    document.getElementById('three').style.display="block";
    document.getElementById('four').style.display="block";
}

function test2(){
    const offerlistelm=document.getElementById('offers-list');
    offerlistelm.classList.remove('show-all','show-one','show-two','show-three','show-four');
    offerlistelm.classList.add('show-one');
    document.getElementById('one').style.display = "block";
    document.getElementById('offers-list').style.display = "none";
    document.getElementById('two').style.display="none";
    document.getElementById('three').style.display="none";
    document.getElementById('four').style.display="none";
}

function test3(){
    const offerlistelm=document.getElementById('offers-list');
    offerlistelm.classList.remove('show-all','show-one','show-two','show-three','show-four');
    offerlistelm.classList.add('show-two');
    document.getElementById("offers-list").style.display = "none";
    document.getElementById("one").style.display = "none";
    document.getElementById("two").style.display = "block";
    document.getElementById("three").style.display="none";
    document.getElementById("four").style.display="none";
}

function test4(){
    const offerlistelm=document.getElementById('offers-list');
    offerlistelm.classList.remove('show-all','show-one','show-two','show-three','show-four');
    offerlistelm.classList.add('show-three');
    document.getElementById("offers-list").style.display = "none";
    document.getElementById("one").style.display = "none";
    document.getElementById("two").style.display = "none";
    document.getElementById("three").style.display="block";
    document.getElementById("four").style.display="none";
}

function test5(){
    const offerlistelm=document.getElementById('offers-list');
    offerlistelm.classList.remove('show-all','show-one','show-two','show-three','show-four');
    offerlistelm.classList.add('show-four');
    document.getElementById("offers-list").style.display = "none";
    document.getElementById("one").style.display = "none";
    document.getElementById("two").style.display = "none";
    document.getElementById("three").style.display="none";
    document.getElementById("four").style.display="block";
}