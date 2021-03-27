// todoItem.js
import { LightningElement } from 'lwc';
export default class child extends LightningElement{
    nextHandler1() {
      console.log('here in child next');
        this.dispatchEvent(new CustomEvent('next1'));
    }
}