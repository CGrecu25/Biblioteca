/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * @ignore
 */
/*
 * Your customer ViewModel code goes here
 */
define(['knockout', 'ojs/ojbootstrap', 'ojs/ojknockout', 'ojs/ojfilepicker', 'ojs/ojinputtext', 'ojs/ojlabel', 'ojs/ojcheckboxset'],
function (ko, Bootstrap) {
  var self = this;
  function BasicModel() {
    self.multiple = ko.observableArray(['multiple']);
    self.multipleStr = ko.pureComputed(function () {
      return self.multiple()[0] ? 'multiple' : 'single';
    }.bind(self));

    self.disabled = ko.observableArray();
    self.isDisabled = ko.pureComputed(function () {
      return self.disabled()[0] === 'disable' ? true : false;
    }.bind(self));

    self.invalidMessage = ko.observable('');

    self.invalidListener = function(event) {
      self.fileNames([]);
      self.invalidMessage("{severity: '" + event.detail.messages[0].severity + "', summary: '" + event.detail.messages[0].summary + "'}");
      var promise = event.detail.until;
      if (promise) {
        promise.then(function(){
          self.invalidMessage('');
        }.bind(self));
      }
    }.bind(self);

    self.acceptStr = ko.observable('image/*');
    self.acceptArr = ko.pureComputed(function () {
      var accept = self.acceptStr();
      return accept ? accept.split(',') : [];
    }.bind(self));

    self.fileNames = ko.observableArray([]);

    self.selectListener = function (event) {
      self.invalidMessage('');
      var files = event.detail.files;
      for (var i = 0; i < files.length; i++) {
        self.fileNames.push(files[i].name);
      }
    }.bind(self);
  }

  Bootstrap.whenDocumentReady().then(function () {
    ko.applyBindings(new BasicModel(), document.getElementById('parentContainer'));
  });
});