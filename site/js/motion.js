/**
 * Motion layer — Lenis, GSAP, logo tilt, magnetic buttons, gallery cycle, progress.
 */
(function () {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarse = window.matchMedia('(hover: none), (pointer: coarse)').matches;

  function initProgress() {
    const bar = document.createElement('div');
    bar.className = 'progress-bar';
    bar.setAttribute('aria-hidden', 'true');
    document.body.prepend(bar);

    function update() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const value = max > 0 ? window.scrollY / max : 0;
      bar.style.width = `${Math.min(1, Math.max(0, value)) * 100}%`;
    }

    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  function initLogoTilt() {
    const card = document.querySelector('.logo-card');
    if (!card || coarse || reduce) return;

    const stage = card.parentElement;
    stage.addEventListener('mousemove', (event) => {
      const rect = stage.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `rotateY(${x * 14}deg) rotateX(${-y * 10}deg)`;
    });
    stage.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
  }

  function initMagnetic() {
    if (coarse || reduce) return;
    document.querySelectorAll('[data-magnetic]').forEach((btn) => {
      btn.addEventListener('mousemove', (event) => {
        const rect = btn.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.18}px, ${y * 0.22}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }

  function initGalleryCycle() {
    if (reduce) return;
    document.querySelectorAll('[data-gallery-for]').forEach((row) => {
      const shots = [...row.querySelectorAll('.gallery-shot')];
      if (shots.length < 2) return;
      const card = row.closest('.project-card');
      const cycle = card?.querySelector('[data-cycle-image]');
      const hero = card?.querySelector('[data-hero-image]');
      let index = 0;
      setInterval(() => {
        if (row.matches(':hover')) return;
        index = (index + 1) % shots.length;
        shots.forEach((el) => el.classList.remove('is-active'));
        shots[index].classList.add('is-active');
        const next = shots[index].dataset.gallerySrc;
        const liveCycle = card?.querySelector('[data-cycle-image]');
        if (liveCycle && typeof swipeProjectCycle === 'function') {
          swipeProjectCycle(liveCycle, next);
        } else if (liveCycle) {
          liveCycle.src = next;
        } else if (hero && !hero.hasAttribute('data-lock-hero')) {
          hero.src = next;
        }
      }, 2800);
    });
  }

  function initLenisGsap() {
    if (reduce || typeof Lenis === 'undefined' || typeof gsap === 'undefined') return;

    const lenis = new Lenis({ lerp: 0.1 });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      lenis.on('scroll', ScrollTrigger.update);
    }

    gsap.from('.hero-copy > *', {
      y: 28,
      opacity: 0,
      duration: 0.8,
      stagger: 0.08,
      ease: 'power3.out'
    });
    gsap.from('.logo-card', {
      scale: 0.92,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.utils.toArray('.project-card, .step, .skill-card, .systems-panel').forEach((el) => {
      gsap.from(el, {
        y: 36,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%'
        }
      });
    });
  }

  function initSystemsToggle() {
    const panels = document.querySelectorAll('.systems-panel');
    panels.forEach((panel) => {
      panel.addEventListener('click', () => {
        panels.forEach((p) => p.classList.remove('is-active'));
        panel.classList.add('is-active');
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initProgress();
    initLogoTilt();
    initMagnetic();
    initSystemsToggle();
    window.setTimeout(() => {
      initGalleryCycle();
      initLenisGsap();
    }, 400);
  });
})();
