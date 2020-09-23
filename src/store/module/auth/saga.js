import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '../../../service/api';
import history from '../../../service/history';

import { signFailure, signInSuccess } from './action';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const res = yield call(api.post, 'sessions', {
      email,
      password,
    });

    //  se o post der sucesso, entao a resposta tera dados do login
    const { token, user } = res.data;

    if (!user.provider) {
      console.tron.error('usuário não prestador de serviço');
      return;
    }

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (err) {
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
