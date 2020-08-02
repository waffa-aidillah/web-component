import "./article-list.js"
import articles from "./articles.js";

const containerleElement = document.querySelector(".container");

const customArticleElement = document.createElement("article-list");
customArticleElement.articles = articles;

containerleElement.appendChild(customArticleElement);