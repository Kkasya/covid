export default function create(elem, classes, childs, parent, ...dataAttr) {
    let element = null;
    try {
        element = document.createElement(elem);
    } catch (error) {
        throw new Error('Unable to create HTMLElement');
    }

    if (classes) {
        element.classList.add(...classes.split(' '));
    }
    if (childs && Array.isArray(childs)) {
        childs.forEach((child) => {
            child && element.appendChild(child);
        });
    } else if (childs && typeof childs === 'object') {
        element.appendChild(childs);
    } else if (childs && typeof childs === 'string') {
        element.innerHTML = childs;
    }

    if (parent) {
        parent.appendChild(element);
    }

    if (dataAttr.length) {
        dataAttr.forEach(([attrName, attrValue]) => element.setAttribute(attrName, attrValue));
    }
    return element;
}
