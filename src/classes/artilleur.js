import Soldat from "./soldat";

class Artilleur extends Soldat{
    constructor(firstname, lastname, nationality, team){
        super(firstname,lastname,nationality, team)
        this.armor = 100
        this.damage = 10
        this.munitionSpe = 3
        this.armorSpe = 20
    }

    capaciteSpe = (s) =>{
        if (s instanceof Soldat && this.team !== s.team) {
            console.log("team diff", s.team)
            if (this.munitionSpe > 0 && s.armor < 100 && s.armor >= 0){
                
                s.armor = s.armor + this.armorSpe
                this.munitionSpe = this.munitionSpe -1 
                if(s.armor > 100) {
                    s.armor = 100
                }
            }
        }
    }
}

export default Artilleur;