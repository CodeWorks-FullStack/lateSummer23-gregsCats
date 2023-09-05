import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { carSchema } from '../models/Car.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
// NOTE register with db in app
// ⬇️our reference,      ⬇️collection in db
  Cars = mongoose.model('Car', carSchema)
  // ............................⬆️ model it uses
}

export const dbContext = new DbContext()
