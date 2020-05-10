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

import YAD from 'node-red-contrib-component-dashboard/src/lib.js';

import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { PolymerElement } from '@polymer/polymer/polymer-element.js';

class YadTextWidget extends PolymerElement {
  static get template() {
    return html`
    <style>
      .container {
        display: flex;
        justify-content: space-between;
      }
      .label {
        font-family: 'Roboto', 'Noto', sans-serif;
        font-weight: bold;
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
        color: var(--yad-text-label-color, var(--yad-primary-color, #0d47a1));
      }
    </style>
    <div class="container">
      <div class="label">
        <slot></slot>
      </div>
      <div>[[text]]</div>
    </div>
    `;
  }

  static get properties() {
    return {
      text: {
        type: String,
        value: ''
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

  nodeRedMsg(msg) {
    this.text = msg.payload;
  }
  nodeRedInitMsgOnConnect(msg) {
    this.text = msg.text;
  }
}

window.customElements.define('yad-text-widget', YadTextWidget);
