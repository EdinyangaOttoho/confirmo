//this is the contributors script
// please marge the things here if you like it 
// cause some new features are being added 

// confirm with question

//<button id="confirmo-left" class="confirmo-btn" style="background-color: green;" onclick="hi();closeconfirmomodal()">✔ Yes</button>

const firm= action =>{
    let user;
    const res= `${ action }`
    user=document.querySelector('body')
    user.innerHTML=`
    <center>
        <div class="confirmo-modal">
            ${ res}
            <div class="confirmo-controls" id='cont'><button id="confirmo-left" class="confirmo-btn" >✔ OK </button>
          
        </div>
       
   </center>
    `
    //now assign an event listener to the Ok button 
    const ok=document.querySelector('button');
     ok.addEventListener('click',()=>{
         user.style.display='none';
     })
    
    return user; 
}

// the user should parse what the wanna display out as thr function paramater of firm()
// obiabo's contribution 