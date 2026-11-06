const langBtn = document.getElementById('lang-toggle');
let current = 'pt';

const translations = {
    pt:{
        btn: 'EN'
    },
    en: {
        btn: 'PT'
    }
};
langBtn.addEventListener('click', () =>{
    currentLang === 'pt' ? 'en' : 'pt';
    //atulizar todos elementos com atributos data-pt/en
    document.querySelectorAll('[data-pt]').forEach(el => {
        el.textContent = el.getAttribute('data-${currentLang}');
    });
    //atualizar botao
    langBtn.textContent = translations[currentLang].btn;
    document.documentElement.lang = currentLang;
});