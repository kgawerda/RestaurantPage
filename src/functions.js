function header(){
    const content=document.querySelector('#content');
    const header=document.createElement('div');
    header.classList.add('header');


    const homebtn=document.createElement('button');
    homebtn.id='homebtn';
    homebtn.textContent='Home'
    const menubtn=document.createElement('button');
    menubtn.id='menubtn';
    menubtn.textContent='Menu'
    const contactbtn=document.createElement('button');
    contactbtn.id='contactbtn';
    contactbtn.textContent='Contact'

    header.appendChild(homebtn);
    header.appendChild(menubtn);
    header.appendChild(contactbtn);
    content.appendChild(header);
}

function footer(){
    const content=document.querySelector('#content');
    const footer=document.createElement('div');
    footer.classList.add('footer');
    footer.textContent='Footer';
    content.appendChild(footer);
}

function clear(){
    const content=document.querySelector('#content');
    while(content.childNodes.length>2){
        content.removeChild(content.lastChild);
    }
}

export{clear, footer, header}