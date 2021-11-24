import { STORAGE_KEYS } from './constants';

const getUser = () => localStorage.getItem(STORAGE_KEYS.USER);

export default getUser;