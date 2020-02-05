/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * @ignore
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['accUtils', 'ojs/ojcore', 'knockout', 'jquery','ojs/ojchart'],
 function(accUtils, oj, ko, $) {

    function DiagramaViewModel() {
      var self = this;
      self.stackValue = ko.observable('off');
      self.orientationValue = ko.observable('vertical');

      var barSeries = [{ name: "12-18 ani", items: [5, 20, 15, 35, 90] },
      { name: "18-25 ani", items: [80, 65, 90, 85,55] }, 
      { name: "25-35 ani", items: [90, 75, 95, 75, 25] },
      { name: "35-50 ani", items: [85, 95,100,85,35] },
      { name: "50+ ani", items: [95, 50,50,65,80] }];
      var barGroups = ["Codul lui DaVinci", "Cronicile din Narnia","Zece negrii mititei","Hobbitul","Micul Print"];
      self.barSeriesValue = ko.observableArray(barSeries);
      self.barGroupsValue = ko.observableArray(barGroups);
      // Below are a set of the ViewModel methods invokedby the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
      self.connected = function() {
        accUtils.announce('Dashboard page loaded.', 'assertive');
        document.title = "Diagrama";
        // Implement further logic if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      self.disconnected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      self.transitionCompleted = function() {
        // Implement if needed
      };
    }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return DiagramaViewModel;
  }
);
