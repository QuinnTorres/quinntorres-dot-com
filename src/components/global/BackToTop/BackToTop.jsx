import {React, useState} from 'react';
import 'components/global/BackToTop/BackToTop.scss';

import {ReactComponent as CaretIcon} from 'svg/caret.svg';
import { TOP_OF_PAGE_CUTOFF } from 'components/App';
import { throttle } from 'js/utils.js';

function BackToTop() {
  const [backToTopIsVisible, setBackToTopIsVisible] = useState(false);

  function scrollToTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  function handleScroll() {
    if (window.scrollY > TOP_OF_PAGE_CUTOFF) {
      setBackToTopIsVisible(true);
    } else {
      setBackToTopIsVisible(false);
    }
  }

  window.addEventListener('scroll', throttle(handleScroll, 100));

  return (
    <button className={`BackToTop ${backToTopIsVisible ? '' : 'BackToTop--Hidden'}`.trim()} aria-label="Scroll to top of page" onClick={scrollToTop}>
      <CaretIcon className="BackToTop__Icon" />
    </button>
  );
}

export default BackToTop;
