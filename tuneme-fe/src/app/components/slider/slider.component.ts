import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Slide {
  image: string;
  text1: string;
  text2: string;
}

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, OnDestroy {
  slides: Slide[] = [];
  displayedSlides: Slide[] = []; // For infinite scrolling
  currentIndex: number = 0;
  slidesPerPage: number = 3; // Default for desktop
  animationDuration: number = 1500; // 1.5 seconds
  autoplayInterval: number = 5000; // 5 seconds
  private autoplayTimer: any;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateSlidesPerPage();
  }

  ngOnInit(): void {
    this.updateSlidesPerPage(); // Set initial slidesPerPage
    this.loadSlides().then(() => {
      this.setupInfiniteScroll();
      this.startAutoplay();
    });
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  async loadSlides(): Promise<void> {
    try {
      const response = await fetch('assets/slider-content.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.slides = await response.json();
    } catch (error) {
      console.error('Failed to load slider content:', error);
    }
  }

  setupInfiniteScroll(): void {
    if (this.slides.length > 0) {
      // Duplicate slides for infinite scrolling effect
      this.displayedSlides = [...this.slides, ...this.slides, ...this.slides];
      // Start in the middle set of duplicated slides
      this.currentIndex = this.slides.length;
    }
  }

  startAutoplay(): void {
    this.stopAutoplay(); // Clear any existing timer
    this.autoplayTimer = setInterval(() => {
      this.nextSlide();
    }, this.autoplayInterval);
  }

  stopAutoplay(): void {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
      this.autoplayTimer = null;
    }
  }

  nextSlide(): void {
    this.currentIndex += this.slidesPerPage;
    if (this.currentIndex >= this.slides.length * 2) {
      // If we are in the last duplicated set, jump back to the first duplicated set
      setTimeout(() => {
        this.currentIndex = this.slides.length;
        // Disable transition for instant jump
        const sliderWrapper = document.querySelector('.slider-wrapper') as HTMLElement;
        if (sliderWrapper) {
          sliderWrapper.style.transition = 'none';
        }
      }, this.animationDuration);
      setTimeout(() => {
        // Re-enable transition after jump
        const sliderWrapper = document.querySelector('.slider-wrapper') as HTMLElement;
        if (sliderWrapper) {
          sliderWrapper.style.transition = `transform ${this.animationDuration / 1000}s ease-in-out`;
        }
      }, this.animationDuration + 50);
    }
  }

  prevSlide(): void {
    this.currentIndex -= this.slidesPerPage;
    if (this.currentIndex < this.slides.length) {
      // If we are in the first duplicated set, jump back to the last duplicated set
      setTimeout(() => {
        this.currentIndex = this.slides.length * 2 - this.slidesPerPage;
        // Disable transition for instant jump
        const sliderWrapper = document.querySelector('.slider-wrapper') as HTMLElement;
        if (sliderWrapper) {
          sliderWrapper.style.transition = 'none';
        }
      }, this.animationDuration);
      setTimeout(() => {
        // Re-enable transition after jump
        const sliderWrapper = document.querySelector('.slider-wrapper') as HTMLElement;
        if (sliderWrapper) {
          sliderWrapper.style.transition = `transform ${this.animationDuration / 1000}s ease-in-out`;
        }
      }, this.animationDuration + 50);
    }
  }

  goToSlide(dotIndex: number): void {
    this.currentIndex = this.slides.length + (dotIndex * this.slidesPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.slides.length / this.slidesPerPage);
  }

  get currentDotIndex(): number {
    return Math.floor((this.currentIndex % this.slides.length) / this.slidesPerPage);
  }

  onMouseEnter(): void {
    this.stopAutoplay();
  }

  onMouseLeave(): void {
    this.startAutoplay();
  }

  onFocusIn(): void {
    this.stopAutoplay();
  }

  onFocusOut(): void {
    this.startAutoplay();
  }

  // Method to update slidesPerPage based on screen size (will be called from host listener)
  updateSlidesPerPage(): void {
    if (window.innerWidth <= 768) { // Mobile
      this.slidesPerPage = 1;
    } else if (window.innerWidth <= 1024) { // Tablet
      this.slidesPerPage = 2;
    } else { // Desktop
      this.slidesPerPage = 3;
    }
  }
}