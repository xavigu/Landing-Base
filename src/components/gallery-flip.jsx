import React, { useState, useEffect } from "react";
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import './gallery-flip.css';

export const GalleryFlip = props => {
  const [activeThumb, setActiveThumb] = useState(null);

  useEffect(() => {
    const thumbs = gsap.utils.toArray('.item');
    const modal = document.querySelector('.modal');
    const toggle = document.querySelector('.flip-button');
    const modalImage = modal.querySelector('.modal-image');
    const wrapper = document.querySelector('.grid-wrapper');

    // FLIP into modal
    thumbs.forEach((thumb) => {
      thumb.addEventListener('click', () => {
        setActiveThumb(thumb);
        thumb.classList.add('active-thumb');
        thumb.dataset.flipId = 'img';
        gsap.set(thumb, { opacity: 0 });

        const state = Flip.getState([thumb, modalImage], {
          props: 'borderRadius, aspectRatio, boxShadow',
        });

        modalImage.querySelector('img').setAttribute('src', thumb.dataset.url);
        modal.classList.add('active');
        modalImage.style.display = 'block';

        Flip.from(state, {
          duration: 0.25,
          ease: 'sine.inOut',
        });
      });
    });

    // FLIP out of modal
    modal.addEventListener('click', () => {
      activeThumb.dataset.flipId = 'img';
      gsap.set(activeThumb, { opacity: 1 });

      const state = Flip.getState([modalImage, activeThumb], {
        props: 'borderRadius, aspectRatio, boxShadow',
      });

      modal.classList.remove('active');

      Flip.from(state, {
        duration: 0.25,
        absolute: true,
        ease: 'sine.inOut',
        onComplete: () => {
          modalImage.querySelector('img').setAttribute('src', '');
          activeThumb.classList.remove('active-thumb');
          activeThumb.dataset.flipId = 'img';
        },
      });
    });

    // FLIP views
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('grid-view-on');
      const state = Flip.getState('.grid-wrapper, .item-wrapper');
      wrapper.classList.toggle('stack');

      Flip.from(state, {
        absolute: true,
        duration: 0.5,
        stagger: -0.0125,
        ease: 'sine',
      });
    });
  }, []);

  const data = [
    { src: "https://source.unsplash.com/random/800x800/?0", title: "Lorem Ipsum0" },
    { src: "https://source.unsplash.com/random/800x800/?1", title: "Lorem Ipsum1" },
    { src: "https://source.unsplash.com/random/800x800/?2", title: "Lorem Ipsum2" },
    { src: "https://source.unsplash.com/random/800x800/?3", title: "Lorem Ipsum3" },
    { src: "https://source.unsplash.com/random/800x800/?4", title: "Lorem Ipsum4" },
    { src: "https://source.unsplash.com/random/800x800/?5", title: "Lorem Ipsum5" },
    { src: "https://source.unsplash.com/random/800x800/?6", title: "Lorem Ipsum6" },
    { src: "https://source.unsplash.com/random/800x800/?7", title: "Lorem Ipsum7" },
    { src: "https://source.unsplash.com/random/800x800/?8", title: "Lorem Ipsum8" },
    { src: "https://source.unsplash.com/random/800x800/?9", title: "Lorem Ipsum9" },
    { src: "https://source.unsplash.com/random/800x800/?10", title: "Lorem Ipsum10" },
    { src: "https://source.unsplash.com/random/800x800/?11", title: "Lorem Ipsum11" },
    { src: "https://source.unsplash.com/random/800x800/?12", title: "Lorem Ipsum12" },
    { src: "https://source.unsplash.com/random/800x800/?13", title: "Lorem Ipsum13" },
    { src: "https://source.unsplash.com/random/800x800/?14", title: "Lorem Ipsum14" },
    { src: "https://source.unsplash.com/random/800x800/?15", title: "Lorem Ipsum15" },
  ];

  return (
    <div>
      <section className="space"></section>

      <section>
        <button className="flip-button">
          <div className="radio">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>

          <div className="button-icons">
            <div className="inline">
              <div className="dot-icon"></div>
              <div className="dot-icon"></div>
              <div className="dot-icon"></div>
              <div className="dot-icon"></div>
            </div>
            <div className="grid">
              <div className="dot-icon"></div>
              <div className="dot-icon"></div>
              <div className="dot-icon"></div>
              <div className="dot-icon"></div>
            </div>
          </div>
          toggle view
        </button>

        <div className="grid-wrapper stack">
            {data.map(({ src, title }, index) => (
              <div key={index} className="item-wrapper">
                <div className="item" data-url={src}>
                  <img src={src} alt={title} />
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className="space"></section>

      <div className="modal">
        <div data-flip-id="img" className="modal-image"><img src="" /></div>
      </div>
    </div>
  );
};
