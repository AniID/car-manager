

export class Car {

  id: number = null;
  brand: string = '';
  model: string = '';
  description: string = '';
  registration_number: string = '';
  fuelType: string = '';
  transmission: string = '';

  constructor (data = {}) {
    Object.keys(data).forEach(k => {
      this[k] = data[k];
    });
  }
}

