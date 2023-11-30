function Attraction(name,description,price){
    this.name = name;
    this.description = price;
    this.price = price; 
    this.summarise = Function ();{
        console.log(`${name} ${description} it costs ${price} to enter`)
    }
}

const AttractionItem1 = new Attraction('Disneyland','is a worlds famous theme park with hundreds of rides and activities','$60')
AttractionItem1.summarise()