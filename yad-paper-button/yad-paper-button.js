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
 
import '@polymer/paper-button/paper-button.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { PolymerElement } from '@polymer/polymer/polymer-element.js';

import YAD from 'node-red-contrib-component-dashboard/src/lib.js';

class YadPaperButtonElement extends PolymerElement {
  static get template() {
    return html`
    <style>
      paper-button {
        font-family: 'Roboto', 'Noto', sans-serif;
        font-weight: normal;
        font-size: 14px;
        -webkit-font-smoothing: antialiased;
      }
      paper-button {
        background-color: var(--yad-primary-color, #0d47a1);
        color: white;
      }
      paper-button:hover {
        background-color: var(--yad-primary-color-hover, #1976d2);
      }
    </style>
    <paper-button raised on-click="press"><slot></slot></paper-button>
    `;
  }

  static get is() { return 'yad-paper-button'; }
  static get properties() {
    return {};
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
    var msg = {payload: true};
    this._sendToNR(msg);
  }
}
window.customElements.define(YadPaperButtonElement.is, YadPaperButtonElement);
