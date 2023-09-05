import { carsService } from "../services/CarsService.js";
import BaseController from "../utils/BaseController.js";
import { logger } from "../utils/Logger.js";




export class CarsController extends BaseController{
  constructor(){
    super('api/cars')
    this.router
    .post('', this.createCar)
    .get('', this.getCars)
    .delete('/:carId', this.removeCar)
  }


  async createCar(request, response, next){
    try {
      logger.log('creating car', request.body)
      const car = await carsService.createCar(request.body)
      response.send(car)
    } catch (error) {
      next(error)
    }
  }

  async getCars(request, response, next){
    try {
      const cars = await carsService.getCars()
      response.send(cars)
    } catch (error) {
      next(error)
    }
  }

  async removeCar(request, response, next){
    try {
      const message = await carsService.removeCar(request.params.carId)
      response.send(message)
    } catch (error) {
      next(error)
    }
  }
}
