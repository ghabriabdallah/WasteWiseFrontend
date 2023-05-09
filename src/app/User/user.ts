export class User {
  id!: number;
    firstName!: string;
    lastName!: string;
    email!: string;
    password!: string;
    numTel!: string;
    adress!: string;
    additionalAdress!: string;
    postalCode!: number;
    role!: string;
    uid!: Int16Array;
    onDuty!: boolean;
    photo?: Blob;
    photoUrl?: string;
  }
 