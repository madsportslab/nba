/* madsportslab.js */

const NEWS_ID               = "news";

const TAG_DIV               = "div";
const TAG_H5                = "h5";
const TAG_H6                = "h6";
const TAG_P                 = "p";
const TAG_A                 = "a";

const ATTR_CLASS            = "class";

const CLASS_CARD            = "card";
const CLASS_CARD_BODY       = "card-body";
const CLASS_CARD_SUBTITLE   = "card-subtitle";
const CLASS_CARD_TEXT       = "card-text";
const CLASS_CARD_TITLE      = "card-title";

const CLASS_ROW             = "row";
const CLASS_COL             = "col";


function addArticle(title, content) {

  const news = document.getElementById(NEWS_ID);

  const card            = document.createElement(TAG_DIV);
  const cardBody        = document.createElement(TAG_DIV);
  const cardTitle       = document.createElement(TAG_H5);
  const cardSubTitle    = document.createElement(TAG_H6);
  const cardText        = document.createElement(TAG_P);

  card.setAttribute(ATTR_CLASS, CLASS_CARD);
  cardBody.setAttribute(ATTR_CLASS, CLASS_CARD_BODY);
  cardTitle.setAttribute(ATTR_CLASS, CLASS_CARD_TITLE);
  cardSubTitle.setAttribute(ATTR_CLASS, CLASS_CARD_SUBTITLE);
  cardText.setAttribute(ATTR_CLASS, CLASS_CARD_TEXT);

  cardTitle.innerHTML   = title;
  cardText.innerHTML    = content;
  cardSubTitle.innerHTML = "Jan 6, 2023";

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardSubTitle);
  cardBody.appendChild(cardText);

  card.appendChild(cardBody);

  news.appendChild(card);

} // addArticle
