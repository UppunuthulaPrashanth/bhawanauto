import React, { useState, useEffect } from 'react';

const GoogleTranslate = () => {

  var duplicate_google_translate_counter = 0;//this stops google adding button multiple times


  const googleTranslateElementInit = () => {
    if (duplicate_google_translate_counter == 0) {

    new window.google.translate.TranslateElement(
      {
        pageLanguage: 'en',
        layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT
      },
      'google_translate_element'
    );
    }
    duplicate_google_translate_counter++;
  };

  useEffect(() => {
    var addScript = document.createElement('script');
    addScript.setAttribute(
      'src',
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  return <div id="google_translate_element"></div>;
};

export default GoogleTranslate;