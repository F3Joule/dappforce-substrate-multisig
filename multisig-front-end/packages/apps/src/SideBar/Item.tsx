// Copyright 2017-2019 @polkadot/apps authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { I18nProps } from '@polkadot/ui-app/types';
import { ApiProps } from '@polkadot/ui-api/types';
import { SubjectInfo } from '@polkadot/ui-keyring/observable/types';
import { Route } from '../types';

import React from 'react';
// import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import { Icon, Menu } from '@polkadot/ui-app';
import accountObservable from '@polkadot/ui-keyring/observable/accounts';
import { withApi, withCalls, withMulti, withObservable } from '@polkadot/ui-api';
import { isFunction } from '@polkadot/util';

import ReactTooltip from 'react-tooltip';
import { queryToProp } from '@polkadot/df-utils/index';

type Props = I18nProps & ApiProps & {
  isCollapsed: boolean,
  onClick: () => void,
  allAccounts?: SubjectInfo,
  route: Route
};

interface Tooltip {
  'data-tip': boolean;
  'data-for': string;
  'data-tip-disable'?: boolean;
}

class Item extends React.PureComponent<Props> {
  componentWillUpdate () {
    ReactTooltip.rebuild();
  }

  render () {

    const { route: { i18n, icon, name }, t, isCollapsed } = this.props;

    if (!this.isVisible()) {
      return null;
    }
    const tooltip: Tooltip = {
      'data-for': `nav-${name}`,
      'data-tip': true,
      'data-tip-disable': !isCollapsed
    };

    return (
      <Menu.Item className='apps--SideBar-Item'>
        <NavLink
          activeClassName='apps--SideBar-Item-NavLink-active'
          className='apps--SideBar-Item-NavLink'
          onClick={this.props.onClick}
          to={`/${name}`}
          {...tooltip}
        >
          <Icon name={icon} />
          <div className='text SidebarItem'>
            <div>{t(`sidebar.${name}`, i18n)}</div>
          </div>
          <ReactTooltip
           delayShow={750}
           effect='solid'
           id={`nav-${name}`}
           offset={ { right: -4 } }
           place='right'
          >
            <span>{t(`sidebar.${name}`, i18n)}
          </span>
          </ReactTooltip>
        </NavLink>
      </Menu.Item>
    );
  }

  private hasApi (endpoint: string): boolean {
    const { api } = this.props;
    const [area, section, method] = endpoint.split('.');

    try {
      return isFunction((api as any)[area][section][method]);
    } catch (error) {
      return false;
    }
  }

  private isVisible () {
    const { allAccounts = {}, isApiConnected, isApiReady, route: { display: { isHidden, needsAccounts, needsApi }, name } } = this.props;
    const hasAccounts = Object.keys(allAccounts).length !== 0;

    if (isHidden) {
      return false;
    } else if (needsAccounts && !hasAccounts) {
      return false;
    } else if (!needsApi) {
      return true;
    } else if (!isApiReady || !isApiConnected) {
      return false;
    }

    const notFound = needsApi.filter((endpoint: string | Array<string>) => {
      const hasApi = Array.isArray(endpoint)
        ? endpoint.reduce((hasApi, endpoint) => hasApi || this.hasApi(endpoint), false)
        : this.hasApi(endpoint);

      return !hasApi;
    });

    if (notFound.length !== 0) {
      console.info(`Disabling route ${name}, API ${notFound} not available`);
    }

    return notFound.length === 0;
  }
}

export default withMulti(
  Item,
  withApi,
  withCalls(queryToProp('query.councilElection.stage', { propName: 'electionStage' })),
  withObservable(accountObservable.subject, { propName: 'allAccounts' })
);
