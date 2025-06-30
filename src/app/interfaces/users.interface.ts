export interface IUser {
    _id?: string;           // optional for frontend before saving
    name: string;
    email: string;
    password?: string;      // optional on frontend (not returned by backend)
    photoURL: string;
    createdAt?: Date;
    updatedAt?: Date;

}