import Aurelia from 'aurelia';
import { MyApp } from './my-app';
import * as HelloWorldPlugin from "@starnetbih/test-plugin";

Aurelia
  .register(HelloWorldPlugin)
  .app(MyApp)
  .start();
