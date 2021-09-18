
class Temperature extends HTMLElement {
 
    constructor() {
        super();
        this.build();

        // const teste = this.getAttribute("celsius");
    }

    build() {
                const shadow = this.attachShadow({ mode: "open" });
                const component = this.createElement();
                shadow.appendChild(component);
    }


    createElement() {
        const divElement = document.createElement("div");
        const element = document.createElement("h1");
        element.setAttribute("style", "font-size: 8rem")

        const teste = this.getAttribute("temperature");
        element.innerText = teste;

        divElement.appendChild(element);

        return divElement;
    }

    //     <div>
    //     <h1 class="text-9xl z-10">4</h1>
    // </div>
}



    customElements.define("temperature-component", Temperature);


