
export class Ingredient{
    private name: string;
    private description: string;
    private type: string;
    private fridgeAmount: number;
    private numberOfUnits: number;
    private unitOfMeasurement: string;
    private expiration:Date;

    constructor(name: string, description: string, type:string, amount:number, expiration: Date)
    {
        this.name = name;
        this.description = description;
        this.type= type;
        this.fridgeAmount = amount;
        this.numberOfUnits = 0;
        this.unitOfMeasurement = "";
        this.expiration = expiration;
    }

    get ingredientName()
    {
        return this.name;
    }
    get ingredientType()
    {
        return this.type;
    }
    get inventoryAmount()
    {
        return this.fridgeAmount;
    }
    get details()
    {
        return this.description;
    }
    get numUnits()
    {
        return this.numberOfUnits
    }
    get unitMeasure()
    {
        return this.unitOfMeasurement
    }
    get expirationDate()
    {
        return this.expiration;
    }
   
}
