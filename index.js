const pi = Math.PI;

class Circle {
    constructor (radius){
        this.radius = radius;
    }

    set diameter (diameter){
        this.radius = diameter / 2    
    }
    set circumference (circumference){
        this.radius = circumference / (pi * 2)
    }
    set area (area){
        this.radius = pi * Math.sqrt(this.radius);
    }
    get diameter () {
        return this.radius * 2
    }
    get circumference(){
        return pi * this.diameter
    }
    get area (){
        return pi * Math.sqrt(this.radius)
    }
}

