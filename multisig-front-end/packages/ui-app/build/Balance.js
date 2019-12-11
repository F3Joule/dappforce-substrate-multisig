"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bn = _interopRequireDefault(require("bn.js"));

var _react = _interopRequireDefault(require("react"));

var _util = require("@polkadot/util");

var _uiReactive = require("@polkadot/ui-reactive");

var _util2 = require("./util");

// Copyright 2017-2019 @polkadot/ui-app authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
class BalanceDisplay extends _react.default.PureComponent {
  render() {
    const {
      balance,
      className,
      label,
      params,
      style
    } = this.props;

    if (!params) {
      return null;
    }

    return balance ? this.renderProvided() : _react.default.createElement(_uiReactive.Balance, {
      className: (0, _util2.classes)('ui--Balance', className),
      label: label,
      params: params,
      style: style
    });
  }

  renderProvided() {
    const {
      balance,
      className,
      label,
      style
    } = this.props;
    let value = "".concat((0, _util.formatBalance)(Array.isArray(balance) ? balance[0] : balance));

    if (Array.isArray(balance)) {
      const totals = balance.filter((value, index) => index !== 0);
      const total = totals.reduce((total, value) => total.add(value), new _bn.default(0)).gtn(0) ? "(+".concat(totals.map(balance => (0, _util.formatBalance)(balance)).join(', '), ")") : '';
      value = "".concat(value, "  ").concat(total);
    }

    return _react.default.createElement("div", {
      className: (0, _util2.classes)('ui--Balance', className),
      style: style
    }, label, value);
  }

}

exports.default = BalanceDisplay;