
class Temperature extends HTMLElement {
 
    constructor() {
        super();
        this.build();
    }

    build() {
        const shadow = this.attachShadow({ mode: "open" });
        this.render()
    }

    render(){
        this.shadowRoot.innerHTML =  
        `
        <div>
            <h1 style='font-size: 7rem'>${this.temperature}</h1>
        </div>
        `;
    }

    static get observedAttributes() {//Observando se o valor de temperatura vai mudar
        return ['temperature'];
    }
      
    attributeChangedCallback(name, oldValue, newValue) {// Caso o valor mude, automaticamente já atualiza o valor para renderizar novamente
        this.temperature = newValue;  
        this.render()
    }

}



customElements.define("temperature-component", Temperature);


