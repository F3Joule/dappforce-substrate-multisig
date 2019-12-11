"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _util = require("./util");

var _Labelled = _interopRequireDefault(require("./Labelled"));

// Copyright 2017-2019 @polkadot/ui-app authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const Wrapper = _styledComponents.default.div.withConfig({
  displayName: "InfoForInput__Wrapper",
  componentId: "dwrm2-0"
})(["background:white;border-radius:0 0 0.25rem 0.25rem;margin:-0.5rem 0 0.25rem;padding:1.25rem 1.5rem 1rem;&.error{background:#db2828;color:#eee;}&.warning{background:#ffffe0;}> ul{margin:0;padding:0;}"]);

class InfoForInput extends _react.default.PureComponent {
  render() {
    const {
      children,
      className,
      type = 'info'
    } = this.props;
    return _react.default.createElement(_Labelled.default, null, _react.default.createElement(Wrapper, {
      className: (0, _util.classes)(className, type)
    }, children));
  }

}

exports.default = InfoForInput;