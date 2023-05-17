import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomsModule } from './rooms/rooms.module';
import { MessagesModule } from './messages/messages.module';
import { ConfigService } from './services/config/config.service';
import { ClientProxyFactory } from '@nestjs/microservices';
import { MongoConfigService } from './services/config/mongo-config.service';
import { RoomSchema } from './_schemas/room.schema';
import { MessageSchema } from './_schemas/message.schema';


@Module({
  controllers: [],
  providers: [
    ConfigService,
    {
      provide: 'USER_SERVICE',
      useFactory: (configService: ConfigService) => {
        const userServiceOptions = configService.get('userService');
        return ClientProxyFactory.create(userServiceOptions);
      },
      inject: [ConfigService],
    }
  ],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      useClass: MongoConfigService,
    }),
    MongooseModule.forFeature([
      {
        name: 'Room',
        schema: RoomSchema,
        collection: 'rooms',
      },
      {
        name: 'Message',
        schema: MessageSchema,
        collection: 'messages',
      },
    ]),
    
    RoomsModule,
    MessagesModule,
  ],
})

export class AppModule {}
