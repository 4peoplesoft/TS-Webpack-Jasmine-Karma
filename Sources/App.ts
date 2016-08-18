/// <reference path="../typings/tsd.d.ts" />
import * as $ from "jquery";
import { Greeter } from './Greeter';

$(() =>
{
  $(document.body).html(new Greeter("Fagner").Name);
  let t = new Date();

});

