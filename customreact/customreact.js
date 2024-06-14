function customRender(reactElemet, container) {
    /*const domELement = document.createElement(reactElement.type)
    domELement.innerHTML = reactElement.children
    domELement.setAttribute('href', reactElement.props.href)
    domELement.setAttribute('target', reactElement.props.target)
    container.appendChild(domELement)
    */
    const domELement = document.createElement(reactElement.type)
    domELement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        domELement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domELement)
}
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'CLick me to visit Google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)