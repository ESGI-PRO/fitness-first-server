import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AnalyticsInterface, AnalyticsVisitorsinterface, BrowserInterface } from './dto_interface/analytics.interface';
import { CreateAnalyticsDto, CreateAnalyticsVisitorsDto, FindAnalyticsDtoBy, FindAnalyticsVisitorsDto, GetAnalyticEventDto, GetAnalyticsDto } from './dto_interface/analytics.dto';
import { faker } from '@faker-js/faker';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('Analytics')
    private analyticsModel: Model<AnalyticsInterface>,
    @InjectModel('AnalyticsVisitors')
    private analyticsVisitorsModel: Model<AnalyticsVisitorsinterface>,
  ) {}

  onModuleInit() {
    const  cleardb = () => {
       this.analyticsModel.deleteMany({}).exec();
       this.analyticsVisitorsModel.deleteMany({}).exec();
     }

      const seedAlgo = async () => {
      let apps: BrowserInterface[] = []
      // simulate 10 apps instances
      for (let i = 0; i < 10; i++) {
        const apiKey = faker.string.alphanumeric(25);
        const appName = faker.lorem.word();
        const baseUrl = faker.internet.url()
        apps = [...apps, {
          apiKey,
          appName,
          baseUrl
        }]
      }
      // for each apps simulate 20 analytic visitors counts
      for (let i = 0; i < apps.length; i++) {
        const app = apps[i];
        for (let i = 0; i < 20; i++) {
          const userAgent = faker.internet.userAgent();

          const analyticVisitor = {
           ...app,
           userAgent: userAgent,
           count:  Math.floor(Math.random() * 1000),
          }
          await this.createVisitors(analyticVisitor)
        }
        // for each apps simulate analytic events

        //init event categories
        const eventCategories = [
          "User",
          "Subscription",
          "Invoice",
          "Messenger",
          "Visit",
          "Bug Reports",
        ]
        const eventActions = {
          "User": ["Login Account"],
          "Subscription": ["New Subscription"],
          "Invoice": ["New Invoice"],
          "Messenger": ["New Message", "New Conversation"],
          "Visit": ["New Visit"],
          "Bug Reports": ["New Bug Report"]
        }
        const continentNames = [
          "Asia", "Africa", "North America", "South America", "Antarctica", "Europe", "Australia"
        ]
        const dateList=[
          faker.date.past().toISOString(),
          faker.date.past().toISOString(),
          faker.date.past().toISOString(),
          faker.date.past().toISOString(),
          faker.date.past().toISOString(),
          faker.date.past().toISOString(),
        ]

        // for each category and for each action create 10 analytic events
        for (let i = 0; i < eventCategories.length; i++) {
          const category = eventCategories[i];
          for (let j = 0; j < eventActions[category].length; j++) {
            const action = eventActions[category][j];
            for (let k = 0; k < Math.floor(Math.random() * 10) + 5; k++) {
              const analyticEvent = {
                appName: app.appName,
                apiKey: app.apiKey,
                baseUrl: app.baseUrl,
                userAgent: faker.internet.userAgent(),
                data: {
                  eventName: faker.lorem.word(),
                  eventAction: action,
                  eventCategory: category,
                  eventPage: faker.internet.url(),
                  date: dateList[Math.floor(Math.random() * 5)],
                  events:{
                    event: faker.lorem.word(),
                    value: faker.lorem.word(),
                    continent:  continentNames[Math.floor(Math.random() * 7)],
                    country: faker.location.country()
                  }
                }
              }
              await this.createAnalytics(analyticEvent)
            }
          }
        }

      }

    }

    //cleardb()
    this.analyticsModel.countDocuments({}).then(async (count) => {
       if (count < 1) {
         await seedAlgo()
       }
     }).catch((err) => {
       console.log(err);
     });
   }
  

  async createAnalytics(createAnalyticsDto: CreateAnalyticsDto): Promise<AnalyticsInterface> {
    const createdAnalytics = new this.analyticsModel(createAnalyticsDto);
    return createdAnalytics.save();
  }

  async findAllAnalytics(): Promise<AnalyticsInterface[]> {
    return this.analyticsModel.find().exec();
  }

  async findAnalyticsById(id: string): Promise<AnalyticsInterface> {
    return this.analyticsModel.findById(id);
  }

  //visitors
  async createVisitors(createAnalyticsVisitorsDto: CreateAnalyticsVisitorsDto): Promise<AnalyticsVisitorsinterface> {
    const createdAnalyticsVisitors = new this.analyticsVisitorsModel(createAnalyticsVisitorsDto);
    return createdAnalyticsVisitors.save();
  }

  async findAllAnalyticsVisitors(): Promise<AnalyticsVisitorsinterface[]> {
    return this.analyticsVisitorsModel.find().exec();
  }

  async findAnalyticsVisitorsById(appKey: string): Promise<AnalyticsVisitorsinterface> {
    return this.analyticsVisitorsModel.findOne({appKey: appKey});
  }

  async findAnalyticsVisitorsByAppName(appName: string): Promise<AnalyticsVisitorsinterface[]> {
    return this.analyticsVisitorsModel.find({appName: appName}).exec();
  }

  async updateAnalyticsVisitors(data: FindAnalyticsVisitorsDto): Promise<AnalyticsVisitorsinterface> {
    return this.analyticsVisitorsModel.findOneAndUpdate(
      {
        apiKey: data.apiKey
      }, 
      { $inc: {count: 1 },
        userAgent: data.userAgent
      }, 
      { new: true, upsert: true });
  }

  //find analytics by params
  async findAnalyticsByParams(params: FindAnalyticsDtoBy): Promise<AnalyticsInterface[]> {
   const {data, ...rest} = params
   let options = {...rest}
    if(data){
      const new_options = Object.keys(data).reduce(function (previous, key) {
        previous[`data.${key}`] = data[`${key}`];
        return previous
      },{});
      options = {...options, ...new_options}
    }
    return this.analyticsModel.find(options).exec();
  }
  //find analytics visitors by params
  async findAnalyticsVisitorsByParams(data: FindAnalyticsVisitorsDto): Promise<AnalyticsVisitorsinterface[]> {
    return this.analyticsVisitorsModel.find(data).exec();
  }

}
