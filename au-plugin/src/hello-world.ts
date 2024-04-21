import { IEventAggregator, bindable, resolve } from 'aurelia';

export class HelloWorld {
  private ea = resolve(IEventAggregator);
  @bindable message = "";
}
