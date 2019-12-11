"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _types = require("@polkadot/types");

var _uiParams = _interopRequireDefault(require("@polkadot/ui-params"));

var _util = require("./util");

// Copyright 2017-2019 @polkadot/ui-app authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
class EventDisplay extends _react.default.PureComponent {
  render() {
    const {
      children,
      className,
      style,
      value
    } = this.props;
    const params = value.typeDef.map((_ref) => {
      let {
        type
      } = _ref;
      return {
        type: (0, _types.getTypeDef)(type)
      };
    });
    const values = value.data.map(value => ({
      isValid: true,
      value
    }));
    return _react.default.createElement("div", {
      className: (0, _util.classes)('ui--Event', className),
      style: style
    }, children, _react.default.createElement(_uiParams.default, {
      isDisabled: true,
      params: params,
      values: values
    }));
  }

}

exports.default = EventDisplay;