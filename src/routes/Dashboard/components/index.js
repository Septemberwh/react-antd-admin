import React from 'react';
import { connect } from 'dva';
import { Layout, Col, Row } from 'antd';
import Icon from 'components/Icon';
import BaseComponent from 'components/BaseComponent';
import Panel from 'components/Panel';
import './index.less';
const { Content } = Layout;

@connect(({ dashboard }) => ({
  dashboard
}))
export default class Dashboard extends BaseComponent {
  render() {
    const { dashboard } = this.props;
    const { bar1, bar2 } = dashboard;
    return (
      <Layout className="full-layout page dashboard-page">
        <Content>
          <Row gutter={20}>
            <Col md={6}>
              <Panel className="qq" header={false} cover>
                <Icon type="qq" antd />
                <h2>
                  <b>523</b>
                </h2>
                <h5 className="text-muted">QQ</h5>
              </Panel>
            </Col>
            <Col md={6}>
              <Panel className="wechat" header={false} cover>
                <Icon type="wechat" antd />
                <h2>
                  <b>99+</b>
                </h2>
                <h5 className="text-muted">微信</h5>
              </Panel>
            </Col>
            <Col md={6}>
              <Panel className="skype" header={false} cover>
                <Icon type="skype" antd />
                <h2>
                  <b>2</b>
                </h2>
                <h5 className="text-muted">skype</h5>
              </Panel>
            </Col>
            <Col md={6}>
              <Panel className="github" header={false} cover>
                <Icon type="github" antd />
                <h2>
                  <b>999</b>
                </h2>
                <h5 className="text-muted">github</h5>
              </Panel>
            </Col>
          </Row>
        </Content>
      </Layout>
    );
  }
}
