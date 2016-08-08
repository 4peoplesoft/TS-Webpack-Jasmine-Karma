/// <reference path="../typings/tsd.d.ts" />
import * as $ from "jquery";
import { Greeter } from './Greeter';
import { Tester } from "./Tester";

$(() =>
{
  $(document.body).html(new Greeter("Fagner").Name);
  let t = new Date();
  
  new Tester().AsyncMethod().then(() =>
  {
    $(document.body).html(new Greeter("123").Name);
  });
});

