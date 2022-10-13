
export class User{
    constructor(
        public email: string,
        public id: string,
        private _token: string,
        private _tokenDate: Date
    ){}

    get token(){
        if( !this._tokenDate || this._tokenDate < new Date() ){
            return null;
        }

        console.log(this._token);

        return this._token;
    }
}