const MEMLIST = [
  {
    description: 'Iq 200 mem',
    src: './src/img/iq200mem.jfif'
  },
  {
    description: 'Pants',
    src: './src/img/pants.jfif'
  },
  {
    description: 'Slow Cars',
    src: './src/img/slowCars.jfif'
  }
];

class MemSlider {
  constructor(slidesArray) {
    this.currentSlide = 0;
    this.slidesArray = slidesArray;
  }

  render() {
    document.querySelector('.pagination').append(...this.createPagination());
    document.querySelector('.slides').append(...this.createSlideList());
    document.querySelector('.slide:nth-child(1)').classList.add('active');
    document.querySelector('.dot:nth-child(1)').classList.add('active');
    return true;
  }

  createPagination() {
    let dotsArray = this.slidesArray.map((element, index) => {
      let dot = document.createElement('div');
      dot.classList.add('dot');
      dot.addEventListener('click', () => this.activePagination(index));
      dot.dataset.slideNumber = index;
      return dot;
    });
    
    return dotsArray;
  }

  activePagination(number) {
    let dotList = document.querySelectorAll('.pagination>div');
    Array.from(dotList).map(e => e.classList.remove('active'));
    let paginationElement = document.querySelector(`.pagination>div:nth-child(${number+1})`);
    paginationElement.classList.toggle('active');
    this.switchSlide(number);
    this.switchDescription(number);
  }

  switchSlide(number) {
    let slidesList = document.querySelectorAll('.slides>div');
    Array.from(slidesList).map(e => e.classList.remove('active'));
    let slideElement = document.querySelector(`.slides>div:nth-child(${number+1})`);
    slideElement.classList.toggle('active');
  }

  switchDescription(number) {
    let description = document.querySelector('.description__content');
    description.innerText = this.slidesArray[number]['description'];
    return this.slidesArray[number]['description'];
  }

  createSlide(slideObj) {
    let slide = document.createElement('div');
    slide.className = 'slide';
    slide.style.backgroundImage = `url('${slideObj.src}')`;
    //let img = document.createElement('img');
    //img.src = slideObj.src;
    //slide.append(img);
    return slide;
  }

  createSlideList() {
    let slideList = this.slidesArray.map(e => this.createSlide(e));
    return slideList;
  }

  updateDescription(description) {
    descriptionElement = document.querySelector('.description');
    descriptionElement.innerText = description; 
    return true;
  }



}

let slider = new MemSlider(MEMLIST);
slider.render();