import { Component, ElementRef, ViewChild } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
})
export class NotFoundPage {
  //Se declara el elemento que marqué en el DOM y que deseo animar
  @ViewChild('animar', { read: ElementRef, static: true })
  animar!: ElementRef;
  constructor(private animationCtrl:AnimationController) { }

  //metodo que se levanta justo antes de la visualización
  ngAfterViewInit(){
    const anim01=this.animationCtrl
    .create()
    .addElement(this.animar.nativeElement)
    .duration(2500)
    .iterations(Infinity)
    .keyframes([
      { offset: 0, background: 'red' },
      { offset: 0.72, background: 'var(--background)' },
      { offset: 1, background: 'green' }
    ]);
    
    const anim02= this.animationCtrl
  .create()
  .addElement(this.animar.nativeElement)
  .duration(3500)
  .iterations(Infinity)
  .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
  .fromTo('opacity', '1', '0.2');


  const animacion = this.animationCtrl
  .create()
  .duration(2000)
  .iterations(Infinity)
  .addAnimation([anim01, anim02]);
    animacion.play();

  }

}
