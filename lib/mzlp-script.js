'use babel';

import MzlpScriptView from './mzlp-script-view';
import { CompositeDisposable } from 'atom';
import path from 'path';
import fs from 'fs';

export default {

  mzlpScriptView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {

    this.subscriptions = new CompositeDisposable();


    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'mzlp-script:toggle': () => this.toggle()
    }));
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'mzlp-script:executeFromEditor': () => this.executeFromEditor()
    }));
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'mzlp-script:executeFromTreeview': () => this.executeFromTreeview()
    }));


  },

  deactivate() {
    this.subscriptions.dispose();
  },

  serialize() {
    return {

    };
  },
  execute(filepath){
    var exec = require("child_process").exec;
    var command = "cd "
    command += path.dirname(filepath);
    command += " && start \"\" ";
    filepath = "\""+filepath+"\"";
    command += filepath;
    console.log("command String : " + command);
    exec(command);
  },

  executeFromEditor(){
    var currFile = this.getPathFromEditor();
    if(currFile){
      this.execute(currFile);
    }
  },

  executeFromTreeview(){
    var currFile = this.getPathFromTreeview();
    if(currFile){
      this.execute(currFile);
    }
  },
  getPathFromTreeview(){
    var treeView;
    if(atom.packages.isPackageLoaded("tree-view")){
      treeView = atom.packages.getLoadedPackage("tree-view");
      treeView = treeView.mainModule.treeView;
      console.log("getPathFromTreeview : " + treeView.selectedPath);
      return treeView.selectedPath;
    }
  },
  getPathFromEditor(){
    var editor = atom.workspace.getActivePaneItem();
    if(editor){
      var  file = editor.buffer.file;
      console.log("getPathFromEditor : " + file.path);
      if(file){
        return file.path;
      }
    }
  }

};
