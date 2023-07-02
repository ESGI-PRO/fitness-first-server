import { ConfigService } from './config.service';
import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      //mongoose.connect('mongodb://mongo:27017/users'),
      mongoose.connect(new ConfigService().get('mongoDnsDb')),
  },
];
