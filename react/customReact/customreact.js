const maincontainer=document.querySelector("#root");
const reactelement={
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank'
    },
    content:'Click on me to navigate google'
}
function customRender(reactelement,maincontainer){
    const domElement=document.createElement(reactelement.type)
    domElement.innerHTML=reactelement.content;
    // domElement.setAttribute('href',reactelement.props.href);
    // domElement.setAttribute('target',reactelement.props.target);
    for(const prop in reactelement.props){
        domElement.setAttribute(prop,reactelement.props[prop]);
    }
    maincontainer.appendChild(domElement);

}
customRender(reactelement,maincontainer)
{/* <a href="https://www.google.com" target="_blank">Click on me </a> */}