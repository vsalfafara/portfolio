import { Component, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from '../../../services/modal.service'
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {

  @Input() project;
  @Input() id: string;
  private element: any;

  constructor(private modal: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit() {
    let modal = this;

    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    document.body.appendChild(this.element);

    this.element.addEventListener('click', function (e: any) {
      if (e.target.classList.contains('modal')) {
        modal.close();
      }
    });

    this.modal.add(this);
  }

  ngOnDestroy() {
    this.modal.remove(this.id);
    this.element.remove();
  }

  open() {
    this.element.firstChild.classList.add("show")
    document.body.style.overflow = 'hidden'
  }

  close() {
    this.element.firstChild.classList.remove("show")
    document.body.style.overflow = 'auto'
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }

}
