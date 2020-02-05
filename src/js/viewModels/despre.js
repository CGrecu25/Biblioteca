/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * @ignore
 */
/*
 * Your dashboard ViewModel code goes here
 */
require(['accUtils','ojs/ojcore', 'knockout', 'ojs/ojbootstrap', 'ojs/ojknockout'],
 function(accUtils,oj, ko, Bootstrap) {

  function DespreSimpleModel() {}
  
  Bootstrap.whenDocumentReady().then(function () {
    ko.applyBindings(new DespreSimpleModel(), document.getElementById('animationDemo'));
  });

   
}); 