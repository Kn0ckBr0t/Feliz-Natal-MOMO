gsap.from('.killjoy', {duration: 2, x: 100, opacity: 0});
gsap.to('.killjoy', {duration: 2, delay: 2, ease: 'back', repeat: -1, yoyo: true, scale: 1.1});

document.addEventListener("DOMContentLoaded", function() {
  const typewriter = new Typewriter("#dialogos", {
    strings: [
      "Era uma vez...", 
      "Um ursinho chamado Adalberto", 
      "Ele vivia numa floresta cheia de neve", 
      "Mas numa noite fria, saiu de sua toca curioso", 
      "Então uma luz brilhante chamou sua atenção!!", 
      "Adalberto seguiu a luz com suas patinhas fofas", 
      "E encontrou algo mágico...", 
      "Um trenó brilhante e aconchegante!", 
      "Ele entrou, deitou e cochilou quentinho", 
      "Quando acordou, o trenó estava voando!", 
      "E assim, o ursinho Adalberto viveu uma aventura mágica",
      "Adalberto foi encarregado de enviar presentes para toda a cidade",
      "Então, as pessoas chamam o ursinho de Papai Noel",
      "Essa é a verdadeira história de Natal",
      "Feliz Natal, meu amor! ❤"
    ], 
    autoStart: true
  });
});