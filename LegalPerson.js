const People = require("./People")
module.exports = class LegalPerso extends People{
    constructor(id, fullName,cpf, email, numberPhone, dateOfBirth,corporateName, fantasyName, initials, cnpj){
        super(id,fullName,cpf,email,numberPhone,dateOfBirth)
        this.corporateName = corporateName
        this.fantasyName = fantasyName
        this.initials = initials
        this.cnpj = cnpj
    }
    get corporateName(){
        return this._corporateName|| 'Variable corporateName Name not found!!!'
    }
    get fantasyName(){
        return this._fantasyName|| 'Variable fantasyName Name not found!!!'
    }
    get initials(){
        return this._initials|| 'Variable initials Name not found!!!'
    }
    get cnpj(){
        return this._cnpj|| 'Variable cnpj Name not found!!!'
    }
    set corporateName(x){
        try{
            if(this.handleData(x) === true)
            {
                this._corporateName = x
            }
        }catch(err){
            console.error('Error has occured: '+ err.message)
        }
    }
    set fantasyName(x){
        try{
            if(this.handleData(x) === true)
            {
                this._fantasyName = x
            }
        }catch(err){
            console.error('Error has occured: '+ err.message)
        }
    }
    set initials(x){
        try{
            if(this.handleData(x) === true)
            {
                this._initials = x
            }
        }catch(err){
            console.error('Error has occured: '+ err.message)
        }
    }
    set cnpj(x){
        try{
            if(this.handleData(x) === true)
            {
                this._cnpj = x
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