import React, { useState } from "react";
import axios from "axios";
// import LoaderSvg from "../../img/loader.svg";
import SignUpSpaceStyled from "../../style/SignUpSpaceStyled.style";
import InputsForm from "../InputsForm/InputsForm";
import ModalError from "../Modal/ModalError";

function SignUpSpace() {
  const refInputNickName = React.useRef(null);
  const refInputMail = React.useRef(null);
  const refInputPswd = React.useRef(null);
  const refInputCheckPswd = React.useRef(null);
  const [data, setData] = useState({
    loader: false,
    btnDisabled: true,
    error: {},
    errorMessage: "",
    isModalError: false,
    // errorApi: false,
  });
  // const [redirect, setRedirect] = React.useState(false);

  React.useEffect(() => {
    const arrInputId = [
      "inputNickName",
      "inputMail",
      "inputPswd",
      "inputCheckPswd",
    ];
    const newState = { ...data };
    const obj = {
      error: false,
      message: "",
      accessToChange: false,
    };

    arrInputId.forEach((element) => (newState.error[element] = { ...obj }));

    return setData(newState);
  }, []); //eslint-disable-line

  function checkUserSub(e) {
    e.preventDefault();

    const newState = { ...data };
    const inputIdTarget = e.target.id;

    if (e.type === "change" && inputIdTarget !== "input--conditions") {
      if (!newState.error[inputIdTarget].accessToChange) {
        return;
      }
    }

    if (e.target.value === "" && inputIdTarget !== "input--conditions") {
      if (newState.error[inputIdTarget].accessToChange) {
        return updateState(inputIdTarget, "Field empty");
      }
      return;
    }

    if (inputIdTarget === "inputMail") {
      if (
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          e.target.value
        ) === false
      )
        return updateState(inputIdTarget, "Format mail incorrect");
    }

    if (inputIdTarget === "inputPswd") {
      if (e.target.value.length < 6)
        return updateState(
          inputIdTarget,
          "Le mot de passe doit faire 6 charactères"
        );

      if (refInputCheckPswd.current.value !== "") {
        if (refInputPswd.current.value !== refInputCheckPswd.current.value) {
          return updateState(
            refInputCheckPswd.current.id,
            "La confirmation est incorrecte"
          );
        }
      }
    }

    if (inputIdTarget === "inputCheckPswd") {
      if (e.target.value !== refInputPswd.current.value)
        return updateState(inputIdTarget, "La confirmation est incorrecte");
    }

    if (inputIdTarget !== "input--conditions") {
      if (!newState.error[inputIdTarget].accessToChange) {
        newState.error[inputIdTarget].accessToChange = true;
      }
      newState.error[inputIdTarget].error = false;
      newState.error[inputIdTarget].message = "";
    }

    if (
      refInputNickName.current.value !== "" &&
      refInputMail.current.value !== "" &&
      refInputPswd.current.value !== "" &&
      refInputCheckPswd.current.value !== ""
    ) {
      const btnEnabled = Object.values(newState.error).every((el) => !el.error);

      if (btnEnabled) {
        newState.btnDisabled = false;
      } else {
        newState.btnDisabled = true;
      }
    }

    return setData(newState);
  }

  function updateState(inputId, errorMessage) {
    const newState = { ...data };

    newState.error[inputId].error = true;
    newState.error[inputId].message = errorMessage;

    if (!newState.error[inputId].accessToChange) {
      newState.error[inputId].accessToChange = true;
    }

    if (!newState.btnDisabled) {
      newState.btnDisabled = true;
    }

    return setData(newState);
  }

  function fetchUserData(e) {
    e.preventDefault();

    console.log(refInputNickName.current.value);
    console.log(refInputMail.current.value);
    console.log(refInputPswd.current.value);

    axios
      .post("http://localhost:1337/auth/local/register", {
        username: refInputNickName.current.value,
        email: refInputMail.current.value,
        password: refInputPswd.current.value
      })
      .then(response => {
        console.log("User profile", response);
      })
      .catch((error) => {
        if (error.response.status === 500) {
          return setData({
            ...data,
            isModalError: true,
          });
        }
      });

    // return fetch("http://localhost:1337/registrations", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     pseudo: refInputNickName.current.value,
    //     email: refInputMail.current.value,
    //     password: refInputPswd.current.value,
    //     confirm_password: refInputCheckPswd.current.value
    //   })
    // })
    // .then(response => {
    //   // Handle success.
    //   console.log('Well done!');
    //   console.log('User profile', response.data.user);
    //   console.log('User token', response.data.jwt);
    // })
    // .catch(error => {
    //   // Handle error.
    //   console.log('An error occurred:', error.response);
    // });

    // return FetchFunction("/register", "POST", {
    //   credentials: "include",
    //   body: {
    //     prenom: refInputFirstName.current.value,
    //     nom: refInputLastName.current.value,
    //     mail: refInputMail.current.value,
    //     pswd: refInputPswd.current.value
    //   }
    // })
    //   .then(dataParsed => {
    //     console.log(dataParsed);
    //     // return setRedirect(true);
    //   })
    //   .catch(error => {
    //     setData({
    //       errorApi: true,
    //       errorMessage: error.message
    //     });
    //   });
  }

  function closeModalOutside() {
    const newState = { ...data };

    newState.isModalError = false;

    return setData(newState);
  }

  // if (redirect) return <Redirect to="/feed"></Redirect>;

  return (
    <React.Fragment>
      {data.isModalError && (
        <ModalError
          modalTitle="Une erreur est survenue frère"
          closeModal={closeModalOutside}
          modalMessage="Ton pseudo ou mail existe déjà... Essaie de réinitialiser ton mot de passe ou te créer un compte."
          modalBtnValue="Fermer"
        ></ModalError>
      )}
      <SignUpSpaceStyled
        as="form"
        btnDisabled={data.btnDisabled}
        onSubmit={fetchUserData}
      >
        <div className="form--inscription">
          <div className="form--inscription--title">
            <h2>Inscription</h2>
          </div>
          <div className="input--data--name">
            <InputsForm
              type="text"
              inputId="inputNickName"
              inputRef={refInputNickName}
              inputPlaceholder="Pseudo"
              inputCheckError={checkUserSub}
              isError={data.error.inputNickName ? data.error.inputNickName : ""}
            ></InputsForm>
          </div>
          <InputsForm
            type="text"
            inputId="inputMail"
            inputRef={refInputMail}
            inputPlaceholder="Mail"
            inputCheckError={checkUserSub}
            isError={data.error.inputMail ? data.error.inputMail : ""}
          ></InputsForm>
          <InputsForm
            type="password"
            inputId="inputPswd"
            inputRef={refInputPswd}
            inputPlaceholder="Mot de passe"
            inputCheckError={checkUserSub}
            isError={data.error.inputPswd ? data.error.inputPswd : ""}
          ></InputsForm>
          <InputsForm
            type="password"
            inputId="inputCheckPswd"
            inputRef={refInputCheckPswd}
            inputPlaceholder="Confirmer mot de passe"
            inputCheckError={checkUserSub}
            isError={data.error.inputCheckPswd ? data.error.inputCheckPswd : ""}
          ></InputsForm>
          <div className="form--inscription--btn">
            <input
              type="submit"
              disabled={data.btnDisabled}
              value="Inscription"
            ></input>
          </div>
          <div className="form--inscription--link">
            <p>J'ai déjà un compte</p>
            <p>
              <a href="/">Connexion</a>
            </p>
          </div>
        </div>
      </SignUpSpaceStyled>
    </React.Fragment>
  );
}

export default SignUpSpace;
