/* eslint-disable camelcase */
import { takeLatest, all, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../service/api';
import { updateProfileFailure, updateProfileSuccess } from './action';

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data;
    const profile = {
      name,
      email,
      avatar_id,
      ...(rest.oldPassword ? rest : {}),
    };
    const res = yield call(api.put, 'users', profile);

    toast.success('Perfil atualizado com sucesso');
    yield put(updateProfileSuccess(res.data));
  } catch (err) {
    toast.error(
      'Erro ao tentar atualizar seu perfil. Verifique os dados informados.'
    );
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
