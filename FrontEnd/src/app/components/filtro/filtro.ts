import { Component, input, output, inject } from '@angular/core';
import { Perfume } from '../../interfaces/perfume';
import { FormArray, FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TitleCasePipe } from '@angular/common';
import { SearchResult } from '../../interfaces/search-result';

@Component({
  selector: 'app-filtro',
  imports: [FormsModule, ReactiveFormsModule, TitleCasePipe],
  templateUrl: './filtro.html',
  styleUrl: './filtro.css',
})

export class Filtro {
  allProduct = input<Perfume[]>();
  showSearch = output<SearchResult>();

  formBuilder = inject(FormBuilder);

  formSearch = this.formBuilder.group({
    buscar: '',
    selectOpt: this.formBuilder.array(['id','marca','proveedor']),
    selected: ''
  });

  constructor(){
    this.formSearch.controls.selected.setValue(this.selectOpt.value[0])
  }

  ngOnChange(){
    let searchType = this.formSearch.controls.selected.value;
    let newArray: Perfume[] = this.allProduct()!;

    switch(searchType){
      case 'id': 
        newArray = newArray!.sort((a, b) => (a.id < b.id ? -1 : 1));
        break;
      case 'marca': 
        newArray = newArray!.sort((a, b) => (a.marca < b.marca ? -1 : 1));
        break;
      case 'proveedor': 
        newArray = newArray!.sort((a, b) => (a.proveedor < b.proveedor ? -1 : 1));
        break;
    }

    const outputSearch: SearchResult = {result: null, show: false};
    this.showSearch.emit(outputSearch);
  }

  onSearch() {
    let searchType = this.formSearch.controls.selected.value;
    let searchName: string = this.formSearch.controls.buscar.value!;
    const searchArray: Perfume[] = this.allProduct()!;
    let itemFound;

    switch(searchType){
      case 'id': 
        console.log('id selected');
        let numSearch = +searchName;
        itemFound = searchArray.find((item) => {return item.id === numSearch})!;
        break;
      case 'marca': 
        console.log('marca selected');
        itemFound = searchArray.filter((item) => {return item.marca === searchName})!;
        break;
      case 'proveedor': 
        console.log('proveedor selected');
        itemFound = searchArray.filter((item) => {return item.proveedor === searchName})!;
        break;
    }

    console.log("Nuevo: ", itemFound!);

    const outputSearch: SearchResult = {result: itemFound, show: true};
    this.showSearch.emit(outputSearch);
  }

  get selectOpt() {
    return this.formSearch.controls.selectOpt as FormArray;
  }
}
