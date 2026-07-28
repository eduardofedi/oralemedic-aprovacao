(() => {
  const root = document.documentElement;
  const header = document.querySelector('[data-header]');
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const setHeader = () => header && header.classList.toggle('is-scrolled', window.scrollY > 8);
  setHeader(); window.addEventListener('scroll', setHeader, {passive:true});
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const open = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!open));
      mobileMenu.classList.toggle('is-open', !open);
      document.body.classList.toggle('menu-open', !open);
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('is-open');
        document.body.classList.remove('menu-open');
      });
    });
  }
  document.querySelectorAll('[data-logo]').forEach(img => {
    img.addEventListener('error', () => img.classList.add('is-missing'));
    if (img.complete && img.naturalWidth === 0) img.classList.add('is-missing');
  });
  document.querySelectorAll('[data-image]').forEach(el => {
    const src = el.dataset.image;
    const img = new Image();
    img.onload = () => { el.style.backgroundImage = `url("${src}")`; el.classList.add('has-image'); };
    img.src = src;
  });
  const intentData = {
    protocolo: {tag:'Prótese Protocolo',title:'Precisa substituir todos os dentes de uma arcada?',text:'A prótese protocolo é uma prótese total fixa sobre implantes de titânio. Oferece estabilidade total, mastigação firme e estética natural sem cobrir o céu da boca.',href:'/tratamentos/protese-protocolo/'},
    implantes: {tag:'Implantes dentários',title:'Perdeu um ou mais dentes?',text:'Veja como funciona a avaliação para implantes, quais exames podem ser solicitados e as possibilidades para recuperar a mastigação.',href:'/tratamentos/implantes-dentarios/'},
    alinhadores: {tag:'Alinhadores transparentes',title:'Quer alinhar os dentes sem aparelho fixo?',text:'O tratamento começa com avaliação, escaneamento e planejamento da movimentação dos dentes.',href:'/tratamentos/alinhadores-transparentes/'},
    estetica: {tag:'Facetas e coroas',title:'Quer melhorar ou recuperar a forma dos dentes?',text:'Compare resina, porcelana e coroas e entenda quando cada alternativa pode ser indicada.',href:'/tratamentos/facetas-de-resina/'},
    canal: {tag:'Tratamento de canal',title:'Está com dor ou recebeu indicação de canal?',text:'Entenda por que o tratamento pode ser necessário e como ele ajuda a preservar o dente.',href:'/tratamentos/tratamento-de-canal/'},
    avaliacao: {tag:'Avaliação odontológica',title:'Ainda não sabe qual tratamento procurar?',text:'Agende uma avaliação. A equipe entende o que está acontecendo e indica o profissional adequado para o seu caso.',href:'/contato/'}
  };
  const panel = document.querySelector('[data-intent-panel]');
  const intentModal = document.getElementById('intent-modal');

  document.querySelectorAll('[data-intent]').forEach(btn => btn.addEventListener('click', (e) => {
    if (e.target.closest('.intent-button__hint')) return;
    const data = intentData[btn.dataset.intent]; if (!data) return;
    document.querySelectorAll('[data-intent]').forEach(b => b.classList.toggle('is-active', b === btn));
    
    if (window.innerWidth < 1020 && intentModal) {
      intentModal.querySelector('[data-modal-tag]').textContent = data.tag;
      intentModal.querySelector('[data-modal-title]').textContent = data.title;
      intentModal.querySelector('[data-modal-text]').textContent = data.text;
      intentModal.querySelector('[data-modal-link]').href = data.href;
      intentModal.classList.add('is-open');
      document.body.classList.add('modal-open');
    } else if (panel) {
      panel.querySelector('[data-intent-tag]').textContent = data.tag;
      panel.querySelector('[data-intent-title]').textContent = data.title;
      panel.querySelector('[data-intent-text]').textContent = data.text;
      panel.querySelector('[data-intent-link]').href = data.href;
    }
  }));

  if (intentModal) {
    intentModal.querySelectorAll('[data-intent-close]').forEach(el => {
      el.addEventListener('click', () => {
        intentModal.classList.remove('is-open');
        document.body.classList.remove('modal-open');
      });
    });
  }
  const techData = {
    tomografia:{title:'Tomografia 3D',text:'Imagens de altíssima precisão para planejamento de implantes, cirurgias e próteses protocolo com total segurança.',image:'/assets/img/foto-tomografo.png'},
    panoramico:{title:'Raio-X panorâmico digital',text:'Visão ampla de toda a estrutura arcada sem necessidade de deslocamento para laboratórios externos.',image:'/assets/img/foto-raio-x-panoramico.png'},
    scanner:{title:'Escaneamento Intraoral 3D',text:'Substitui as antigas moldagens desconfortáveis com uma câmera 3D de alta precisão.',image:'/assets/img/foto-scanner-3d.png'},
    impressora:{title:'Impressão 3D Odontológica',text:'Produção acelerada de guias cirúrgicos e modelos de planejamento com máxima exatidão.',image:'/assets/img/foto-impressora-3d.png'},
    camera:{title:'Câmera intraoral HD',text:'Visualização em tempo real na tela para que o paciente entenda detalhadamente seu diagnóstico.',image:'/assets/img/foto-camera-intraoral.png'}
  };
  const techPanel = document.querySelector('[data-tech-panel]');
  document.querySelectorAll('[data-tech]').forEach(btn => btn.addEventListener('click', () => {
    const data = techData[btn.dataset.tech]; if (!data || !techPanel) return;
    document.querySelectorAll('[data-tech]').forEach(b => b.classList.toggle('is-active', b === btn));
    techPanel.querySelector('[data-tech-title]').textContent = data.title;
    techPanel.querySelector('[data-tech-text]').textContent = data.text;
    const visual = techPanel.querySelector('[data-image]');
    if (visual) {
      visual.dataset.image = data.image;
      visual.classList.remove('has-image'); visual.style.backgroundImage='';
      const img = new Image(); img.onload=()=>{visual.style.backgroundImage=`url("${data.image}")`; visual.classList.add('has-image')}; img.src=data.image;
    }
  }));
  document.querySelectorAll('.faq-question').forEach(btn => btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item'); const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open)); item.classList.toggle('is-open', !open);
  }));
  const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting){e.target.classList.add('is-visible'); observer.unobserve(e.target)} }), {threshold:.08}) : null;
  document.querySelectorAll('.reveal').forEach(el => observer ? observer.observe(el) : el.classList.add('is-visible'));
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  document.querySelectorAll('form[data-demo-form]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const nome = form.querySelector('#nome') ? form.querySelector('#nome').value.trim() : '';
      const whatsapp = form.querySelector('#whatsapp') ? form.querySelector('#whatsapp').value.trim() : '';
      const interesse = form.querySelector('#interesse') ? form.querySelector('#interesse').value : 'Avaliação odontológica';
      const periodo = form.querySelector('#periodo') ? form.querySelector('#periodo').value : 'Qualquer período';
      const mensagem = form.querySelector('#mensagem') ? form.querySelector('#mensagem').value.trim() : '';

      let text = `Olá! Meu nome é ${nome || 'Paciente'}. Gostaria de agendar uma avaliação na Oral & Medic para: ${interesse}.`;
      if (whatsapp) text += `\nMeu telefone/WhatsApp: ${whatsapp}`;
      text += `\nMelhor período: ${periodo}.`;
      if (mensagem) text += `\nObservação: ${mensagem}`;

      const whatsappUrl = `https://wa.me/5514998659506?text=${encodeURIComponent(text)}`;
      window.open(whatsappUrl, '_blank');
    });
  });

  // Before & After Slider
  document.querySelectorAll('[data-before-after]').forEach(slider => {
    const range = slider.querySelector('.ba-range');
    const after = slider.querySelector('.ba-after');
    const handle = slider.querySelector('.ba-handle');
    if (!range || !after || !handle) return;
    function updateBA() {
      const val = range.value;
      after.style.clipPath = `polygon(${val}% 0, 100% 0, 100% 100%, ${val}% 100%)`;
      handle.style.left = `${val}%`;
    }
    range.addEventListener('input', updateBA);
    range.addEventListener('change', updateBA);
    updateBA();
  });

  // Testimonials Carousel Navigation
  const rail = document.querySelector('.testimonial-rail');
  const prevBtn = document.querySelector('.nav-prev');
  const nextBtn = document.querySelector('.nav-next');
  if (rail && prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => rail.scrollBy({ left: -600, behavior: 'smooth' }));
    nextBtn.addEventListener('click', () => rail.scrollBy({ left: 600, behavior: 'smooth' }));
  }
})();
