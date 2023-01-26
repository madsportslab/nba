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

const ID_CREATION           = ".creation";
const ID_TITLE              = ".title";
const ID_ARTICLES           = ".articles";
const ID_NEWS               = ".news";


function createList() {

  let meta = gh.meta;

  for(let i = 0; i < meta.content.length; i++) {
    
    addArticle(meta.content[i], true);
    addArticle(meta.content[i], false);

  }

} // createList


function updateArticle(c) {

  const a1 = document.getElementById(c + ID_NEWS);
  const a2 = document.getElementById(c + ID_ARTICLES);

  let d = gh.articles.get(c);

  const articleShort = marked.parse(d.summary(200));
  const articleLong = marked.parse(d.content);

  const titleNews = document.getElementById(
    c + ID_TITLE + ID_NEWS);
  
  const titleArticles = document.getElementById(
    c + ID_TITLE + ID_ARTICLES);

  a1.innerHTML = articleShort;
  a2.innerHTML = articleLong;

  titleNews.innerText         = d._title;
  titleArticles.innerText     = d._title;

  //const creation = document.getElementById(c + ".creation");

  //console.log(d._creation);
  //console.log(Date.now());

  //creation.innerText = new Date(d._creation);

} // updateArticle


function addArticle(a, isSummary) {

  var obj = null;

  if(isSummary) {
    obj = document.getElementById(NEWS_ID);
  } else {
    obj = document.getElementById(ARTICLES_ID);
  }

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

  if(isSummary) {
    cardSubTitle.setAttribute(ATTR_ID, a.id + ID_CREATION + ID_NEWS);
  } else {
    cardSubTitle.setAttribute(ATTR_ID, a.id + ID_CREATION + ID_ARTICLES);
  }

  cardText.setAttribute(ATTR_CLASS, CLASS_CARD_TEXT);

  const url = gh._page + "/" + a.id;

  link.setAttribute(ATTR_HREF, url);

  if(isSummary) {

    cardText.setAttribute(ATTR_ID, a.id + ID_NEWS);
    link.setAttribute(ATTR_ID, a.id + ID_TITLE + ID_NEWS);

  } else {

    cardText.setAttribute(ATTR_ID, a.id + ID_ARTICLES);
    link.setAttribute(ATTR_ID, a.id + ID_TITLE + ID_ARTICLES);

  }

  cardSubTitle.innerText  = new Date(a.timestamp * 1000).toUTCString();

  cardTitle.appendChild(link);

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardSubTitle);
  cardBody.appendChild(hr);
  cardBody.appendChild(cardText);

  card.appendChild(cardBody);

  obj.appendChild(card);

  gh.getContent(a.id, updateArticle);

} // addArticle
