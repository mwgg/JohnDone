var mwggJohnDone = {
    init: function() {
        mwggJohnDone.self = require("sdk/self");
        
        mwggJohnDone.panel = require("sdk/panel").Panel({
          width: 260,
          height: 160,
          contentURL: mwggJohnDone.self.data.url("johndone.html"),
          contentScriptFile: mwggJohnDone.self.data.url("johndone.js"),
          contentStyleFile: mwggJohnDone.self.data.url("style.css"),
          onHide: mwggJohnDone.handleHide
        });
        
        mwggJohnDone.button = require('sdk/ui/button/toggle').ToggleButton({
          id: "johndone-button",
          label: "JohnDone",
          icon: {
            "16": "./icon-16.png",
            "32": "./icon-32.png",
            "64": "./icon-64.png"
          },
          onClick: mwggJohnDone.openPanel
        });
    },
    openPanel: function(state) {
        if (state.checked) {
          mwggJohnDone.panel.show({
            position: mwggJohnDone.button
          });
        }
    },
    handleHide: function() {
        mwggJohnDone.button.state('window', {checked: false});
    }


};

mwggJohnDone.init();