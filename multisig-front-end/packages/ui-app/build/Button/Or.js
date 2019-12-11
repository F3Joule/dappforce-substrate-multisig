"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("semantic-ui-react/dist/commonjs/elements/Button/Button"));

var _util = require("@polkadot/util");

var _translate = _interopRequireDefault(require("../translate"));

// Copyright 2017-2019 @polkadot/ui-app authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
class ButtonOr extends _react.default.PureComponent {
  render() {
    const {
      className,
      style,
      t,
      text
    } = this.props;
    return _react.default.createElement(_Button.default.Or, {
      className: className,
      style: style,
      label: (0, _util.isUndefined)(text) ? t('or') : text
    });
  }

}

var _default = (0, _translate.default)(ButtonOr);

exports.default = _default;