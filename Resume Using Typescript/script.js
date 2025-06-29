"use strict";
//reference section
let ref_section = document.getElementById('ref');
let ref_btn = document.getElementById('ref_btn');
ref_btn.addEventListener('click', () => {
    ref_section.classList.toggle('hide');
});
//experience section
let exp_section = document.getElementById('exp');
let exp_btn = document.getElementById('exp_btn');
exp_btn.addEventListener('click', () => {
    exp_section.classList.toggle('hide');
});
//language section
let lang_section = document.getElementById('lang');
let lang_btn = document.getElementById('lang_btn');
lang_btn.addEventListener('click', () => {
    lang_section.classList.toggle('hide');
});
//skill section
let skill_section = document.getElementById('skill');
let skill_btn = document.getElementById('skill_btn');
skill_btn.addEventListener('click', () => {
    skill_section.classList.toggle('hide');
});
//education section
let edu_section = document.getElementById('edu');
let edu_btn = document.getElementById('edu_btn');
edu_btn.addEventListener('click', () => {
    edu_section.classList.toggle('hide');
});
//contact section
let contact_section = document.getElementById('contact');
let contact_btn = document.getElementById('contact_btn');
contact_btn.addEventListener('click', () => {
    contact_section.classList.toggle('hide');
});
