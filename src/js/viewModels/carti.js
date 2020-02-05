/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * @ignore
 */
/*
 * Your incidents ViewModel code goes here
 */
define(['accUtils', 'knockout','ojs/ojbootstrap', 'ojs/ojarraydataprovider', 'ojs/ojcontext', 'ojs/ojknockout', 'ojs/ojinputtext',
'ojs/ojinputnumber', 'ojs/ojtable', 'ojs/ojlabel', 'ojs/ojvalidationgroup'],
 function(accUtils, ko, Bootstrap, ArrayDataProvider, Context) {

    function CartiViewModel() {
      var self = this;
      var deptArray = [{ TitlulCartii: 'Cei trei muschetari', AutorCarte: 'Alexandre Dumas', NrExemplare: 2, Pret: 30 },
          { TitlulCartii: 'La tiganci', AutorCarte: 'Mircea Eliade', NrExemplare: 5, Pret: 25 },
          { TitlulCartii: 'Viata lui Mihai Eminescu', AutorCarte: 'G. Calinescu', NrExemplare: 3, Pret: 18 },
          { TitlulCartii: 'Poezii', AutorCarte: 'Mihai Eminescu', NrExemplare: 15, Pret: 24 },
          { TitlulCartii: 'Hobbitul', AutorCarte: 'J.R.R. Tolkien', NrExemplare: 1, Pret: 55 },
          { TitlulCartii: 'Momente si schite', AutorCarte: 'I.L. Caragiale', NrExemplare: 4, Pret: 23 },
          { TitlulCartii: 'Ion', AutorCarte: 'Liviu Rebreanu', NrExemplare: 5, Pret: 33 },
          { TitlulCartii: 'Hanul Ancutei', AutorCarte: 'Mihail Sadoveanu', NrExemplare: 6, Pret: 19 },
          { TitlulCartii: 'Maitreyi', AutorCarte: 'Mircea Eliade', NrExemplare: 8, Pret: 16 },
          { TitlulCartii: 'Enigma Otiliei', AutorCarte: 'G. Calinescu', NrExemplare: 3, Pret: 25 }];


      self.deptObservableArray = ko.observableArray(deptArray);
      self.dataprovider = new ArrayDataProvider(self.deptObservableArray, { keyAttributes: '@index' });
      self.groupValid = ko.observable();
      self.isEmptyTable = ko.computed(function () {
        return self.deptObservableArray().length === 0;
      }, self);
      // add to the observableArray
      self.addRow = function () {
        if (self.groupValid() === 'invalidShown') {
          return;
        }
        var dept = {
          TitlulCartii: self.inputTitlulCartii(),
          AutorCarte: self.inputAutorCarte(),
          NrExemplare: self.inputNrExemplare(),
          Pret: self.inputPret()
        };
        self.deptObservableArray.push(dept);
      }.bind(self);
  
      // used to update the fields based on the selected row
      self.updateRow = function () {
        if (self.groupValid() === 'invalidShown') {
          return;
        }
        var element = document.getElementById('table');
        var currentRow = element.currentRow;
  
        if (currentRow != null) {
          self.deptObservableArray.splice(currentRow.rowIndex, 1, {
            TitlulCartii: self.inputTitlulCartii(),
            AutorCarte: self.inputAutorCarte(),
            NrExemplare: self.inputNrExemplare(),
            Pret: self.inputPret()
          });
        }
      }.bind(self);
  
      // used to remove the selected row
      self.removeRow = function () {
        var element = document.getElementById('table');
        var currentRow = element.currentRow;
  
        if (currentRow != null) {
          self.deptObservableArray.splice(currentRow.rowIndex, 1);
        }
      }.bind(self);
  
      self.removeAllRows = function () {
        self.deptObservableArray.removeAll();
      }.bind(self);
  
      // intialize the observable values in the forms
      self.inputTitlulCartii = ko.observable();
      self.inputAutorCarte = ko.observable();
      self.inputNrExemplare = ko.observable();
      self.inputPret = ko.observable();
      self.currentRowListener = function (event) {
        var data = event.detail;
        if (event.type === 'currentRowChanged' && data.value != null) {
          var rowIndex = data.value.rowIndex;
          var dept = self.deptObservableArray()[rowIndex];
          if (dept != null) {
            self.inputTitlulCartii(dept.TitlulCartii);
            self.inputAutorCarte(dept.AutorCarte);
            self.inputNrExemplare(dept.NrExemplare);
            self.inputPret(dept.Pret);
          }
        }
      }.bind(self);
  
      self.hideTable = function (hide) {
        var table = document.getElementById('table');
        var tableContainer = document.getElementById('tableContainer');
        var noDataDiv = document.getElementById('noDataDiv');
        if (hide === true) {
          table.style.display = 'none';
          noDataDiv.style.display = 'block';
          tableContainer.classList.add('oj-sm-align-self-center');
        } else {
          table.style.display = '';
          noDataDiv.style.display = 'none';
          tableContainer.classList.remove('oj-sm-align-self-center');
        }
      };
        }         
        return new CartiViewModel();    
        var vm = new ViewModel();
  
        Bootstrap.whenDocumentReady().then(
          function () {
            ko.applyBindings(vm, document.getElementById('tableDemo'));
            var table = document.getElementById('table');
            table.addEventListener('currentRowChanged', vm.currentRowListener);
            var busyContext = Context.getContext(table).getBusyContext();
            busyContext.whenReady().then(function () {
              vm.hideTable(vm.isEmptyTable());
              vm.isEmptyTable.subscribe(function (newValue) {
                vm.hideTable(newValue);
              });
            });
          }
        );
      }); 

     