"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _types = require("@polkadot/types");

var _uiParams = _interopRequireDefault(require("@polkadot/ui-params"));

var _Static = _interopRequireDefault(require("./Static"));

var _util = require("./util");

// Copyright 2017-2019 @polkadot/ui-app authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const Wrapper = _styledComponents.default.div.withConfig({
  displayName: "Call__Wrapper",
  componentId: "sc-1yht2zm-0"
})([".hash .ui--Static{overflow:hidden;text-overflow:ellipsis;word-break:unset;word-wrap:unset;}"]);

class Call extends _react.default.PureComponent {
  render() {
    const {
      children,
      className,
      style,
      value
    } = this.props;

    const params = _types.Method.filterOrigin(value.meta).map((_ref) => {
      let {
        name,
        type
      } = _ref;
      return {
        name: name.toString(),
        type: (0, _types.getTypeDef)(type)
      };
    });

    const values = value.args.map(value => ({
      isValid: true,
      value
    }));
    const hash = value.hash;
    return _react.default.createElement(Wrapper, {
      className: (0, _util.classes)('ui--Extrinsic', className),
      style: style
    }, children, hash ? _react.default.createElement(_Static.default, {
      className: "hash",
      label: "extrinsic hash"
    }, hash.toHex()) : null, _react.default.createElement(_uiParams.default, {
      isDisabled: true,
      params: params,
      values: values
    }));
  }

}

exports.default = Call;