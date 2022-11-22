function contact(){
    const content=document.querySelector('#content');
    const main=document.createElement('div');
    main.classList.add('main');

    const contact=document.createElement('div');
    contact.classList.add('text');

    main.appendChild(contact);
    main.appendChild(contact.cloneNode(true));
    main.appendChild(contact.cloneNode(true));

    main.firstChild.textContent='Contact1'
    main.firstChild.nextSibling.textContent='Contact2'
    main.firstChild.nextSibling.nextSibling.textContent='Contact3'

    content.appendChild(main);
}

export default contact;