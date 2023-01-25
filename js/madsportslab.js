/* madsportslab.js */

const NEWS_ID               = "news";
const ARTICLES_ID           = "articles";

const TAG_DIV               = "div";
const TAG_H5                = "h5";
const TAG_H6                = "h6";
const TAG_P                 = "p";
const TAG_A                 = "a";
const TAG_HR                = "hr";

const ATTR_CLASS            = "class";
const ATTR_ID               = "id";
const ATTR_HREF             = "href";

const CLASS_CARD            = "card";
const CLASS_CARD_BODY       = "card-body";
const CLASS_CARD_SUBTITLE   = "card-subtitle";
const CLASS_CARD_TEXT       = "card-text";
const CLASS_CARD_TITLE      = "card-title";

const CLASS_ROW             = "row";
const CLASS_COL             = "col";


function createList() {

  let meta = gh.meta;

  for(let i = 0; i < meta.content.length; i++) {
    addArticle(meta.content[i]);
  }

} // createList


function updateArticle(c) {

  const a = document.getElementById(c);

  let d = gh.articles.get(c);

  const article = marked.parse(d.summary(200));
  
  a.innerHTML = article;

  const title = document.getElementById(c + ".title");

  title.innerText = d._title;

  //const creation = document.getElementById(c + ".creation");

  //console.log(d._creation);
  //console.log(Date.now());

  //creation.innerText = new Date(d._creation);

} // updateArticle


function addArticle(a) {

  const news = document.getElementById(NEWS_ID);

  const card            = document.createElement(TAG_DIV);
  const cardBody        = document.createElement(TAG_DIV);
  const cardTitle       = document.createElement(TAG_H5);
  const cardSubTitle    = document.createElement(TAG_H6);
  const cardText        = document.createElement(TAG_P);
  const link            = document.createElement(TAG_A);
  const hr              = document.createElement(TAG_HR);

  card.setAttribute(ATTR_CLASS, CLASS_CARD);
  cardBody.setAttribute(ATTR_CLASS, CLASS_CARD_BODY);
  cardTitle.setAttribute(ATTR_CLASS, CLASS_CARD_TITLE);
  cardSubTitle.setAttribute(ATTR_CLASS, CLASS_CARD_SUBTITLE);
  cardSubTitle.setAttribute(ATTR_ID, a.id + ".creation");
  cardText.setAttribute(ATTR_CLASS, CLASS_CARD_TEXT);
  cardText.setAttribute(ATTR_ID, a.id);

  const url = gh._page + "/" + a.id;

  link.setAttribute(ATTR_HREF, url);
  link.setAttribute(ATTR_ID, a.id + ".title");

  cardSubTitle.innerText  = new Date(a.timestamp * 1000).toUTCString();

  cardTitle.appendChild(link);

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardSubTitle);
  cardBody.appendChild(hr);
  cardBody.appendChild(cardText);

  card.appendChild(cardBody);

  news.appendChild(card);

  gh.getContent(a.id, updateArticle);

} // addArticle
