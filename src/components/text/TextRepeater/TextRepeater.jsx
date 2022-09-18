import React from 'react';
import 'components/text/TextRepeater/TextRepeater.scss';

function getText(text, count) {
  let finalText = '';

  for(let i = 0; i < count; i++) {
    finalText += ` ${text}`;
  }

  return finalText;
}

function TextRepeater({text, count}) {
  return (
    <span className="TextRepeater">
      {getText(text, count)}
    </span>
  );
}

export default TextRepeater;
