import { ChangeEvent, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForm, FormActions } from '../../contexts/FormContext';
import * as Style from './styles';
import { Template } from '../../components/Template';

export function FormStep1() {
  const history = useHistory();
  const { state, dispatch } = useForm();

  function handleAlteracaoNome(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FormActions.setNome,
      payload: e.target.value
    });
  }

  function handleNextStep() {
    if (state.nome !== '') {
      history.push('/passo2');
    } else {
      toast.warning('Informe o seu Nome!', {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }

  useEffect(() => {
    dispatch({
      type: FormActions.setPassoAtual,
      payload: 1
    });
  }, [dispatch]);

  return (
    <Template>
      <Style.Container>
        <p>Passo {state.passoAtual}/3</p>
        <h1>Vamos começar pelo seu nome!</h1>
        <p>Preencha o campo abaixo com seu nome completo!</p>
        <hr />
        <label>
          Seu nome completo
          <input
            type="text"
            autoFocus
            value={state.nome}
            onChange={handleAlteracaoNome}
          />
        </label>

        <button onClick={handleNextStep}>Próximo</button>
      </Style.Container>
    </Template>
  );
}