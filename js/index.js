const doc = document;

const display = doc.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const cWidth = canvas.clientWidth;
const cHeight = canvas.clientHeight;

const formTag = doc.forms.formTag;
const tag = formTag.tag;
const selectBtnTag = formTag.selectBtnTag;

const formTagCreate = doc.forms.formTagCreate;
const addNewTag = formTagCreate.addNewTag;
const titleRedWarn = doc.getElementById('red');
const addTagBtn = formTagCreate.addTagBtn;
const start = doc.querySelector('.start');

const formInfo = doc.forms.formInfo;
const addText = formInfo.addText;
const addClass = formInfo.addClass;
const addLink = formInfo.addLink;
const addSrc = formInfo.addSrc;
const addTextBtn = formInfo.addTextBtn;
const addClassBtn = formInfo.addClassBtn;
const addLinkBtn = formInfo.addLinkBtn;
const addSrcBtn = formInfo.addSrcBtn;
const errorText = doc.querySelector('.note');
const errorLink = doc.querySelector('.error-link');
const errorSrc = doc.querySelector('.error-src');

const formStyle = doc.forms.formStyle;
const addStyle = formStyle.addStyle;
const addStyleBtn = formStyle.addStyleBtn;

selectBtnTag.onclick = function() {
  const valueTag = tag.value;
  const options = tag.options;
  const index = tag.selectedIndex;
  const label = options[index].label;

  const newTag = doc.createElement(label);

  display.append(newTag);

  const lastAddedTag = display.lastElementChild;

  addTextBtn.onclick = function() {
    const valueText = addText.value;

    if (lastAddedTag.outerHTML.includes('</')) {
      lastAddedTag.innerHTML = valueText; 
      errorText.style.display = 'none';
    } else {
      errorText.style.display = 'contents';
    }
    
    formInfo.reset();
  }

  addClassBtn.onclick = function() {
    const valueClass = addClass.value;
    lastAddedTag.className = `${valueClass}`;
    formInfo.reset();
  }

  addLinkBtn.onclick = function() {
    const valueLink = addLink.value;
    lastAddedTag.href = `${valueLink}`;
    formInfo.reset();

    const valueText = addText.value;
    
    if (lastAddedTag.outerHTML.includes('</')) {
      lastAddedTag.innerHTML = valueText; 
      errorText.style.display = 'none';
    } else {
      errorText.style.display = 'contents';
    }
    
    formInfo.reset();

    // if (lastAddedTag.tagName.toLowerCase() === 'a') {
    //   lastAddedTag.href = `${valueLink}`;
    //   errorLink.style.display = 'none';
    // } else {
    //   errorLink.style.display = 'contents';
    // }
  }

  addSrcBtn.onclick = function() {
    const valueSrc = addSrc.value;
    lastAddedTag.src = `${valueSrc}`;
    formInfo.reset();

    // if (lastAddedTag.tagName.toLowerCase() === 'img' || lastAddedTag.tagName.toLowerCase() === 'iframe') {
    //   lastAddedTag.src = `${valueSrc}`;
    //   errorSrc.style.display = 'none';
    // } else {
    //   errorSrc.style.display = 'contents';
    // }
  }

  addStyleBtn.onclick = function() {
    const valueStyle = addStyle.value;
    lastAddedTag.style.cssText = valueStyle;

    formStyle.reset();
  }

  formInfo.reset();
}

addTagBtn.onclick = function() {
  const valueTag = addNewTag.value;

  const optionTag = new Option(valueTag, valueTag);
  tag.append(optionTag);

  

  formTagCreate.reset();
}






// Зробити перевірку
// - зробити перевірку, щоб не додавали теги, які уже є у списку
// - посилання мають починатися з адреси
// - якщо не обрано тег, то інші параметри немає до чого додавати - Оберіть тег.




console.log();



