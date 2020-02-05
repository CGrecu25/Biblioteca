/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * @ignore
 */
/*
 * Your customer ViewModel code goes here
 */
define(['accUtils', 'knockout','ojs/ojbootstrap','ojs/ojresponsiveutils', 'ojs/ojresponsiveknockoututils',  'ojs/ojknockout',  'ojs/ojnavigationlist',
        'ojs/ojlabel', 'ojs/ojselectcombobox', 'ojs/ojcore', 'jquery', 'ojs/ojchart' ],
 function(accUtils, ko, Bootstrap, ResponsiveUtils, ResponsiveKnockoutUtils) {

    function DiagrameViewModel() {
      var self = this;
      self.selectedItem = self.val; 
 /* toggle button variables */ 
 self.val = ko.observable('pie'); 
 self.orientationValue = ko.observable('vertical'); 
 /* chart data */ 
 var barSeries = [
 {name: "Series 1", items: [42, 34]},                            
 {name: "Series 2", items: [55, 30]},                            
 {name: "Series 3", items: [36, 50]},                            
 {name: "Series 4", items: [22, 46]},                             
 {name: "Series 5", items: [22, 46]}];      
 var barGroups = ["Group A", "Group B"];     
 self.barSeriesValue = ko.observableArray(barSeries); 
 self.barGroupsValue = ko.observableArray(barGroups); 
 

      self.checkValue = ko.observableArray();                 
      self.dircolumn = ko.pureComputed(function(){                   
        return (typeof self.checkValue()[0] !== 'undefined' && self.checkValue()[0] != null &&                            
        self.checkValue()[0] === "dirColumn") ? true : false;                 
      }.bind(self));
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.
      var mdQuery = ResponsiveUtils.getFrameworkQuery(                                  
        ResponsiveUtils.FRAMEWORK_QUERY_KEY.MD_UP);     
        self.medium = ResponsiveKnockoutUtils.createMediaQueryObservable(mdQuery);
      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
      self.connected = function() {
        accUtils.announce('Customers page loaded.', 'assertive');
        document.title = "Diagrame";
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
    Bootstrap.whenDocumentReady().then(function() {         
      ko.applyBindings(new LayoutViewModel(), document.getElementById('tabbardemo'));     
    });
    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return DiagrameViewModel;
  }
);
