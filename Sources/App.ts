import * as $ from "jquery";
import { Greeter } from './Greeter';
import { Tester } from "./Tester";

$(() =>
{
  $(document.body).html(new Greeter("Fagner").Name);
  let t = new Date();
  
  new Tester().AsyncMethod().then(() =>
  {
    console.log(3);
    $(document.body).html(new Greeter("123").Name);
  });
});

