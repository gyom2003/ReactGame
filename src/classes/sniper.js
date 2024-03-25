import Soldat from "./soldat";

class Sniper extends Soldat {
    constructor(firstname, lastname, nationality, team){
        super(firstname,lastname,nationality, team)
        this.munitionSpe = 2
        this.damageSpe = 65
    }
    capaciteSpe = (s) => {
        if (s instanceof Soldat && this.team !== s.team) {
            console.log("team diff", s.team)
            if ( this.munitionSpe > 0 && s.pv > 0){
                if (s.armor > 0){
                    s.armor = s.armor - this.damageSpe
                }else{
                    s.pv = s.pv - this.damageSpe
                }
                this.munitionSpe = this.munitionSpe -1 
            }else{
                if (this.munitionSpe <= 0 ){
                    console.log("Oh punaise !")
                }
            }
        }
    }
}

export default Sniper;