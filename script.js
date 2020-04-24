let points=0;
let random=0;
let selected_level="easy";
let el_points=document.getElementById("points");
let el_select_level=document.getElementById("selected-level");
let el_select_level_qs=document.querySelector("#selected-level");
let el_jumbld_word=document.getElementById("jumbld-word");
let dictionary={};
dictionary["easy"]=[
    {
        jumbld_word:"epnal",
        solution:["plane","panel","penal"]
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
        jumbld_word:"nlowdkco",
        solution:["lockdown"]
    }
];

el_select_level_qs.addEventListener('change',(event) => {
    selected_level=event.target.value;
    onBodyLoad();
})

function onBodyLoad()
{ 
     random=Math.floor(Math.random()*dictionary[selected_level].length);
     el_jumbld_word.innerText=dictionary[selected_level][random].jumbld_word;
}
function onSubmit()
{
    let solution=document.getElementById("answer").value;
    //check if the solution is correct
    if(dictionary[selected_level][random].solution.includes(solution.toLowerCase()))
    {
    
    if(selected_level=="easy") 
        points+=1;
    else if(selected_level=="medium")
        points+=2;
    else
        points+=3;
    el_points.innerText=points;
    alert(`Hurray! You won ${points} point`)
    }
    else{
        alert("Sorry! Wrong answer");
    }
}
function onCancel()
{
    alert("Cancel");
}