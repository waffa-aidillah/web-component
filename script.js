import "./article-item.js"
import article from "./article.js";

const containerleElement = document.querySelector(".container");

const customArticleElement = document.createElement("article-item");
customArticleElement.article = article;

containerleElement.appendChild(customArticleElement);