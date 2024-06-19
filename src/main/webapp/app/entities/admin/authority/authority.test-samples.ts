import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '1c981828-a6af-4f84-a2a6-7aba0ec5a066',
};

export const sampleWithPartialData: IAuthority = {
  name: 'fa687fa9-3023-4e77-b9fb-6073a49f64da',
};

export const sampleWithFullData: IAuthority = {
  name: '24262a04-efef-4bdc-9728-4d363efdfd10',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
