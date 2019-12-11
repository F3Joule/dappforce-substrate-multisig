"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.NodeVersion = void 0;

var _react = _interopRequireDefault(require("react"));

var _uiApi = require("@polkadot/ui-api");

// Copyright 2017-2019 @polkadot/ui-reactive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
class NodeVersion extends _react.default.PureComponent {
  render() {
    const {
      children,
      className,
      label = '',
      style,
      system_version = '-'
    } = this.props;
    return _react.default.createElement("div", {
      className: className,
      style: style
    }, label, system_version.toString(), children);
  }

}

exports.NodeVersion = NodeVersion;

var _default = (0, _uiApi.withCall)('rpc.system.version')(NodeVersion);

exports.default = _default;