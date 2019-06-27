class Carousel{
    constructor(element){
        this.element = element; 
        this.carouselImages = element.querySelectorAll('.carousel-img'); 
        this.carouselImages = Array.from(this.carouselImages).map(image => new CarouselImage(image));  
        this.selectedIndex = 0; 
        this.carouselImages[this.selectedIndex].select(); 
         this.interval = setInterval(() => this.right(), 6000); 

    }
    right(){
        this.selectedIndex = (this.selectedIndex+1)%this.carouselImages.length; 
        this.carouselImages[this.selectedIndex].select();
    }

    left(){
        this.selectedIndex = (this.selectedIndex-1 + this.carouselImages.length) %this.carouselImages.length; 
        this.carouselImages[this.selectedIndex].select();
    }

}



class CarouselImage {
    constructor(element) {
        this.element = element;

        this.data = this.element.dataset.item;
        
        this.itemContent = document.querySelector(`.carousel-content[data-item="${this.data}"]`);
        
        this.itemContent = new CarouselContent(this.itemContent);
    }

    select() {
        let carouselImages = document.querySelectorAll('.carousel-img');

        carouselImages.forEach(image => {
            image.classList.remove('active');
        });

        this.element.classList.add('active');
        

        this.itemContent.select();
    }
}

class CarouselContent {
    constructor(element) {
        this.element = element;
    }

    select() {
        let carouselContent = document.querySelectorAll('.carousel-content');

        carouselContent.forEach(item => {
            item.classList.remove('active');
        });

        this.element.classList.add('active');
    }
}


document.querySelectorAll('.carousel').forEach(item => new Carousel(item)); 



