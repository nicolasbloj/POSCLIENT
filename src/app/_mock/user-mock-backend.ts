import { User } from '../_model/person/user.model';

export class UserMockBackEnd {

    public static data: User[] =
    [
        { username: 'admin', password: 'admin' },
        { username: 'nico', password: '1234' },
        { username: 'pepe', password: '1234' },
        { username: 'juan', password: '1234' },
        { username: 'lucas1', password: '1234' },
        { username: 'alvaro1', password: '123456' },
        { username: 'jorge3', password: '1234' },
        { username: 'miguel2', password: '1234' },
        { username: 'admin1', password: '123456' }
    ];

}
