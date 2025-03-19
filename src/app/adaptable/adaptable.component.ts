import { Component, EventEmitter, Input, Output,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModel } from '@angular/forms';
import { products } from '../../modles/Product.modles';

@Component({
  selector: 'app-adaptable',
  imports: [CommonModule],
  templateUrl: './adaptable.component.html',
  styleUrl: './adaptable.component.css'
})
export class AdaptableComponent {

  //Funcion lista
  @Input() productos: any[] = [];
  @Output() productAdded = new EventEmitter<any>(); 

  addToCart(product: any) {
    this.productAdded.emit(product);
  }



  isListView: boolean = false;

changeFormat(format: 'list' | 'grid'){
  this.isListView = format == 'list';
}

productSelected: products | null = null;


}
