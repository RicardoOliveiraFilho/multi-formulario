import { ChangeEvent, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForm, FormActions } from '../../contexts/FormContext';
import * as Style from './styles';
import { Template } from '../../components/Template';

export function FormStep3() {
  const history = useHistory();
  const { state, dispatch } = useForm();

  function handleAlteracaoEmail(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value
    });
  }

  function handleAlteracaoGithub(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FormActions.setUrlGithub,
      payload: e.target.value
    });
  }

  function handleNextStep() {
    if (state.email === '') {
      toast.warning('Informe o seu E-mail!', {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (state.github === '') {
      toast.warning('Informe o endereço de seu Github!', {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      console.log(state);
      toast.success('Cadastro Realizado!', {
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
    if (state.nome === '') {
      toast.warning('Primeiramente informe o seu Nome no Passo 1 do Formulário!', {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      history.push('/');
    } else {
      dispatch({
        type: FormActions.setPassoAtual,
        payload: 3
      });
    }
  }, [dispatch, history, state.nome]);

  return (
    <Template>
      <Style.Container>
        <p>Passo {state.passoAtual}/3</p>
        <h1>Legal, {state.nome}! Como te achamos?</h1>
        <p>Preencha as informações de contato abaixo para que possamos entrar em contato!</p>
        
        <hr />
        
        <label>
          Qual o seu e-mail?
          <input
            type="email"
            value={state.email}
            onChange={handleAlteracaoEmail}
          />
        </label>

        <label>
          Qual o endereço de seu Github?
          <input
            type="url"
            value={state.github}
            onChange={handleAlteracaoGithub}
          />
        </label>

        <Link className="backButton" to="/passo2">Voltar</Link>
        <button onClick={handleNextStep}>Finalizar Cadastro</button>
      </Style.Container>
    </Template>
  );
}