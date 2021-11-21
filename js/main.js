"use strict";

{
  const about = document.getElementById("about");
  const aboutBtns = document.querySelectorAll("#about-btn");
  const study = document.getElementById("study");
  const studyBtns = document.querySelectorAll("#study-btn");
  const pf = document.getElementById("pf");
  const pfBtns = document.querySelectorAll("#pf-btn");
  const headerMenus = document.querySelectorAll(".header-list");
  const headerBtn = document.getElementById("header-btn");
  const mask = document.getElementById("mask");
  const ballBtn = document.getElementById("ball-btn");
  const menuAbout = document.getElementsByClassName("menu-about");
  const menuStudy = document.getElementsByClassName("menu-study");
  const menuPf = document.getElementsByClassName("menu-pf");

  console.log(menuAbout);

  aboutBtns.forEach(aboutBtn =>
  aboutBtn.addEventListener("click", () => {
    about.classList.toggle("hidden"),
    mask.classList.remove("hidden"),
    study.classList.add("hidden"),
    pf.classList.add("hidden");
  }));

  studyBtns.forEach(studyBtn =>
  studyBtn.addEventListener("click", () => {
    study.classList.toggle("hidden"),
    mask.classList.remove("hidden"),
    about.classList.add("hidden"),
    pf.classList.add("hidden");
  }));

  pfBtns.forEach(pfBtn =>
  pfBtn.addEventListener("click", () => {
    pf.classList.toggle("hidden"),
    mask.classList.remove("hidden"),
    about.classList.add("hidden"),
    study.classList.add("hidden");
  }));

  headerBtn.addEventListener("click", () => {
    headerMenus.forEach(headerMenu => 
        headerMenu.classList.toggle("hidden"),
        );
    headerMenus[0].classList.add("move-ha");
    headerMenus[1].classList.add("move-hs");
    headerMenus[2].classList.add("move-hp");
  });

  mask.addEventListener("click", () => {
    about.classList.add("hidden"),
    study.classList.add("hidden"),
    pf.classList.add("hidden"),
    mask.classList.add("hidden");
  });

  ballBtn.addEventListener("click", () => {
    ballBtn.classList.add("hidden");
    menuAbout[0].classList.add("ball-A");
    menuAbout[0].classList.remove("hidden");
    menuStudy[0].classList.add("ball-S");
    menuStudy[0].classList.remove("hidden");
    menuPf[0].classList.add("ball-P");
    menuPf[0].classList.remove("hidden");
  });


}