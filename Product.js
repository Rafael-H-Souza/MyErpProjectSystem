module.exports = class Product 
{ 
   
    constructor(cod, name,category,  descriptions, value , units, weight)
    {      
    
        this.cod = cod  > 0 && cod != isNaN ? cod: cod = null
        this.name = name.length > 0 && name != isNaN? name :name = null
        this.category= category.length > 0 && category != isNaN? category :category = null 
        this.units = units.length > 0 && units !=isNaN? units :  units = null
        this.descriptions = descriptions.length > 0 && descriptions != isNaN ? descriptions :descriptions= null
        this.value = value > 0 && value != isNaN ? value :  value = null      
        this.weight = weight > 0.000 && weight  != isNaN ? weight: weight = null 
        
    }
    getProduct(){
        console.log(`Cod: ${this.cod}\tName: ${this.name}\tCategory: ${this.category}\tUnits:${this.units}\n`+
        `Descriptions: ${this.descriptions}\tValue: ${this.value}\t Weight: ${this.weight}`)
    }
    erroChecking(erro)
    {
        return `Value for ${erro} is invalid`
    }
     
}
