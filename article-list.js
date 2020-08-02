import "./article-item.js";

class articleList extends HTMLElement{
    set articles(articlees){
        this._articles = articlees;
        this.render();
    }

    render(){
        this._articles.forEach(article => {
            const articleItemElement = document.createElement("article-item");
            //memanggil fungsi setter article pada article-item
            articleItemElement.article = article;
            this.appendChild(articleItemElement);
        });
    }
}

customElements.define("article-list", articleList);