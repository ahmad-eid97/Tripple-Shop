import { useState } from "react";

import { useTranslation } from "react-i18next";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// STYLES FILES
import cls from "./selectMultiple.module.scss";

const Selectbox = ({ placeholder, results, value, select, disabled }) => {
  const { i18n } = useTranslation("common");

  const list = results;
  const [open, setOpen] = useState(false);

  // SELECT CHOOSE OPTION HANDLER
  const selectChoose = (result) => {
    select(result);
    setOpen(false);
  };

  return (
    <>
      {open && (
        <Box className={cls.overlay} onClick={() => setOpen(false)}></Box>
      )}

      <Box className={`${cls.field} field`}>
        <Box className={cls.field__selectArea}>
          <input
            readOnly
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => filterResults(e.target.value)}
            onFocus={() => setOpen(true)}
            disabled={disabled}
          />
          <i className={`fa-solid fa-angle-down ${cls[i18n.language]} ${cls.drop}`}></i>
        </Box>

        <Box className={`${cls.field__results} ${open ? cls.active : ""}`}>
          <Box className={cls.field__results_result}>
            {list.map((item) => (
              <Box
                className={cls.resultInside}
                onClick={() => selectChoose(item)}
                key={item}
              >
                <Typography key={item}>{item}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Selectbox;
