/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Container, Tab, Nav, Row, Col } from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Store</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Packaging</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Сollaboration</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="first">
                  <img
                    src="https://new-retail.ru/upload/iblock/be5/xbe5e10c21b145442af884f7e8e757989.jpg.pagespeed.ic.zW8ejN-9Au.jpg"
                    height="315"
                    weight="315"
                  />
                  <p>
                  In the Lamoda.ru online clothing and footwear store, everyone can choose and buy clothes, shoes or accessories in 2 clicks. The catalog of the Lamoda.ru online store contains more than 1,000 brands of men's, women's and children's shoes and clothes of different price categories, more than 2,000,000 products in total. In addition, we have accessories, cosmetics and perfumes, sporting goods, and the range is constantly updated! Lamoda.ru cooperates directly with many manufacturers, in other cases we choose reliable, trusted suppliers. We guarantee the authenticity of the goods, which is confirmed by certificates.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img
                    src="https://storage.yandexcloud.net/moskvichmag/uploads/2020/05/lamoda-1024x538.jpg"
                    height="400"
                    weight="400"
                  />
                  <p>
                  Lamoda is becoming a marketplace: now the site presents products not only from different brands, but also from other sellers. You can enjoy an even wider range, and we will always carefully monitor the quality of customer service of all sellers. Please note: the terms of delivery and return of goods from third-party sellers must be specified in the product description and on the seller's page.
                </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img
                    src="https://www.retail.ru/upload/resize-images/combined/414111fd3794ac5b0127c6c9a106e9a1r.jpg"
                    height="400"
                    weight="400"
                  />
                  <p>
                  The Lamoda online store gives you the opportunity to try on clothes and shoes before paying for the order. Pay only for what fits and suits you. Also, you always have a whole year to return the unsuitable goods by mail or courier upon receipt of the next order.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img
                    src="https://img.kapital.kz/vpfesFLhddI/bG9jYWw6Ly8vZC9hLzYvNS8wLzc3ZjcwMjdmZjkzZmMzMjNkZTQxNjAxNmU4OS53ZWJw"
                    height="300"
                    weight="400"
                  />
                  <p>
                  Online store of clothes and shoes Lamoda.ru allows you to return the goods within 14 days from the date of purchase. You can return the goods either by courier before paying for the order, or by mail or at one of the pick-up points in Moscow. You can pay for purchases not only in cash, but also with bank cards. All Lamoda Express couriers have a terminal for paying with cards. Now you can buy shoes and clothes in 2 clicks without leaving your home!
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img
                    src="https://prclub.spb.ru/wp-content/uploads/2020/09/La_tv_01_result-scaled.jpg"
                    height="450"
                    weight="450"
                  />
                  <p>
                  Lamoda has launched a new season of the Lamoda TV online fashion and style show on the VKontakte social network. New releases of Lamoda TV will continue to be released once a month and will be available for viewing on lamoda.ru, as well as in the Lamoda VKontakte community. In total, 4 releases are planned for the new season, and the creative agency and production Davidson.Film continues to be responsible for the implementation.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}
