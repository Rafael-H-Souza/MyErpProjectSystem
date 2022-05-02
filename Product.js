module.exports = class Product 
{    
    
    constructor(id, name,brand, category,  description , unity, value, weight, entryDate, barCode){     
        this.id = id
        this.name = name
        this.brand = brand
        this.category= category
        this.unity = unity
        this.value = value
        this.description = description   
        this.weight = weight
        this.entryDate = entryDate 
        this.barCode = barCode
        //this.image = image        
    }
    get id(){
        return this._id || 'Variable id not found!!!'
    }
    get name(){
        return this._name || 'Variable name not found!!!'
    }
    get brand(){
        return this._brand || 'Variable brand not found!!!'
    }
    get category(){
        return this._category || 'Variable category not found!!!'
    }
    get description(){
        return this._description || 'Variable description not found!!!'
    }
    get value(){
        return this._value || 'Variable value not found!!!'
    }
    get unity(){
        return this._unity || 'Variable unity not found!!!'
    }
    get weight(){
        return this._weight || 'Variable weight not found!!!'
    }
    get entryDate(){
        return this._entryDate || 'Variable Entry Date not found!!!'
    }
    get barCode(){
        return this._barCode || 'Variable Barcode not found!!!'
    }
    set id(x){
        try{
            if(this.handleData(x) === true)
            {
                if(isNaN(x))
                    throw new Error('Variable not is value number')
                else
                    this._id = x
            }
        }catch(err){
            console.error('Error has occured: '+ err.message)
        }
    }
    set name(x){
        try{
            if(this.handleData(x) === true)
            {
               this._name = x
            }
        }catch(err){
            console.error('Error has occured: '+ err.message)
        }
    }
    set brand(x){
        try{
            if(this.handleData(x) === true)
            {
               this._brand = x
            }
        }catch(err){
            console.error('Error has occured: '+ err.message)
        }
    }
    set category(x){
        try{
            if(this.handleData(x) === true)
            {
               this._category = x
            }
        }catch(err){
            console.error('Error has occured: '+ err.message)
        }
    }
    set value(x){
        try{
            if(this.handleData(x) === true)
            {
                if(isNaN(x))
                    throw new Error('Variable not is value number')
                else
                    this._value = x
            }
        }catch(err){
            console.error('Error has occured: '+ err.message)
        }
    }
    set unity(x){
        try{
            if(this.handleData(x) === true)
            {
                if(isNaN(x))
                    throw new Error('Variable not is value number')
                else
                    this._unity = x
            }
        }catch(err){
            console.error('Error has occured: '+ err.message)
        }
    }
    set weight(x){
        try{
            if(this.handleData(x) === true)
            {
                if(isNaN(x))
                    throw new Error('Variable not is value number')
                else
                    this._weight = x
            }
        }catch(err){
            console.error('Error has occured: '+ err.message)
        }
    }
    set entryDate(x){
        try{
            if(this.handleData(x) === true)
            {
                this._entryDate = x
            }
        }catch(err){
            console.error('Error has occured: '+ err.message)
        }
    }
    set barCode(x){
        try{
            if(this.handleData(x) === true)
            {
                this._barCode = x
            }
        }catch(err){
            console.error('Error has occured: '+ err.message)
        }
    }
    set description(x){
        try{
            if(this.handleData(x) === true)
            {
                this._description = x
            }
        }catch(err){
            console.error('Error has occured: '+ err.message)
        }
    }
    handleData(variable){
        let concept = false
        try{
            if(variable === null) throw new Error('Variable is value null')
            else if(variable === undefined) throw new Error('Variable is value undefined')
            else if(variable.lentgh < 0) throw new Error('The variable size not is allowed')
            else if(variable <= 0) throw new Error('Variable it is out for parameter')
            else concept = true
        }catch (err) {     
            console.error('Error has occured: '+ err.message)
        }finally{
            return  concept == true  ? true : false
        }
    }
}

