import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"


class CarsService{
  async getCars() {
    const cars = await dbContext.Cars.find() // mongoose find, finds ALL
    return cars
  }
  async createCar(carData) {
    const car = await dbContext.Cars.create(carData)
    return car
  }
  async removeCar(carId) {
    // await dbContext.Cars.findByIdAndRemove(carId)
    // return 'she gone'

    const carToRemove = await dbContext.Cars.findById(carId)
    if(!carToRemove){
      throw new BadRequest("No car at id: "+ carId)
    }
    await carToRemove.remove()
    return `removed the ${carToRemove.make} ${carToRemove.model}. she gone.`

    // NOTE incase you want to update
    // change the values
    // await carToRemove.save()
  }

}

export const carsService = new CarsService()
