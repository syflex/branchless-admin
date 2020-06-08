export interface DataAuthStateInterface {
  users: Array<any>;
  bankTrans: Array<any>;
  walletTrans: Array<any>;
  token: string;
}

const state: DataAuthStateInterface = {
  users: [],
  bankTrans: [],
  walletTrans: [],
  token: ''
};

export default state;
