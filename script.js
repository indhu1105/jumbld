let points=localStorage.getItem("point");
let random=0;
let secs=0;
let interval;
let selected_level="easy";
let el_points=document.getElementById("points");
let el_select_level=document.getElementById("selected-level");
let el_select_level_qs=document.querySelector("#selected-level");
let el_jumbld_word=document.getElementById("jumbld-word");
let el_timer=document.getElementById("remaining");
let dictionary={};
dictionary["easy"]=[
    {
        jumbld_word:"epnal",
        solution:["plane","panel","penal","nepal"]
    },
    {
        jumbld_word:"eter",
        solution:["tree"]
    },
    {
        jumbld_word:"eric",
        solution:["rice"]
    },
    {
        jumbld_word:"cpase",
        solution:["space"]
    },
    {
        jumbld_word:"pplea",
        solution:["apple"]
    }
],
dictionary["medium"]=[
    {
        jumbld_word:"oenrag",
        solution:["orange"]
    },
    {
        jumbld_word:"raycz",
        solution:["crazy"]
    },
    {
        jumbld_word:"srwnae",
        solution:["answer"]
    },
    {
        jumbld_word:"ulzpez",
        solution:["puzzle"]
    },
    {
        jumbld_word:"oplpat",
        solution:["laptop"]
    }
],
dictionary["hard"]=[
    {
        jumbld_word:"aidmeteim",
        solution:["immediate"]
    },
    {
        jumbld_word:"etronivnmne",
        solution:["environment"]
    },
    {
        jumbld_word:"ateplhen",
        solution:["elephant"]
    },
    {
        jumbld_word:"emeertruapt",
        solution:["temperature"]
    },
    {
        jumbld_word:"percsoicmo",
        solution:["microscope"]
    },
    {
        jumbld_word:"nlowdkco",
        solution:["lockdown"]
    }
];

if(points) {
    points = 0;
  }
  
el_select_level_qs.addEventListener('change',(event) => {
    selected_level=event.target.value;
    onBodyLoad();
})

function setTimer()
{
    console.log("start");
    secs=1*60 || 0;
    interval=setInterval(function(){
      el_timer.innerText=secs--;
      if(secs==0)
      {
          closeTimer();
      }  
    },1000);
}
function closeTimer() {
    console.log("close");
    clearInterval(interval);
    document.getElementById("time").innerHTML="Time Up";
    onBodyLoad();
}
function onBodyLoad()
{ 
    console.log("calling");
    setTimer();
     document.getElementById("answer").value='';
     random=Math.floor(Math.random()*dictionary[selected_level].length);
     el_jumbld_word.innerText=dictionary[selected_level][random].jumbld_word;
}
function onSubmit()
{
    let solution=document.getElementById("answer").value;
    //check if the solution is correct
    if(dictionary[selected_level][random].solution.includes(solution.toLowerCase()))
    {  

    if(selected_level=="easy") {
        points+=1;
        alert("Hurray! You won 1 point");
        console.log(points);
       }
    else if(selected_level=="medium") {
        points+=3;
        alert("Hurray! You won 3 points");
        console.log(points);
        }
    else {
        points+=5;
        alert("Hurray! You won 5 points");
        console.log(points);
    }  
    el_points.innerText=points;
    onBodyLoad();
    localStorage.setItem('point',points);
    }
    else{
        alert("Sorry! Wrong answer");
    }
}
function onCancel()
{
    alert("Cancel");
}