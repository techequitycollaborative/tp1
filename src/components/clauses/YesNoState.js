import { StyledPrimaryButton } from "../Buttons";
import React from "react";
import AppContext from "../AppContext";
import { navigate } from "gatsby";

const YesNoState = ({ stateName, questionText, yesText, noText, yes, no }) => {
  var dict = {
    en: { yes: 'Yes', no: 'No', eligibility: 'Check My Eligibility' },
    es: { yes: 'Si', no: 'No', eligibility: 'Verificar Mi Elegibilidad' }
  };

  const onChange = (answer, oldCtx, updateContext) => {
    var newCtx = { ...oldCtx };

    newCtx[stateName] = answer;
    updateContext(newCtx);

    if (answer) {
      navigate(yes);
    } else {
      navigate(no);
    }
  };

  return (
    <AppContext.Consumer>
      {({ appCtx, updateContext }) => {
        return (
          <div>
            <h1>{dict[appCtx.lang].eligibility}</h1>
            <p>{questionText}</p>
            <p className="center-layout"><StyledPrimaryButton
              onClick={e => {
                onChange(true, appCtx, updateContext);
              }}
              type="button"
            >
              {yesText ? yesText : dict[appCtx.lang].yes}
            </StyledPrimaryButton>
            &nbsp;
            <StyledPrimaryButton
              onClick={e => {
                onChange(false, appCtx, updateContext);
              }}
              type="button"
            >
              {noText ? noText : dict[appCtx.lang].no}
            </StyledPrimaryButton></p>
          </div>
        );
      }}
    </AppContext.Consumer>
  );
};

export default YesNoState;
