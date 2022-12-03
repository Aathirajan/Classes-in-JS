class car {
    constructor(name,colour,maxspeed){
    this.name=name;
      this.colour=colour;
      this.maxspeed=maxspeed;
    }
    drive=()=>console.log('Just drove 5kms')
    brake=()=>console.log('Dood, Hit the brakes!')
  }
 
 let tata= new car('Safari','White',200)
    console.log(tata)
 tata.drive()
 tata.brake()