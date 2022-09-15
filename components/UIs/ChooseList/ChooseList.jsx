import { useState } from 'react';

import Box from '@mui/material/Box'

import { useTranslation } from 'next-i18next';

import cls from './chooseList.module.scss';

const ChooseList = ({ list, text, icon, withArrow }) => {
  // COMPONENT STATES
  const [choosed, setChoosed] = useState('')
  const [showFilter, setShowFilter] = useState(false);
  const { i18n } = useTranslation();

  const chooseOption = (item) => {
    setChoosed(item)
    setShowFilter(false)
  }

  return (
    <Box className={cls.wrapper}>

      {showFilter &&
    
        <Box className={cls.dropLayer} onClick={() => setShowFilter(false)}></Box>
      
      }
      
      <button onClick={() => setShowFilter(true)}>

        {icon}

        <span>{choosed ? choosed : text}</span>

        {withArrow && <i className="fa-regular fa-angle-down"></i>}

      </button>
      
        
      {showFilter && 
      
        <Box className={`${cls.chooseList} ${cls[i18n.language]}`}>

          <ul>
            {list.map((item, idx) => (

              <li key={idx} className={`${item.icon ? '' : cls.iconNotFound} ${item.active ? cls.active : ''}`} onClick={() => chooseOption(item.item)}>

                {item.icon && item.icon}

                <span>
                  {item.item}
                </span>
                
              </li>

            ))}
          </ul>
        
        </Box>
      
      }

    </Box>
  )
}

export default ChooseList