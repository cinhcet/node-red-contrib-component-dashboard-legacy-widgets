/**
 * Copyright (c) 2020 cinhcet
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

module.exports = function(RED) {
  "use strict";

  function yadNode(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    node.config = config;
    node.yad = RED.nodes.getNode(node.config.yad);

    node.yad.initElementNode(node);

    node.initMessageOnConnect = {text: node.config.defaultText};

    node.on('input', function(m) {
      node.yad.sendMessage(node, m, 'text');
    });

    node.on('close', function() {
      node.yad.closeElementNode(node);
    });
  }

  /*
  yadNode.prototype.recMessage = function(m) {
    var node = this;
    node.send(m);
  }
  */

  RED.nodes.registerType("yad-text-widget", yadNode);
}
