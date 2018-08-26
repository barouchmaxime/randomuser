/**
 * Created by maximedenoun on 2017-05-26.
 */

export interface AppState {
  selectedId: number;
  users:{};
}
/**
 * Created by maximedenoun on 2017-05-26.
 */
export interface IUserIcon {
  id?: number,
  name?: string,
  iconClass:string,
  userFieldLabel:string,
  userFieldValue:string
}
export class UserIcon implements IUserIcon{
  constructor(public iconClass:string,  public userFieldLabel:string,  public userFieldValue:string) { }
}
export interface IRandomUser {
  id?: number,
  vote?: number,
  route?: string,
  displayName?: string,
  birthday?: string,
  address?: string,
  password?: string,
  name: {
    title: string,
    first: string,
    last: string
  },
  location:{
    street: string
  },
  email:string,
  login:{
    password: string
  },
  dob:{
    date: string
  },
  phone: string,
  picture: {
    large: string
  }
}
export class RandomUser implements IRandomUser{
  id?: number;
  vote?: number = 0;
  route?: string;
  displayName?: string;
  birthday?: string;
  address?: string;
  password?: string;
  name: {
    title: string,
    first: string,
    last: string
  };
  location:{
    street: string
  };
  email:string;
  login:{
    password: string
  };
  dob:{
    date: string
  };
  phone: string;
  picture: {
    large: string
  };
}

