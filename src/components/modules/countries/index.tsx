/* eslint-disable no-console */
import React, { useState } from 'react'
import i18n from '../../../i18n';
import { Button } from '../../base/buttons';


export const Countries = () => {
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language)

  const changeLanguage = (language: string) => {
    setCurrentLanguage(language);
    i18n.changeLanguage(language);
  }

  const isCurrent = (language: string) => {
    return currentLanguage !== language ? 'countries__flag--not-selected' : '';
  }

  return (
    <div className="countries">
      <div 
        className={`countries__flag ${isCurrent('pt-BR')}`}
      >
        <Button onClick={() => changeLanguage('pt-BR')}>
          <img 
            src="/img/brazil.png" 
            alt="Brasil" 
            height={16}
          />
        </Button>
      </div>
      <div className={`countries__flag ${isCurrent('es')}`}>
        <Button onClick={() => changeLanguage('es')}>
          <img 
            src="/img/mexico.png" 
            alt="Mexico" 
            height={16}
          />
        </Button>
      </div>
      <div className={`countries__flag ${isCurrent('en')}`}>
        <Button onClick={() => changeLanguage('en')}>
          <img 
            src="/img/usa.png" 
            alt="Unites States of America" 
            height={16}
          />
        </Button>
      </div>
    </div>
  )
}

