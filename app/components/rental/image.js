import Component from '@glimmer/component';

export default class RentalImageComponent extends Component {
    @tracked isLarge = false;

    @action toggleSize() {
      this.isLarge = !this.isLarge;
    }
}
