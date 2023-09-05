import { catsService } from "../services/CatsService.js";
import BaseController from "../utils/BaseController.js";
import { logger } from "../utils/Logger.js";



// NOTE extends is inheritance, the catsController uses base properties from baseController
export class CatsController extends BaseController{
  constructor(){
    super('api/cats') //NOTE super calls the constructor of BaseController
    this.router // talking about the small hallway off the big hallway (baseController router)
    .get('', this.getCats)
    .get('/:catName', this.getCatByName) // NOTE :catName, the : creates a property on the request params by the following identifier. for instance request.params.catNam, gives us whatever the put in that url spot.
  }

// NOTES request, is an object representing the incoming request from a user
// NOTE response, is an object for you to manipulate and use to send responses the requestor
// NOTE next, is how we kick people back into the hallway.
  getCats(request, response, next){
    try {
      console.log('they be getting cats')
      logger.log(request) // logger log elevates the console to a layer that reaches your debug console. and only console logs when in a dev environment
      const cats = catsService.getCats() // go to the service and let the service handle getting cats
      response.send(cats) // send result of service back to user
    } catch (error) {
      next(error)
    }
  }

  getCatByName(request, response, next){
    try {
      logger.log(request.params)
      const cat = catsService.getCatByName(request.params.catName)
      response.send(cat)
    } catch (error) {
      next(error)// if an error occurs, boot the user back into the hallway
    }
  }
}
