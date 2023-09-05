import { BadRequest, CustomError } from "../utils/Errors.js"
import { logger } from "../utils/Logger.js"

const fakeDb = {
  cats : [
    {name: 'scout', age: 305, color: 'calico'},
    {name: 'sprocket', age: 8.5, color: 'black'},
    {name: 'harris', age: 6, color: 'orange'},
    {name: 'kat', age: 9, color: 'orange'},
  ]
}

class CatsService {
  getCatByName(catName) {
    const cat = fakeDb.cats.find(cat => cat.name == catName)
    if(!cat){
      // throw new CustomError();
      throw new BadRequest('no cat with name: '+ catName)
    }
    logger.log(cat)
    return cat
  }

  getCats() {
    const cats = fakeDb.cats
    return cats // NOTE service needs to return data back to the controller so the controller can send it to the user
  }



}

export const catsService = new CatsService()
