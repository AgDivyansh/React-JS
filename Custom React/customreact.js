// console.log('js is working fine');


const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.youtube.com/',
        target: '_blank'
    },
    children: 'Click me to visite youtube'
}

function customRender(reactElement, container) {
    // const domElement = document.createElement(reactElement.type) ;
    // domElement.innerHTML = reactElement.children ;
    // domElement.setAttribute ( 'href' ,  reactElement.props.href) ;
    // domElement.setAttribute('target', reactElement.props.target) ;
    // container.appendChild(domElement)
    const ele = document.createElement(reactElement.type); 
    // ele = reactElement.type ;
    ele.innerHTML = reactElement.children ;
    for (const props in reactElement.props) {
        if (props === 'children')
            continue ;
        ele.setAttribute(props, reactElement.props[props]) ;
    }
    container.appendChild(ele)
}


const mianContainer = document.querySelector('#root') ;

customRender (reactElement, mianContainer) ;