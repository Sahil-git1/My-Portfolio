function handleSubmit(e){
    e.preventDefault()
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = encodeURIComponent(document.getElementById('subject').value);
    const message = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${document.getElementById('message').value}`
    );

    window.location.href = `mailto:sahilchauhan.p24@gmail.com?subject=${subject}&body=${message}`;
}
const elementsToAnimate = [
    document.querySelector('.project img'),
    document.querySelector('.project__right p:first-child'),
    document.querySelector('.project__right p:nth-child(2)'),
    document.querySelector('.project__right p:last-child'),
    document.querySelector('.project2__left  p:first-child'),
    document.querySelector('.project2__left p:nth-child(2)'),
    document.querySelector('.project2__left p:last-child'),
    document.querySelector(' .project3__right p:first-child'),
    document.querySelector('.project3__right p:nth-child(2)'),
    document.querySelector(' .project3__right p:last-child'),

    document.querySelector(' .project4 p:first-child'),
    document.querySelector(' .project4 p:nth-child(2)'),
    document.querySelector(' .project4 p:last-child'),

    document.querySelector(' .project5__right p:first-child'),
    document.querySelector('.project5__right p:nth-child(2)'),
    document.querySelector('.project5__right p:last-child '), 

    document.querySelector(' .footer__h h1'),
    document.querySelector('.footer__info'), 
    ...document.querySelectorAll('.animate-on-scroll'),
    ...document.querySelectorAll(' .expOne div:last-child  p') 
  ];


  function checkPosition() {
    const triggerPoint = window.innerHeight * 0.8;

    elementsToAnimate.forEach(el => {
      if (el && el.getBoundingClientRect().top < triggerPoint) {
        el.classList.add('animate');
      }
    });
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('load', checkPosition);



