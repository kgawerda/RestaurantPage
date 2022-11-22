function menu(){
    const content=document.querySelector('#content');
    const main=document.createElement('div');
    main.classList.add('main');

    const menu=document.createElement('div');
    menu.classList.add('text');

    main.appendChild(menu);
    main.appendChild(menu.cloneNode(true));
    main.appendChild(menu.cloneNode(true));

    main.firstChild.textContent='Menu1'
    main.firstChild.nextSibling.textContent='Menu2'
    main.firstChild.nextSibling.nextSibling.textContent='Menu3'

    content.appendChild(main);
}

export default menu;