function home(){
    const content=document.querySelector('#content');
    const main=document.createElement('div');
    main.classList.add('main');

    const homecontent=document.createElement('div');
    homecontent.classList.add('text');

    main.appendChild(homecontent);
    main.appendChild(homecontent.cloneNode(true));
    main.appendChild(homecontent.cloneNode(true));

    main.firstChild.textContent='Home1'
    main.firstChild.nextSibling.textContent='Home2'
    main.firstChild.nextSibling.nextSibling.textContent='Home3'

    content.appendChild(main);
}

export default home;

