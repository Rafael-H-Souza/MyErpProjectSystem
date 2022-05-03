module.exports = class People 
{
    constructor(id, fullName,cpf, email, numberPhone, dateOfBirth){
        this.id = id
        this.fullName = fullName
        this.cpf = cpf
        this.email = email
        this.numberPhone = numberPhone
        this.dateOfBirth = dateOfBirth
    }
    get id(){
        return this._id || 'Variable id not found!!!'
    }
    get fullName(){
        return this._fullName|| 'Variable full Name not found!!!'
    }
    get cpf(){
        return this._cpf || 'Variable cpf not found!!!'
    }
    get email(){
        return this._email || 'Variable email not found!!!'
    }
    get numberPhone(){
        return this._numberPhone || 'Variable number Phone not found!!!'
    }
    get dateOfBirth(){
        return this._dateOfBirth || 'Variable date of Birth not found!!!'
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
    set fullName(x){
        try{
            if(this.handleData(x) === true)
            {
                this._fullName = x
            }
        }catch(err){
            console.error('Error has occured: '+ err.message)
        }
    }
    set cpf(x){
        try{
            if(this.handleData(x) === true)
            {
                this._cpf = x
            }
        }catch(err){
            console.error('Error has occured: '+ err.message)
        }
    }
    set email(x){
        try{
            if(this.handleData(x) === true)
            {
                this._email = x
            }
        }catch(err){
            console.error('Error has occured: '+ err.message)
        }
    }
    set numberPhone(x){
        try{
            if(this.handleData(x) === true)
            {
                this._numberPhone = x
            }
        }catch(err){
            console.error('Error has occured: '+ err.message)
        }
    }
    set dateOfBirth(x){
        try{
            if(this.handleData(x) === true)
            {
                this._dateOfBirth = x
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
