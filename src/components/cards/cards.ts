export class Card extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const header = this.getAttribute('header') || 'Header content';
        const body = this.getAttribute('body') || 'Body content';
        const img = this.getAttribute('img') || 'imagenotfound.png';
        const imgAlt = this.getAttribute('imgAlt') || 'Image not found';
        const footer = this.getAttribute('footer') || 'Footer content';

        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <style>
                    .card {
                        display: flex;
                        flex-direction: column;
                        border: 1px solid #ccc;
                        border-radius: 5px;
                        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                        padding: 16px;
                        box-sizing: border-box;
                        max-width: max-content;
                        background-color: #fff;
                        font-family: Arial, sans-serif;
                        height: 100%;
                        width: 100%;
                        justify-content: space-around;
                    }

                    .card-header {
                        font-size: 1.5em;
                        font-weight: bold;
                        margin-bottom: 16px;
                    }

                    .card-body {
                        font-size: 1em;
                        margin-bottom: 16px;
                    }

                    .card-footer {
                        font-size: 0.9em;
                        color: #777;
                        text-align: right;
                    }
            </style>
            <div class="card">
                    <div class="card-header">
                        ${header}
                    </div>
                    <div class="card-img">
                        <img src="${img}" alt="${imgAlt}" style="width: 100%; height: auto; border-radius: 5px;">
                    </div>
                    <div class="card-body">
                        ${body}
                    </div>
                    <div class="card-footer">
                        ${footer}
                    </div>
            </div>
            `;
        }
    }
}
