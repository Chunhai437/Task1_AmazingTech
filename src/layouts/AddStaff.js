import React, { useState } from "react";
import { Button, message, Steps, theme } from "antd";
import { Layout, Form } from "antd";
import {
  
  UploadOutlined,
} from "@ant-design/icons";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";

const steps = [
  {
    title: <span style={{fontSize:'18px'}}>Tạo tài khoản</span>,
    content: <FirstForm />,
  },
  {
    title:  <span style={{fontSize:'18px'}}>Thông tin cá nhân</span>,
    content: <SecondForm />,
  },
];
const { Header, Content } = Layout;

export default function AddStaff() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const contentStyle = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: "white",
    // borderRadius: token.borderRadiusLG,
    // border: 1px dashed ${token.colorBorder},
    marginTop: 16,
  };

  return (
    <Layout hasSider>
      <Layout
        className="site-layout"
        style={{
          // marginLeft: 200,
          bottom: 0,
          height: "140vh",
          marginRight: "10px",
        }}
      >
        <Header
          style={{
            marginLeft: "16px",
            // padding: 0,
            background: colorBgContainer,
            marginRight: "14px",
          }}
        >
          <h3
            style={{
              display: "inline",
              float: "left",
              margin: "0px 20px 0px 0px",
            }}
          >
            THÊM NHÂN VIÊN
          </h3>
          <Button
            size="large"
            style={{
              padding: "5px",
              margin: "13px 20px 0px 0px",
              float: "right",
              border: "1px solid",
              borderColor: "#dddddd",
              borderRadius: "10px",
            }}
          >
            <UploadOutlined
              rotate={90}
              style={{
                fontSize: "30px",
                color: "#1677ff",
              }}
            />
          </Button>
        </Header>

        <Content
          style={{
            margin: "10px 16px 50px",
            overflow: "initial",
            backgroundColor: "white",
            padding: "20px 50px",
          }}
        >
          <div
            style={{
              // padding: 24,
              textAlign: "center",
              background: colorBgContainer,
              display: "inline",
              maxWidth: "100vw",
            }}
          >
            <>
              <Steps current={current} items={items} />
              <div style={contentStyle}>{steps[current].content}</div>
              <div
                style={{
                  marginTop: 24,
                }}
              >
                {current < steps.length - 1 && (
                  <Form>
                    <Button
                      type="primary"
                      size="large"
                      style={{
                        float: "right",
                        marginRight: "20px",
                        fontSize: '18px',
                        fontWeight: '600',
                        textAlign: 'center',
                        width:'max-content'
                      }}
                      onClick={() => next()}
                    >
                      Tiếp
                    </Button>
                  </Form>
                )}

                {current > 0 && (
                  <Button
                  size="large"
                    style={{
                      // margin: '0 10px',
                      float: "left",
                      marginLeft: "20px",
                      fontSize: '18px',
                      fontWeight: '600',
                      textAlign: 'center',
                      width:'max-content'
                    }}
                    onClick={() => prev()}
                  >
                    Quay về
                  </Button>
                )}

                {current === steps.length - 1 && (
                  <Button
                    type="primary"
                    size="large"
                    style={{
                      float: "right",
                      marginRight: "20px",
                      fontSize: '18px',
                      fontWeight: '600',
                      textAlign: 'center',
                      width:'max-content'
                    }}
                    onClick={() => message.success(<spans style={{fontSize:'20px'}}>Processing complete!</spans>)}
                  >
                    Hoàn Thành
                  </Button>
                )}
              </div>
            </>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
