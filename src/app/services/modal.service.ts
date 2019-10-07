import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ModalService {
  private modals: any[] = [];

  add(modal) {
    this.modals.push(modal);
  }

  remove(id) {
    this.modals = this.modals.filter(x => x.id !== id);
  }

  open(id) {
    let modal = this.modals.filter(x => x.id === id)[0];
    modal.open();
  }

  close(id) {
    let modal: any = this.modals.filter(x => x.id === id)[0];
    modal.close();
  }
}