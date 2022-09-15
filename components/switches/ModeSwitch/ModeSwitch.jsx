/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import lightVars from './../../../theme/lightVars/lightVars';
import darkVars from './../../../theme/darkVars/darkVars';

import Cookies from 'universal-cookie';
const cookie = new Cookies()

import cls from './modeSwitch.module.scss';

const ModeSwitch = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [mode, setMode] = useState(cookie.get('gridsStoreMode') || 'light');

  useEffect(() => {
    setHasMounted(true)
  }, [])

  useEffect(() => {
    setMode(cookie.get('gridsStoreMode'))
  }, [mode])

  const switchMode = () => {
    if (cookie.get('gridsStoreMode') === 'light') {
      cookie.set('gridsStoreMode', 'dark', {path: "/"})
      darkVars()
      setMode('dark')
    } else {
      cookie.set('gridsStoreMode', 'light', {path: "/"})
      lightVars()
      setMode('light')
    }
  }

  if (!hasMounted) return null;

  return (
    <div className={cls.modeSwitch} onClick={switchMode}>

      {cookie.get('gridsStoreMode') && cookie.get('gridsStoreMode') === 'light' ?
      
        <i className="fa-light fa-moon"></i>

        :

        <i className="fa-light fa-sun"></i>
    
      }
      
    </div>
  );
};

export default ModeSwitch;
