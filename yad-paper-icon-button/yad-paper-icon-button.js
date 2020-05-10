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

import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-styles/color.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/av-icons.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { PolymerElement } from '@polymer/polymer/polymer-element.js';

import YAD from 'node-red-contrib-component-dashboard/src/lib.js';

class YadPaperIconButton extends PolymerElement {
  static get template() {
    return html`
    <style>
    </style>
    <paper-icon-button icon="[[icon]]" style\$="color:[[iconColor]];" on-click="press"></paper-icon-button>
    `;
  }

  static get is() { return 'yad-paper-icon-button'; }
  static get properties() {
    return {
      icon: {
        type: String,
        value: 'menu'
      },
      iconColor: {
        type: String,
        value: 'black'
      }
    };
  }
  constructor() {
    super();
    YAD.initYadElement(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this._connectedCallbackHelper();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._disconnectedCallbackHelper();
  }

  nodeRedMsg(msg) {}
  press() {
    this._sendToNR({payload:true});
  }
}
window.customElements.define(YadPaperIconButton.is, YadPaperIconButton);
