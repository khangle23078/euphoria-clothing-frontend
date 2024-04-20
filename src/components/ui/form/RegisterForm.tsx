import { Button, Card, Form, Input, Typography } from "antd"

interface RegisterFieldType {
  email: string,
  password: string
}

const RegisterForm = () => {
  return (
    <Card className="w-[550px] py-[50px] shadow-sm">
      <Typography.Title level={4} className="text-center">Đăng ký</Typography.Title>
      <Form
        name="loginForm"
        layout="vertical"
        autoComplete="off"
      >
        <Form.Item<RegisterFieldType>
          label="Email"
          name={'email'}
          rules={[{
            required: true,
            message: 'Vui lòng nhập email'
          }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<RegisterFieldType>
          label="Mật khẩu"
          name={'password'}
          rules={[{
            required: true,
            message: 'Vui lòng nhập mật khẩu'
          }]}
        >
          <Input />
        </Form.Item>
        <Button type='primary' htmlType="submit" block>Đăng ký</Button>
      </Form>
    </Card>
  )
}

export default RegisterForm