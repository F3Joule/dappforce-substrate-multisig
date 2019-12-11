"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _uiApi = require("@polkadot/ui-api");

var _util = require("./util");

var _AddressSummary = require("./AddressSummary");

var _translate = _interopRequireDefault(require("./translate"));

// Copyright 2017-2019 @polkadot/ui-app authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
class AddressRow extends _AddressSummary.AddressSummary {
  render() {
    const {
      className,
      style,
      identIconSize = 64,
      value
    } = this.props;
    return _react.default.createElement("div", {
      className: (0, _util.classes)('ui--AddressRow', !value && 'invalid', className),
      style: style
    }, _react.default.createElement("div", {
      className: "ui--AddressRow-base"
    }, this.renderIcon('ui--AddressRow-icon', identIconSize), _react.default.createElement("div", {
      className: "ui--AddressRow-details"
    }, this.renderAddress(), this.renderBalance(), this.renderBonded(), this.renderNonce())), this.renderChildren());
  }

}

var _default = (0, _translate.default)((0, _uiApi.withCalls)(['derive.accounts.idAndIndex', {
  paramName: 'value'
}], 'query.session.validators')(AddressRow));

exports.default = _default;