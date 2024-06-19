import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 28969,
  login: 'C-AW',
};

export const sampleWithPartialData: IUser = {
  id: 2102,
  login: 'gu@UxYN\\OUDe-\\eE5\\]6\\O6ODEDT\\2ZU7nZM',
};

export const sampleWithFullData: IUser = {
  id: 5475,
  login: '$!O2@JFX\\Zp\\rq3QjJ\\!J1c\\drQ8',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
